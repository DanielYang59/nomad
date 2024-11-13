#
# Copyright The NOMAD Authors.
#
# This file is part of NOMAD. See https://nomad-lab.eu for further info.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
from __future__ import annotations

from typing import Any
import h5py
import re

import numpy as np
import pint
from h5py import File

from nomad.metainfo.data_type import NonPrimitive
from nomad.datamodel.metainfo.annotations import H5WebAnnotation
from nomad.utils import get_logger

LOGGER = get_logger(__name__)


_H5_FILE_ = re.compile(
    r'(?:.*?/uploads/(?P<upload_id>.+?)/(?P<directory>.+?)/)*(?P<file_id>.+?)#(?P<path>.+)'
)


def match_hdf5_reference(reference: str):
    """
    Match reference to HDF5 upload path syntax.
    """
    if not (match := _H5_FILE_.match(reference)):
        return None

    return match.groupdict()


class HDF5Wrapper:
    def __init__(self, file: str, path: str):
        self.file: str = file
        self.path: str = path
        self.handler: h5py.File | None = None

    def __enter__(self):
        self._close()
        self.handler = h5py.File(self.file, 'a')
        return self.handler[self.path]

    def __exit__(self, exc_type, exc_value, traceback):
        self._close()

    def _close(self):
        if self.handler:
            self.handler.close()


class HDF5Reference(NonPrimitive):
    """
    A utility class for handling HDF5 file operations within a given archive.

    This class provides static methods to read, write, and manage datasets and attributes
    in HDF5 files. It ensures that the operations are performed correctly by resolving
    necessary file and upload information from the provided paths and archives.

    Methods
    -------
    _get_upload_files(archive, path: str)
        Retrieves the file ID, path, and upload files object from the given path.

    write_dataset(archive, value: Any, path: str) -> None
        Writes a given value to an HDF5 file at the specified path.

    read_dataset(archive, path: str) -> Any
        Reads a dataset from an HDF5 file at the specified path.

    _normalize_impl(self, value, **kwargs)
        Validates if the given value matches the HDF5 reference format.
    """

    @staticmethod
    def _get_upload_files(archive, path: str):
        match = match_hdf5_reference(path)
        file_id = match['file_id']

        if not file_id:
            LOGGER.error('Invalid HDF5 path.')

        from nomad import files
        from nomad.datamodel.context import ServerContext

        upload_id = match['upload_id']
        if not upload_id:
            upload_id, _ = ServerContext._get_ids(archive, required=True)
        return file_id, match['path'], files.UploadFiles.get(upload_id)

    @staticmethod
    def write_dataset(
        archive, value: Any, path: str, attributes: dict = {}, quantity_name: str = None
    ) -> None:
        """
        Write value to HDF5 file specified in path following the form
        filename.h5#/path/to/dataset. upload_id is resolved from archive.

        If attributes is provided, will write them to the hdf5 dataset referenced by
        archive quantity with name quantity_name and to its parent group.
        """
        file, path, upload_files = HDF5Reference._get_upload_files(archive, path)
        mode = 'r+b' if upload_files.raw_path_is_file(file) else 'wb'
        with h5py.File(upload_files.raw_file(file, mode), 'a') as f:
            if path in f:
                del f[path]
            f[path] = getattr(value, 'magnitude', value)
            dataset = f[path]

            if attributes and quantity_name:
                path_segments = path.rsplit('/', 1)
                if len(path_segments) == 1:
                    return

                unit = attributes.get('unit')
                long_name = attributes.get('long_name')
                if unit:
                    unit = unit if isinstance(unit, str) else format(unit, '~')
                    dataset.attrs['units'] = unit
                    long_name = f'{long_name} ({unit})'
                if long_name:
                    dataset.attrs['long_name'] = long_name

                target_attributes = {
                    key: val
                    for key, val in attributes.items()
                    if key not in ['signal', 'axes']
                }
                target_attributes['NX_class'] = 'NXdata'
                signal = attributes.get('signal')
                if quantity_name == signal:
                    target_attributes['signal'] = path_segments[1]

                axes = attributes.get('axes', [])
                axes = [axes] if isinstance(axes, str) else axes
                if quantity_name in axes:
                    axes[axes.index(quantity_name)] = path_segments[1]
                    target_attributes['axes'] = axes

                group = dataset.parent
                group.attrs.update(target_attributes)

    @staticmethod
    def read_dataset(archive, path: str) -> Any:
        """
        Read HDF5 dataset from file specified in path following the form
        filename.h5#/path/to/dataset. upload_id is resolved from archive.
        """
        file, path, upload_files = HDF5Reference._get_upload_files(archive, path)
        with h5py.File(upload_files.raw_file(file, 'rb')) as f:
            return (f[file] if file in f else f)[path][()]

    def _normalize_impl(self, value, **kwargs):
        if match_hdf5_reference(value) is not None:
            return value

        raise ValueError(f'Invalid HDF5 reference: {value}.')


class HDF5Dataset(NonPrimitive):
    """
    A utility class for handling HDF5 dataset operations within a given archive.

    This class provides methods to serialize and normalize HDF5 datasets, ensuring
    that the datasets are correctly referenced and stored within the HDF5 files.

    Methods
    -------
    _serialize_impl(self, value, **kwargs)
        Serializes the given value into a reference string for HDF5 storage.

    _normalize_impl(self, value, **kwargs)
        Normalizes the given value, ensuring it is a valid HDF5 dataset reference
        or a compatible data type (e.g., str, np.ndarray, h5py.Dataset, pint.Quantity).
    """

    def _serialize_impl(self, value, **kwargs):
        if isinstance(value, str):
            return value

        section = kwargs.get('section')

        if not (section_context := section.m_root().m_context):
            raise ValueError('Cannot normalize HDF5 value without context.')

        upload_id, entry_id = section_context._get_ids(section.m_root(), required=True)

        return f'/uploads/{upload_id}/archive/{entry_id}#{section.m_path()}/{self._definition.name}'

    def _normalize_impl(self, value, **kwargs):
        """
        In memory, it is represented by either a reference string or a h5py.Dataset.
        The h5py.Dataset handles file access and data storage under the hood for us.
        There is no need to additionally manage file access here.
        """
        section = kwargs.get('section')

        if not (section_context := section.m_root().m_context):
            raise ValueError('Cannot normalize HDF5 value without context.')

        if not isinstance(value, (str, np.ndarray, h5py.Dataset, pint.Quantity)):
            raise ValueError(f'Invalid HDF5 dataset value: {value}.')

        hdf5_path: str = section_context.hdf5_path(section)

        if isinstance(value, str):
            if not (match := match_hdf5_reference(value)):
                # seems to be an illegal reference, do not try to resolve it
                return value

            file, path = match['file_id'], match['path']

            with File(hdf5_path, 'a') as hdf5_file:
                if file in hdf5_file:
                    segment = f'{file}/{path}'
                else:
                    segment = path
        else:
            unit = self._definition.unit
            if isinstance(value, pint.Quantity):
                if unit is not None:
                    value = value.to(unit).magnitude
                else:
                    unit = value.units
                    value = value.magnitude

            segment = f'{section.m_path()}/{self._definition.name}'
            with File(hdf5_path, 'a') as hdf5_file:
                target_group = hdf5_file.require_group(section.m_path())
                target_dataset = target_group.require_dataset(
                    self._definition.name,
                    shape=getattr(value, 'shape', ()),
                    dtype=getattr(value, 'dtype', None),
                )
                target_dataset[...] = value
                # add attrs
                if unit is not None:
                    unit = format(unit, '~')
                    target_dataset.attrs['units'] = unit

                annotation_key = 'h5web'
                annotation: H5WebAnnotation = section.m_def.m_get_annotation(
                    annotation_key
                )
                if not annotation:
                    annotation = section.m_get_annotation(annotation_key)
                if annotation:
                    target_group.attrs.update(
                        {
                            key: val
                            for key, val in annotation.dict().items()
                            if val is not None
                        }
                    )
                    target_group.attrs['NX_class'] = 'NXdata'

                q_annotation = self._definition.m_get_annotation(annotation_key)
                long_name = q_annotation.long_name if q_annotation else None
                if long_name is None:
                    long_name = self._definition.name
                    long_name = f'{long_name} ({unit})' if unit else long_name
                target_dataset.attrs['long_name'] = long_name

        return HDF5Wrapper(hdf5_path, segment)
