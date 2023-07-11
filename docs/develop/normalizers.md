# How to write a normalizer

## Introduction

A normalizer can be any Python algorithm that takes the archive of an entry as input
and manipulates (usually expands) the given archive. This way, a normalizer can add
additional sections and quantities based on the information already available in the archive.

All normalizer are executed after parsing. Normalizers are run for each entry (i.e. each
set of files that represent a code run). Normalizers are run in a particular order, and
you can make assumptions about the availability of data created by other normalizers.
A normalizer is run in any case, but it might choose not to do anything. A normalizer
can perform any operation on the archive, but in general should not alter existing information,
but only add more information.


## Starting example

This is an example for a very simple normalizer that computes the unit cell volume from
a given lattice and adds it to the archive.

```python
from nomad.normalizing import Normalizer
from nomad.atomutils import get_volume

class UnitCellVolumeNormalizer(Normalizer):
    def normalize(self):
        for system in self.archive.section_run[-1].section_system:
            system.unit_cell_volume = get_volume(lattice_vectors.magnitude)

            self.logger.debug('computed unit cell volume', system_index=system.m_parent_index)
```

You simply inherit from `Normalizer` and implement the `normalize` method. The
`archive` is available as a field. There is also a logger on the object that can be used.
Be aware that the processing will already report the run of the normalizer, log its execution
time and any exceptions that might been thrown.


Of course, if you add new information to the archive, this needs also be defined in the
metainfo. For example you could extend the section system with a special system definition
that extends the existing section system definition:


```python
import numpy as np
from nomad.datamodel.metainfo.public import section_system as System
from nomad.metainfo import Section, Quantity

class UnitCellVolumeSystem(System):
    m_def = Section(extends_base_section=True)
    unit_cell_volume = Quantity(np.dtype(np.float64), unit='m^3')
```

Or you simply alter the `section_system` class (`nomad/datamodel/metainfo/public.py`).


## System normalizer

There is a special base-class for normalizing systems that allows to run the normalization
on all (or only the resulting) `representative` systems:


```python
from nomad.normalizing import SystemBasedNormalizer
from nomad.atomutils import get_volume

class UnitCellVolumeNormalizer(SystemBasedNormalizer):
    def _normalize_system(self, system, is_representative):
        system.unit_cell_volume = get_volume(lattice_vectors.magnitude)
```

The parameter `is_representative` will be true for the `representative` systems, i.e.
the final step in a geometry optimization or other workflow.


## Adding a normalizer to the processing

For any new normalizer class to be recognized by the processing, the normalizer class
needs to be added to the list of normalizers in `nomad/normalizing/__init__.py`.
The order of the normalizers in this list will also determine the execution order of
the normalizers during processing.

```python
normalizers: Iterable[Type[Normalizer]] = [
    SystemNormalizer,
    UnitCellVolumeNormalizer,
    OptimadeNormalizer,
    DosNormalizer,
    BandStructureNormalizer,
    EncyclopediaNormalizer,
    WorkflowNormalizer
]
```


## Testing a normalizer

To simply tryout a normalizer, you could use the CLI and run the parse command:

```sh
nomad --debug parse --show-archive <path-to-example-file>
```


But eventually you need to add a more formal test. Place your `pytest`-tests in
`tests/normalizing/test_unitcellvolume.py` similar to the existing tests. Necessary
test data can be added to `tests/data/normalizers`.
