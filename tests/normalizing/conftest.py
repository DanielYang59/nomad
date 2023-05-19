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
import numpy as np
from typing import List, Union
import pytest
from ase import Atoms
import ase.build
import re
import yaml
from warnings import warn

from nomad.utils import strip
from nomad.units import ureg
from nomad.normalizing import normalizers
from nomad.datamodel import EntryArchive
from nomad.datamodel.results import (
    Relation,
    SymmetryNew as Symmetry,
    Cell,
    WyckoffSet,
    System as ResultSystem
)
from nomad.datamodel.optimade import Species
from nomad.normalizing.common import cell_from_ase_atoms, nomad_atoms_from_ase_atoms
from nomad.datamodel.metainfo.simulation.run import Run, Program
from nomad.datamodel.metainfo.simulation.method import (
    Method, BasisSetContainer, BasisSet, Electronic, DFT, XCFunctional, Functional,
    Electronic, Smearing, Scf, GW, BSE, DMFT, AtomParameters, Projection, Wannier,
    LatticeModelHamiltonian, HubbardKanamoriModel)
from nomad.datamodel.metainfo.simulation.system import (
    AtomsGroup, System, Atoms as NOMADAtoms)
from nomad.datamodel.metainfo.simulation.calculation import (
    Calculation, Energy, EnergyEntry, Dos, DosValues, BandStructure, BandEnergies,
    RadiusOfGyration, RadiusOfGyrationValues)
from nomad.datamodel.metainfo.workflow import (
    DiffusionConstantValues,
    IntegrationParameters,
    MeanSquaredDisplacement,
    MeanSquaredDisplacementValues,
    MolecularDynamicsResults,
    RadialDistributionFunction,
    RadialDistributionFunctionValues,
    Workflow,
    GeometryOptimization,
    Elastic,
    MolecularDynamics,
    EquationOfState,
    EOSFit
)
from nomad.datamodel.metainfo.workflow2 import (
    Link, TaskReference
)
from nomad.datamodel.metainfo.simulation.workflow import (
    GWMethod, GW as GWworkflow
)
from nomad.datamodel.metainfo.measurements import Measurement, Sample

from nomad.datamodel.context import ServerContext
from nomad.datamodel.datamodel import EntryArchive, EntryMetadata
from nomad.parsing.parser import ArchiveParser
from nomad.processing.data import Upload
from tests.parsing.test_parsing import parsed_vasp_example  # pylint: disable=unused-import
from tests.parsing.test_parsing import parsed_template_example  # pylint: disable=unused-import
from tests.parsing.test_parsing import parsed_example  # pylint: disable=unused-import
from tests.parsing.test_parsing import parse_file
from tests.test_files import create_test_upload_files


def run_normalize(entry_archive: EntryArchive) -> EntryArchive:
    for normalizer_class in normalizers:
        normalizer = normalizer_class(entry_archive)
        normalizer.normalize()
    return entry_archive


def run_processing(directory, mainfile):
    # create upload with example files
    upload_files = create_test_upload_files('test_upload_id', published=False, raw_files=directory)
    upload = Upload(upload_id='test_upload_id')

    # parse
    parser = ArchiveParser()
    context = ServerContext(upload=upload)
    test_archive = EntryArchive(m_context=context, metadata=EntryMetadata())
    parser.parse(
        upload_files.raw_file_object(mainfile).os_path,
        test_archive)
    run_normalize(test_archive)
    return test_archive


@pytest.fixture
def normalized_vasp_example(parsed_vasp_example: EntryArchive) -> EntryArchive:
    return run_normalize(parsed_vasp_example)


@pytest.fixture
def normalized_example(parsed_example: EntryArchive) -> EntryArchive:
    return run_normalize(parsed_example)


@pytest.fixture
def normalized_template_example(parsed_template_example) -> EntryArchive:
    return run_normalize(parsed_template_example)


def get_template_dft() -> EntryArchive:
    '''Returns a basic archive template for a DFT calculation.
    '''
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    method = run.m_create(Method)
    method.electrons_representation = [BasisSetContainer(
        type='plane waves',
        scope=['wavefunction'],
        basis_set=[BasisSet(
            type='plane waves',
            scope=['valence'],
        )]
    )]
    method.electronic = Electronic(method='DFT')
    xc_functional = XCFunctional(exchange=[Functional(name='GGA_X_PBE')])
    method.dft = DFT(xc_functional=xc_functional)
    system = run.m_create(System)
    system.atoms = NOMADAtoms(
        lattice_vectors=[
            [5.76372622e-10, 0.0, 0.0],
            [0.0, 5.76372622e-10, 0.0],
            [0.0, 0.0, 4.0755698899999997e-10]
        ],
        positions=[
            [2.88186311e-10, 0.0, 2.0377849449999999e-10],
            [0.0, 2.88186311e-10, 2.0377849449999999e-10],
            [0.0, 0.0, 0.0],
            [2.88186311e-10, 2.88186311e-10, 0.0],
        ],
        labels=['Br', 'K', 'Si', 'Si'],
        periodic=[True, True, True])
    scc = run.m_create(Calculation)
    scc.system_ref = system
    scc.method_ref = method
    scc.energy = Energy(
        free=EnergyEntry(value=-1.5936767191492225e-18),
        total=EnergyEntry(value=-1.5935696296699573e-18),
        total_t0=EnergyEntry(value=-3.2126683561907e-22))
    workflow = template.m_create(Workflow)
    workflow.type = 'geometry_optimization'
    return template


def get_template_excited() -> EntryArchive:
    '''Returns a basic archive template for a ExcitedState calculation.
    '''
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    method = run.m_create(Method)
    system = run.m_create(System)
    system.atoms = NOMADAtoms(
        lattice_vectors=[
            [5.76372622e-10, 0.0, 0.0],
            [0.0, 5.76372622e-10, 0.0],
            [0.0, 0.0, 4.0755698899999997e-10]
        ],
        positions=[
            [2.88186311e-10, 0.0, 2.0377849449999999e-10],
            [0.0, 2.88186311e-10, 2.0377849449999999e-10],
            [0.0, 0.0, 0.0],
            [2.88186311e-10, 2.88186311e-10, 0.0],
        ],
        labels=['Br', 'K', 'Si', 'Si'],
        periodic=[True, True, True])
    scc = run.m_create(Calculation)
    scc.system_ref = system
    scc.method_ref = method
    scc.energy = Energy(
        free=EnergyEntry(value=-1.5936767191492225e-18),
        total=EnergyEntry(value=-1.5935696296699573e-18),
        total_t0=EnergyEntry(value=-3.2126683561907e-22))
    return template


def get_template_eels() -> EntryArchive:
    '''Returns a basic archive template for an EELS experiment.
    '''
    # Ensure that the eels schema is loaded
    from eelsdbparser import eelsdb_parser  # pylint: disable=unused-import,import-error
    dct_data = yaml.safe_load(strip(f'''
        results:
            properties:
                spectroscopy:
                    spectrum: '#/measurement/0/eels/spectrum'
                    eels:
                        detector_type: Quantum GIF
                        min_energy: {(100 * ureg.electron_volt).to(ureg.joule).m}
                        max_energy: {(200 * ureg.electron_volt).to(ureg.joule).m}
                        resolution: {(1 * ureg.electron_volt).to(ureg.joule).m}
        measurement:
            - method_name: electron energy loss spectroscopy
              method_abbreviation: EELS
              sample:
                  - elements:
                        - Si
                        - O
                    chemical_formula: SiO
              eels:
                  spectrum: {{}}
    '''))
    archive = EntryArchive.m_from_dict(dct_data)
    archive.measurement[0].eels.spectrum.count = np.linspace(0, 100, 1)
    archive.measurement[0].eels.spectrum.energy = np.linspace(100, 200, 1)
    return archive


def get_template_for_structure(atoms: Atoms) -> EntryArchive:
    template = get_template_dft()
    template.run[0].calculation[0].system_ref = None
    template.run[0].calculation[0].eigenvalues.append(BandEnergies())
    template.run[0].calculation[0].eigenvalues[0].kpoints = [[0, 0, 0]]
    template.run[0].system = None

    # Fill structural information
    # system = template.run[0].m_create(System)
    # system.atom_positions = atoms.get_positions() * 1E-10
    # system.atom_labels = atoms.get_chemical_symbols()
    # system.simulation_cell = atoms.get_cell() * 1E-10
    # system.configuration_periodic_dimensions = atoms.get_pbc()
    system = get_section_system(atoms)
    template.run[0].m_add_sub_section(Run.system, system)

    return run_normalize(template)


def get_section_system(atoms: Atoms):
    system = System()
    system.atoms = NOMADAtoms(
        positions=atoms.get_positions() * 1E-10,
        labels=atoms.get_chemical_symbols(),
        lattice_vectors=atoms.get_cell() * 1E-10,
        periodic=atoms.get_pbc())
    return system


def add_template_dos(
        template: EntryArchive,
        fill: List = [[[0, 1], [2, 3]]],
        energy_reference_fermi: Union[float, None] = None,
        energy_reference_highest_occupied: Union[float, None] = None,
        energy_reference_lowest_unoccupied: Union[float, None] = None,
        n_values: int = 101,
        type: str = 'electronic') -> EntryArchive:
    '''Used to create a test data for DOS.

    Args:
        fill: List containing the energy ranges (eV) that should be filled with
            non-zero values, e.g. [[[0, 1], [2, 3]]]. Defaults to single channel DOS
            with a gap.
        energy_fermi: Fermi energy (eV)
        energy_reference_highest_occupied: Highest occupied energy (eV) as given by a parser.
        energy_reference_lowest_unoccupied: Lowest unoccupied energy (eV) as given by a parser.
        type: 'electronic' or 'vibrational'
        has_references: Whether the DOS has energy references or not.
    '''
    if len(fill) > 1 and type != 'electronic':
        raise ValueError('Cannot create spin polarized DOS for non-electronic data.')
    scc = template.run[0].calculation[0]
    dos_type = Calculation.dos_electronic if type == 'electronic' else Calculation.dos_phonon
    dos = scc.m_create(Dos, dos_type)
    energies = np.linspace(-5, 5, n_values)
    for i, range_list in enumerate(fill):
        dos_total = dos.m_create(DosValues, Dos.total)
        dos_total.spin = i
        dos_value = np.zeros(n_values)
        for r in range_list:
            idx_bottom = (np.abs(energies - r[0])).argmin()
            idx_top = (np.abs(energies - r[1])).argmin()
            dos_value[idx_bottom:idx_top] = 1
        dos_total.value = dos_value

    dos.energies = energies * ureg.electron_volt
    if energy_reference_fermi is not None:
        energy_reference_fermi *= ureg.electron_volt
    if energy_reference_highest_occupied is not None:
        energy_reference_highest_occupied *= ureg.electron_volt
    if energy_reference_lowest_unoccupied is not None:
        energy_reference_lowest_unoccupied *= ureg.electron_volt
    scc.energy = Energy(
        fermi=energy_reference_fermi,
        highest_occupied=energy_reference_highest_occupied,
        lowest_unoccupied=energy_reference_lowest_unoccupied)
    return template


def get_template_dos(
        fill: List = [[[0, 1], [2, 3]]],
        energy_reference_fermi: Union[float, None] = None,
        energy_reference_highest_occupied: Union[float, None] = None,
        energy_reference_lowest_unoccupied: Union[float, None] = None,
        n_values: int = 101,
        type: str = 'electronic',
        normalize: bool = True) -> EntryArchive:

    archive = get_template_dft()
    archive = add_template_dos(archive, fill, energy_reference_fermi,
                               energy_reference_highest_occupied,
                               energy_reference_lowest_unoccupied,
                               n_values, type)
    if normalize:
        archive = run_normalize(archive)
    return archive


def add_template_band_structure(
        template: EntryArchive,
        band_gaps: List = None,
        type: str = 'electronic',
        has_references: bool = True,
        has_reciprocal_cell: bool = True) -> EntryArchive:
    '''Used to create a test data for band structures.

    Args:
        band_gaps: List containing the band gap value and band gap type as a
            tuple, e.g. [(1, 'direct'), (0.5, 'indirect)]. Band gap values are
            in eV. Use a list of Nones if you don't want a gap for a specific
            channel.
        type: 'electronic' or 'vibrational'
        has_references: Whether the band structure has energy references or not.
        has_reciprocal_cell: Whether the reciprocal cell is available or not.
    '''
    if band_gaps is None:
        band_gaps = [None]
    if not has_reciprocal_cell:
        template.run[0].system[0].atoms = None
    scc = template.run[0].calculation[0]
    if type == 'electronic':
        bs = scc.m_create(BandStructure, Calculation.band_structure_electronic)
        n_spin_channels = len(band_gaps)
        fermi: List[float] = []
        highest: List[float] = []
        lowest: List[float] = []
        for gap in band_gaps:
            if gap is None:
                highest.append(0)
                lowest.append(0)
                fermi.append(0)
            else:
                fermi.append(1 * 1.60218e-19)

        if has_references:
            scc.energy = Energy(fermi=fermi[0])
            if len(highest) > 0:
                scc.energy.highest_occupied = highest[0]
            if len(lowest) > 0:
                scc.energy.lowest_unoccupied = lowest[0]
    else:
        bs = scc.m_create(BandStructure, Calculation.band_structure_phonon)
        n_spin_channels = 1
    n_segments = 2
    full_space = np.linspace(0, 2 * np.pi, 200)
    k, m = divmod(len(full_space), n_segments)
    space = list((full_space[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n_segments)))
    for i_seg in range(n_segments):
        krange = space[i_seg]
        n_points = len(krange)
        seg = bs.m_create(BandEnergies)
        energies = np.zeros((n_spin_channels, n_points, 2))
        k_points = np.zeros((n_points, 3))
        k_points[:, 0] = np.linspace(0, 1, n_points)
        if type == 'electronic':
            for i_spin in range(n_spin_channels):
                if band_gaps[i_spin] is not None:
                    if band_gaps[i_spin][1] == 'direct':
                        energies[i_spin, :, 0] = -np.cos(krange)
                        energies[i_spin, :, 1] = np.cos(krange)
                    elif band_gaps[i_spin][1] == 'indirect':
                        energies[i_spin, :, 0] = -np.cos(krange)
                        energies[i_spin, :, 1] = np.sin(krange)
                    else:
                        raise ValueError('Invalid band gap type')
                    energies[i_spin, :, 1] += 2 + band_gaps[i_spin][0]
                else:
                    energies[i_spin, :, 0] = -np.cos(krange)
                    energies[i_spin, :, 1] = np.cos(krange)
        else:
            energies[0, :, 0] = -np.cos(krange)
            energies[0, :, 1] = np.cos(krange)
        seg.energies = energies * 1.60218e-19
        seg.kpoints = k_points
    return template


def get_template_band_structure(
        band_gaps: List = None,
        type: str = 'electronic',
        has_references: bool = True,
        has_reciprocal_cell: bool = True,
        normalize: bool = True) -> EntryArchive:

    archive = get_template_dft()
    archive = add_template_band_structure(archive, band_gaps, type,
                                          has_references, has_reciprocal_cell)
    if normalize:
        archive = run_normalize(archive)
    return archive


def get_template_gw_workflow() -> EntryArchive:
    # Defining DFT and GW SinglePoint archives and adding band_structure and dos to them.
    archive_dft = get_template_dft()
    archive_gw = get_template_excited()
    band_gaps: List = None
    type: str = 'electronic'
    has_references: bool = True
    has_reciprocal_cell: bool = True
    archive_dft = add_template_band_structure(
        archive_dft, band_gaps, type, has_references, has_reciprocal_cell)
    archive_gw = add_template_band_structure(
        archive_gw, band_gaps, type, has_references, has_reciprocal_cell)
    fill: List = [[[0, 1], [2, 3]]]
    energy_reference_fermi: Union[float, None] = None
    energy_reference_highest_occupied: Union[float, None] = None
    energy_reference_lowest_unoccupied: Union[float, None] = None
    n_values: int = 101
    archive_dft = add_template_dos(
        archive_dft, fill, energy_reference_fermi, energy_reference_highest_occupied,
        energy_reference_lowest_unoccupied, n_values, type)
    archive_gw = add_template_dos(
        archive_gw, fill, energy_reference_fermi, energy_reference_highest_occupied,
        energy_reference_lowest_unoccupied, n_values, type)
    archive_gw.run[0].method = None
    run = archive_gw.run[0]
    method_gw = run.m_create(Method)
    method_gw.gw = GW(type='G0W0')
    # Normalizing SinglePoint archives
    run_normalize(archive_dft)
    run_normalize(archive_gw)
    # Defining DFT and GW tasks for later the GW workflow
    task_dft = TaskReference(task=archive_dft.workflow2)
    task_dft.name = 'DFT'
    task_dft.inputs = [Link(name='Input structure', section=archive_dft.run[-1].system[-1])]
    task_dft.outputs = [Link(name='Output DFT calculation', section=archive_dft.run[-1].calculation[-1])]
    task_gw = TaskReference(task=archive_gw.workflow2)
    task_gw.name = 'GW'
    task_gw.inputs = [Link(name='Output DFT calculation', section=archive_gw.run[-1].calculation[-1])]
    task_gw.outputs = [Link(name='Output GW calculation', section=archive_gw.run[-1].calculation[-1])]
    # GW workflow entry (no need of creating Method nor Calculation)
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = archive_dft.run[-1].program
    run.system = archive_dft.run[-1].system
    workflow = GWworkflow()
    workflow.name = 'GW'
    workflow_method = GWMethod(
        gw_method_ref=archive_gw.run[-1].method[-1].gw,
        starting_point=archive_dft.run[-1].method[-1].dft.xc_functional,
        electrons_representation=archive_dft.run[-1].method[-1].electrons_representation[-1])
    workflow.m_add_sub_section(GWworkflow.method, workflow_method)
    workflow.m_add_sub_section(GWworkflow.inputs, Link(name='Input structure', section=archive_dft.run[-1].system[-1]))
    workflow.m_add_sub_section(GWworkflow.outputs, Link(name='Output GW calculation', section=archive_gw.run[-1].calculation[-1]))
    workflow.m_add_sub_section(GWworkflow.tasks, task_dft)
    workflow.m_add_sub_section(GWworkflow.tasks, task_gw)
    template.workflow2 = workflow
    return template


def set_dft_values(xc_functional_names: list) -> EntryArchive:
    ''''''
    template = get_template_dft()
    template.run[0].method = None
    run = template.run[0]
    method_dft = run.m_create(Method)
    method_dft.electrons_representation = [BasisSetContainer(
        type='plane waves',
        scope=['wavefunction'],
        basis_set=[BasisSet(
            type='plane waves',
            scope=['valence'],
            cutoff=500,
        )]
    )]
    method_dft.dft = DFT()
    method_dft.electronic = Electronic(
        method='DFT',
        smearing=Smearing(kind='gaussian', width=1e-20),
        n_spin_channels=2,
        van_der_waals_method='G06',
        relativity_method='scalar_relativistic')
    method_dft.scf = Scf(threshold_energy_change=1e-24)
    method_dft.dft.xc_functional = XCFunctional()
    xc = method_dft.dft.xc_functional
    for xc_functional_name in xc_functional_names:
        if re.search('^HYB_', xc_functional_name):
            xc.hybrid.append(Functional(name=xc_functional_name, weight=1.0))
            continue
        if re.search('_X?C_', xc_functional_name):
            xc.correlation.append(Functional(name=xc_functional_name, weight=1.0))
        if re.search('_XC?_', xc_functional_name):
            xc.exchange.append(Functional(name=xc_functional_name, weight=1.0))
        xc.correlation.append(Functional(name=xc_functional_name, weight=1.0))
    return template


@pytest.fixture(scope='session')
def dft() -> EntryArchive:
    '''DFT calculation.'''
    template = set_dft_values(['GGA_C_PBE', 'GGA_X_PBE'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_method_referenced() -> EntryArchive:
    '''DFT calculation with two methods: one referencing the other.'''
    template = get_template_dft()
    template.run[0].method = None
    run = template.run[0]
    method_dft = run.m_create(Method)
    method_dft.electrons_representation = [BasisSetContainer(
        type='plane waves',
        scope=['wavefunction'],
        basis_set=[BasisSet(
            type='plane waves',
            scope=['valence'],
        )]
    )]
    method_dft.electronic = Electronic(
        smearing=Smearing(kind='gaussian', width=1e-20),
        n_spin_channels=2, van_der_waals_method='G06',
        relativity_method='scalar_relativistic')
    method_dft.scf = Scf(threshold_energy_change=1e-24)
    method_dft.dft = DFT(xc_functional=XCFunctional())
    method_dft.dft.xc_functional.correlation.append(Functional(name='GGA_C_PBE', weight=1.0))
    method_dft.dft.xc_functional.exchange.append(Functional(name='GGA_X_PBE', weight=1.0))
    method_ref = run.m_create(Method)
    method_ref.electrons_representation = [BasisSetContainer(
        type='plane waves',
        scope=['wavefunction'],
        basis_set=[BasisSet(
            type='plane waves',
            scope=['valence'],
        )]
    )]
    method_ref.electronic = Electronic(method='DFT')
    method_ref.core_method_ref = method_dft
    run.calculation[0].method_ref = method_ref
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_exact_exchange() -> EntryArchive:
    '''Add exact exchange explicitely to a PBE calculation.'''
    template = set_dft_values(['GGA_C_PBE', 'GGA_X_PBE'])
    template.run[0].method[0].dft.xc_functional.hybrid.append(Functional())
    template.run[0].method[0].dft.xc_functional.hybrid[0].parameters = {'exact_exchange_mixing_factor': .25}
    template.run[0].method[0].dft.xc_functional.hybrid[0].name = '+alpha'
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_empty() -> EntryArchive:
    template = set_dft_values([])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_wrong() -> EntryArchive:
    template = set_dft_values(['FOO_X_FIGHTERS', 'BAR_C_EXAM'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_pw() -> EntryArchive:
    template = set_dft_values(['LDA_X', 'LDA_C_PW'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_m06() -> EntryArchive:
    template = set_dft_values(['MGGA_X_M06', 'MGGA_C_M06'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_b3lyp() -> EntryArchive:
    template = set_dft_values(['HYB_GGA_XC_B3LYP'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_pbeh() -> EntryArchive:
    template = set_dft_values(['HYB_GGA_XC_PBEH'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_m05() -> EntryArchive:
    template = set_dft_values(['MGGA_C_M05', 'HYB_MGGA_X_M05'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_pbe0_13() -> EntryArchive:
    template = set_dft_values(['HYB_GGA_XC_PBE0_13'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_pbe38() -> EntryArchive:
    template = set_dft_values(['HYB_GGA_XC_PBE38'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_pbe50() -> EntryArchive:
    template = set_dft_values(['HYB_GGA_XC_PBE50'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_m06_2x() -> EntryArchive:
    template = set_dft_values(['HYB_MGGA_X_M06_2X'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_m05_2x() -> EntryArchive:
    template = set_dft_values(['MGGA_C_M05_2X', 'HYB_MGGA_X_M05_2X'])
    return run_normalize(template)


@pytest.fixture(scope='session')
def dft_plus_u() -> EntryArchive:
    '''DFT+U calculation with a Hubbard model.'''
    template = get_template_dft()
    template.run[0].method = None
    run = template.run[0]
    method_dft = run.m_create(Method)
    method_dft.electrons_representation = [BasisSetContainer(
        type='plane waves',
        scope=['wavefunction'],
        basis_set=[BasisSet(
            type='plane waves',
            scope=['valence'],
        )]
    )]
    method_dft.electronic = Electronic(
        method='DFT+U',
        smearing=Smearing(kind='gaussian', width=1e-20),
        n_spin_channels=2, van_der_waals_method='G06',
        relativity_method='scalar_relativistic')
    method_dft.scf = Scf(threshold_energy_change=1e-24)
    method_dft.dft = DFT(xc_functional=XCFunctional())
    method_dft.dft.xc_functional.correlation.append(Functional(name='GGA_C_PBE', weight=1.0))
    method_dft.dft.xc_functional.exchange.append(Functional(name='GGA_X_PBE', weight=1.0))
    method_dft.atom_parameters.append(AtomParameters(label='Ti'))
    method_dft.atom_parameters[0].hubbard_kanamori_model = HubbardKanamoriModel(
        orbital='3d', u=4.5e-19, j=1.0e-19, double_counting_correction='Dudarev')
    return run_normalize(template)


@pytest.fixture(scope='session')
def projection() -> EntryArchive:
    '''Wannier Projection calculation.'''
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='Wannier90', version='3.1.0')
    method = run.m_create(Method)
    method_proj = method.m_create(Projection)
    method_proj.wannier = Wannier(is_maximally_localized=False)
    system = run.m_create(System)
    system.atoms = NOMADAtoms(
        lattice_vectors=[
            [5.76372622e-10, 0.0, 0.0],
            [0.0, 5.76372622e-10, 0.0],
            [0.0, 0.0, 4.0755698899999997e-10]
        ],
        positions=[
            [2.88186311e-10, 0.0, 2.0377849449999999e-10],
            [0.0, 2.88186311e-10, 2.0377849449999999e-10],
            [0.0, 0.0, 0.0],
            [2.88186311e-10, 2.88186311e-10, 0.0],
        ],
        labels=['Br', 'K', 'Si', 'Si'],
        periodic=[True, True, True])
    system.m_add_sub_section(System.atoms_group, AtomsGroup(
        label='Br',
        type='projection',
        index=0,
        is_molecule=False,
        n_atoms=1,
        atom_indices=np.array([0])
    ))
    scc = run.m_create(Calculation)
    scc.system_ref = system
    scc.method_ref = method
    return run_normalize(template)


@pytest.fixture(scope='session')
def gw() -> EntryArchive:
    '''GW calculation.'''
    template = get_template_excited()
    template.run[0].method = None
    run = template.run[0]
    method_gw = run.m_create(Method)
    method_gw.gw = GW(type='G0W0')
    return run_normalize(template)


@pytest.fixture(scope='session')
def bse() -> EntryArchive:
    '''BSE calculation.'''
    template = get_template_excited()
    template.run[0].method = None
    run = template.run[0]
    method_bse = run.m_create(Method)
    method_bse.bse = BSE(type='Singlet', solver='Lanczos-Haydock')
    return run_normalize(template)


@pytest.fixture(scope='session')
def dmft() -> EntryArchive:
    '''DMFT calculation.'''
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='w2dynamics')
    input_method = run.m_create(Method)
    input_model = input_method.m_create(LatticeModelHamiltonian)
    input_model.hubbard_kanamori_model.append(HubbardKanamoriModel(orbital='d', u=4.0e-19, jh=0.6e-19))
    method_dmft = run.m_create(Method)
    method_dmft.dmft = DMFT(
        impurity_solver='CT-HYB', n_atoms_per_unit_cell=1, n_correlated_electrons=1.0, n_correlated_orbitals=[3.0],
        inverse_temperature=60.0, magnetic_state='paramagnetic')
    method_dmft.starting_method_ref = input_method
    system = run.m_create(System)
    system.atoms = NOMADAtoms(
        lattice_vectors=[
            [5.76372622e-10, 0.0, 0.0],
            [0.0, 5.76372622e-10, 0.0],
            [0.0, 0.0, 4.0755698899999997e-10]
        ],
        positions=[
            [2.88186311e-10, 0.0, 2.0377849449999999e-10],
            [0.0, 2.88186311e-10, 2.0377849449999999e-10],
            [0.0, 0.0, 0.0],
            [2.88186311e-10, 2.88186311e-10, 0.0],
        ],
        labels=['Br', 'K', 'Si', 'Si'],
        periodic=[True, True, True])
    scc = run.m_create(Calculation)
    scc.system_ref = system
    scc.method_ref = method_dmft
    workflow = template.m_create(Workflow)
    workflow.type = 'single_point'
    return run_normalize(template)


@pytest.fixture(scope='session')
def eels() -> EntryArchive:
    '''EELS experiment.'''
    template = get_template_eels()
    return run_normalize(template)


@pytest.fixture(scope='session')
def mechanical() -> EntryArchive:
    '''Entry with mechanical properties.'''
    template = get_template_dft()

    # Elastic workflow
    workflow = template.m_create(Workflow)
    workflow.type = 'elastic'
    workflow.elastic = Elastic(
        shear_modulus_hill=10000,
        shear_modulus_reuss=10000,
        shear_modulus_voigt=10000,
    )

    # EOS workflow
    workflow = template.m_create(Workflow)
    workflow.type = 'equation_of_state'
    equation_of_state = EquationOfState(
        volumes=np.linspace(0, 10, 10) * ureg.angstrom ** 3,
        energies=np.linspace(0, 10, 10) * ureg.electron_volt,
    )
    eos_fit = equation_of_state.m_create(EOSFit)
    eos_fit.function_name = 'murnaghan'
    eos_fit.fitted_energies = np.linspace(0, 10, 10) * ureg.electron_volt
    eos_fit.bulk_modulus = 10000
    workflow.equation_of_state = equation_of_state

    return run_normalize(template)


@pytest.fixture(scope='session')
def bulk() -> EntryArchive:
    atoms = ase.build.bulk('Si', 'diamond', cubic=True, a=5.431)
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def two_d() -> EntryArchive:
    atoms = Atoms(
        symbols=['C', 'C'],
        scaled_positions=[
            [0, 0, 0.5],
            [1 / 3, 1 / 3, 0.5],
        ],
        cell=[
            [2.461, 0, 0],
            [np.cos(np.pi / 3) * 2.461, np.sin(np.pi / 3) * 2.461, 0],
            [0, 0, 20]
        ],
        pbc=True
    )
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def surface() -> EntryArchive:
    atoms = ase.build.fcc111('Al', size=(2, 2, 3), vacuum=10.0)
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def molecule() -> EntryArchive:
    atoms = ase.build.molecule('CO2')
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def atom() -> EntryArchive:
    atoms = Atoms(
        symbols=['H'],
        scaled_positions=[[0.5, 0.5, 0.5]],
        cell=[10, 10, 10],
        pbc=True,
    )
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def one_d() -> EntryArchive:
    atoms = ase.build.graphene_nanoribbon(1, 1, type='zigzag', vacuum=10, saturated=True)
    return get_template_for_structure(atoms)


@pytest.fixture(scope='session')
def organic_formula() -> EntryArchive:
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    system = run.m_create(System)
    system.atoms = NOMADAtoms(labels=['C', 'H', 'Cl', 'Cl', 'Cl'])
    run.calculation.extend([Calculation(), Calculation()])
    return run_normalize(template)


@pytest.fixture(scope='session')
def organic_carbonyl_formula() -> EntryArchive:
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    system = run.m_create(System)
    system.atoms = NOMADAtoms(labels=['C', 'Ag', 'O'])
    run.calculation.extend([Calculation(), Calculation()])
    return run_normalize(template)


@pytest.fixture(scope='session')
def inorganic_carbonyl_formula() -> EntryArchive:
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    system = run.m_create(System)
    system.atoms = NOMADAtoms(labels=['Fe', 'C', 'C', 'C', 'C', 'C', 'O', 'O', 'O', 'O', 'O'])
    run.calculation.extend([Calculation(), Calculation()])
    return run_normalize(template)


@pytest.fixture(scope='session')
def inorganic_special_formula() -> EntryArchive:
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(name='VASP', version='4.6.35')
    system = run.m_create(System)
    system.atoms = NOMADAtoms(labels=['C', 'H', 'K', 'O', 'O', 'O'])
    calculation = run.m_create(Calculation)
    calculation.system_ref = system
    return run_normalize(template)


@pytest.fixture(scope='session')
def predefined_formula_descriptive() -> EntryArchive:
    template = EntryArchive()
    sample = Sample(chemical_formula='BaFe2As2')
    measurement = Measurement(sample=[sample])
    template.m_add_sub_section(EntryArchive.measurement, measurement)
    return run_normalize(template)


@pytest.fixture(scope='session')
def unknown_program() -> EntryArchive:
    template = EntryArchive()
    run = template.m_create(Run)
    run.program = Program(version='4.6.35')
    system = run.m_create(System)
    system.atoms = NOMADAtoms(labels=['Si'])
    calculation = run.m_create(Calculation)
    calculation.system_ref = system
    return run_normalize(template)


@pytest.fixture(scope='session')
def single_point() -> EntryArchive:
    '''Single point calculation.'''
    template = get_template_dft()

    return run_normalize(template)


@pytest.fixture(scope='session')
def gw_workflow() -> EntryArchive:
    '''GW workflow EntryArchive.'''
    template = get_template_gw_workflow()
    return run_normalize(template)


@pytest.fixture(scope='session')
def geometry_optimization() -> EntryArchive:
    template = get_template_dft()
    template.run[0].system = None
    template.run[0].calculation = None
    run = template.run[0]
    atoms1 = ase.build.bulk('Si', 'diamond', cubic=True, a=5.431)
    atoms2 = ase.build.bulk('Si', 'diamond', cubic=True, a=5.431)
    atoms2.translate([0.01, 0, 0])
    sys1 = get_section_system(atoms1)
    sys2 = get_section_system(atoms2)
    scc1 = run.m_create(Calculation)
    scc2 = run.m_create(Calculation)
    scc1.energy = Energy(total=EnergyEntry(value=1e-19), total_t0=EnergyEntry(value=1e-19))
    scc2.energy = Energy(total=EnergyEntry(value=0.5e-19), total_t0=EnergyEntry(value=0.5e-19))
    scc1.system_ref = sys1
    scc2.system_ref = sys2
    scc1.method_ref = run.method[0]
    scc2.method_ref = run.method[0]
    run.m_add_sub_section(Run.system, sys1)
    run.m_add_sub_section(Run.system, sys2)
    workflow = template.m_create(Workflow)
    workflow.type = 'geometry_optimization'
    workflow.geometry_optimization = GeometryOptimization(
        convergence_tolerance_energy_difference=1e-3 * ureg.electron_volt,
        convergence_tolerance_force_maximum=1e-11 * ureg.newton,
        convergence_tolerance_displacement_maximum=1e-3 * ureg.angstrom,
        method='bfgs')
    return run_normalize(template)


@pytest.fixture(scope='session')
def molecular_dynamics() -> EntryArchive:
    '''Molecular dynamics calculation.'''
    template = get_template_dft()
    run = template.run[0]

    # Create calculations
    n_steps = 10
    calcs = []
    for step in range(n_steps):
        system = System()
        run.m_add_sub_section(Run.system, system)
        calc = Calculation()
        calc.system_ref = system
        calc.time = step
        calc.step = step
        calc.volume = step
        calc.pressure = step
        calc.temperature = step
        calc.energy = Energy(
            potential=EnergyEntry(value=step),
        )
        rg_values = RadiusOfGyrationValues(
            value=step,
            label='MOL',
            atomsgroup_ref=system
        )
        calc.radius_of_gyration = [RadiusOfGyration(
            kind='molecular',
            radius_of_gyration_values=[rg_values],
        )]
        calcs.append(calc)
        run.m_add_sub_section(Run.calculation, calc)

    # Create workflow
    workflow = template.m_create(Workflow)
    workflow.type = 'molecular_dynamics'
    workflow.calculation_result_ref = calcs[-1]
    workflow.calculations_ref = calcs
    diff_values = DiffusionConstantValues(
        value=2.1,
        error_type='Pearson correlation coefficient',
        errors=0.98,
    )
    msd_values = MeanSquaredDisplacementValues(
        times=[0, 1, 2],
        n_times=3,
        value=[0, 1, 2],
        label='MOL',
        errors=[0, 1, 2],
        diffusion_constant=diff_values,
    )
    msd = MeanSquaredDisplacement(
        type='molecular',
        direction='xyz',
        error_type='bootstrapping',
        mean_squared_displacement_values=[msd_values],
    )
    rdf_values = RadialDistributionFunctionValues(
        bins=[0, 1, 2],
        n_bins=3,
        value=[0, 1, 2],
        frame_start=0,
        frame_end=100,
        label='MOL-MOL',
    )
    rdf = RadialDistributionFunction(
        type='molecular',
        radial_distribution_function_values=[rdf_values],
    )
    results = MolecularDynamicsResults(
        radial_distribution_functions=[rdf],
        mean_squared_displacements=[msd],
    )
    md = MolecularDynamics(
        thermodynamic_ensemble='NVT',
        integration_parameters=IntegrationParameters(
            integration_timestep=0.5 * ureg('fs'),
        ),
        results=results
    )
    workflow.molecular_dynamics = md

    return run_normalize(template)


def get_template_topology(pbc=False) -> EntryArchive:
    template = get_template_dft()
    run = template.run[0]
    del run.system[0]

    # System
    water1 = ase.build.molecule('H2O')
    water2 = ase.build.molecule('H2O')
    water2.translate([5, 0, 0])
    sys = water1 + water2
    sys.set_cell([10, 10, 10])
    sys.set_pbc(pbc)
    system = get_section_system(sys)
    run.m_add_sub_section(Run.system, system)

    # Topology
    molecule_group = AtomsGroup(
        label='MOL_GROUP',
        type='molecule_group',
        index=0,
        composition_formula='H(4)O(2)',
        n_atoms=6,
        atom_indices=[0, 1, 2, 3, 4, 5]
    )
    system.m_add_sub_section(System.atoms_group, molecule_group)
    molecule1 = AtomsGroup(
        label='MOL',
        type='molecule',
        index=0,
        composition_formula='H(2)O(1)',
        n_atoms=3,
        atom_indices=[0, 1, 2]
    )
    molecule_group.m_add_sub_section(AtomsGroup.atoms_group, molecule1)
    molecule2 = AtomsGroup(
        label='MOL',
        type='molecule',
        index=0,
        composition_formula='H(2)O(1)',
        n_atoms=3,
        atom_indices=[3, 4, 5]
    )
    molecule_group.m_add_sub_section(AtomsGroup.atoms_group, molecule2)
    monomer_group = AtomsGroup(
        label='MON_GROUP',
        type='monomer_group',
        index=0,
        composition_formula='H(2)',
        n_atoms=2,
        atom_indices=[1, 2]
    )
    molecule1.m_add_sub_section(AtomsGroup.atoms_group, monomer_group)
    monomer = AtomsGroup(
        label='MON',
        type='monomer',
        index=0,
        composition_formula='H(2)',
        n_atoms=2,
        atom_indices=[1, 2]
    )
    monomer_group.m_add_sub_section(AtomsGroup.atoms_group, monomer)

    # Calculation
    calc = Calculation()
    calc.system_ref = system
    run.m_add_sub_section(Run.calculation, calc)

    return run_normalize(template)


@pytest.fixture(scope='session')
def phonon() -> EntryArchive:
    parser_name = 'parsers/phonopy'
    filepath = 'tests/data/parsers/phonopy/phonopy-FHI-aims-displacement-01/control.in'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def elastic() -> EntryArchive:
    parser_name = 'parsers/elastic'
    filepath = 'tests/data/parsers/elastic/diamond/INFO_ElaStic'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def dos_electronic() -> EntryArchive:
    template = get_template_dos()
    return run_normalize(template)


@pytest.fixture(scope='session')
def dos_si_vasp() -> EntryArchive:
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/dos/dos_si_vasp/vasprun.xml.relax2.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def dos_si_exciting() -> EntryArchive:
    parser_name = 'parsers/exciting'
    filepath = 'tests/data/normalizers/dos/dos_si_exciting/INFO.OUT'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def dos_si_fhiaims() -> EntryArchive:
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/dos/dos_si_fhiaims/aims.log'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def dos_polarized_vasp() -> EntryArchive:
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/dos/polarized_vasp/vasprun.xml.relax2.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def dos_unpolarized_vasp() -> EntryArchive:
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/dos/unpolarized_vasp/vasprun.xml.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def hash_exciting() -> EntryArchive:
    parser_name = 'parsers/exciting'
    filepath = 'tests/data/normalizers/hashes/exciting/INFO.OUT'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def hash_vasp() -> EntryArchive:
    return get_template_band_structure([(1, 'indirect')])


@pytest.fixture(scope='session')
def band_path_cP() -> EntryArchive:
    '''Band structure calculation for a cP Bravais lattice.
    '''
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/band_structure/cP/aims.out'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_cF() -> EntryArchive:
    '''Band structure calculation for a cF Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/cF/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_tP() -> EntryArchive:
    '''Band structure calculation for a tP Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/tP/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_oP() -> EntryArchive:
    '''Band structure calculation for a oP Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/oP/vasprun.xml'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_oF() -> EntryArchive:
    '''Band structure calculation for a oF Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/oF/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_oI() -> EntryArchive:
    '''Band structure calculation for a oI Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/oI/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_hP() -> EntryArchive:
    '''Band structure calculation for a hP Bravais lattice.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/hP/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_mP() -> EntryArchive:
    '''Band structure calculation for a mP Bravais lattice.
    '''
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/band_structure/mP/aims.out'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_aP() -> EntryArchive:
    '''Band structure calculation for a aP Bravais lattice.
    '''
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/band_structure/aP/aims.out'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_cF_nonstandard() -> EntryArchive:
    '''Band structure calculation for a cF Bravais lattice with non-standard k points.
    '''
    parser_name = 'parsers/exciting'
    filepath = 'tests/data/normalizers/band_structure/cF_nonstandard/INFO.OUT'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_cI_nonstandard() -> EntryArchive:
    '''Band structure calculation for a cI Bravais lattice with non-standard k points.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/cI_nonstandard/vasprun.xml'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_tI_nonstandard() -> EntryArchive:
    '''Band structure calculation for a tI Bravais lattice with non-standard k points.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/tI_nonstandard/vasprun.xml'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_oS_nonstandard() -> EntryArchive:
    '''Band structure calculation for a oS Bravais lattice with non-standard k points.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/oS_nonstandard/vasprun.xml'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_hR_nonstandard() -> EntryArchive:
    '''Band structure calculation for a hR Bravais lattice with non-standard k points.
    '''
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/band_structure/hR_nonstandard/aims.out'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_mP_nonstandard() -> EntryArchive:
    '''Band structure calculation for a mP Bravais lattice with a non-standard
    lattice ordering.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/mP_nonstandard/vasprun.xml.bands.xz'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def band_path_mS_nonstandard() -> EntryArchive:
    '''Band structure calculation for a mS Bravais lattice with non-standard k points.
    lattice ordering.
    '''
    parser_name = 'parsers/vasp'
    filepath = 'tests/data/normalizers/band_structure/mS_nonstandard/vasprun.xml'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


@pytest.fixture(scope='session')
def fhiaims_surface_singlepoint() -> EntryArchive:
    parser_name = 'parsers/fhi-aims'
    filepath = 'tests/data/normalizers/fhiaims_surface_singlepoint/PBE-light+tight-rho2.out'
    archive = parse_file((parser_name, filepath))
    return run_normalize(archive)


def create_system(label: str,
                  structural_type: str,
                  dimensionality: str,
                  building_block: str,
                  elements: List[str],
                  formula_hill: str,
                  formula_reduced: str,
                  formula_anonymous: str,
                  system_relation: Relation,
                  indices: List[int] = None,
                  material_id: str = None,
                  atoms: NOMADAtoms = None,
                  cell: Cell = None,
                  symmetry: Symmetry = None
                  ) -> ResultSystem:
    system = ResultSystem()
    system.label = label
    system.structural_type = structural_type
    system.dimensionality = dimensionality
    system.building_block = building_block
    system.elements = elements
    system.chemical_formula_hill = formula_hill
    system.chemical_formula_reduced = formula_reduced
    system.chemical_formula_anonymous = formula_anonymous
    system.system_relation = system_relation
    if label == 'subsystem':
        system.indices = indices
    elif label == 'conventional cell':
        system.material_id = material_id
        system.atoms = atoms
        system.cell = cell
        system.symmetry = symmetry
    else:
        warn('Warning: subsystem label is missing')
    return system


def create_symmetry(prototype):
    if prototype == 'fcc':
        symmetry = Symmetry(
            bravais_lattice="cF",
            crystal_system="cubic",
            hall_number=523,
            hall_symbol="-F 4 2 3",
            point_group="m-3m",
            space_group_number=225,
            space_group_symbol="Fm-3m",
            prototype_label_aflow="A_cF4_225_a",
            prototype_name="fcc",
        )
    elif prototype == 'bcc':
        symmetry = Symmetry(
            bravais_lattice="cI",
            crystal_system="cubic",
            hall_number=529,
            hall_symbol="-I 4 2 3",
            point_group="m-3m",
            space_group_number=229,
            space_group_symbol="Im-3m",
            prototype_label_aflow="A_cI2_229_a",
            prototype_name="bcc",
        )
    else:
        raise ValueError(f'No symmetry information for {prototype}')
    return symmetry


def conv_fcc(symbols):
    return ase.build.bulk(symbols, crystalstructure='fcc', a=3.61, cubic=True)


def conv_bcc(symbols):
    return ase.build.bulk(symbols, crystalstructure='bcc', cubic=True)


def surf(conv_cell, indices, layers=[3, 3, 2], vacuum=10):
    surface = ase.build.surface(conv_cell, indices, layers[2], vacuum=vacuum, periodic=True)
    surface *= [layers[0], layers[1], 1]
    return surface


def stack(a, b):
    stacked = ase.build.stack(a, b, axis=2, distance=3, maxstrain=6.7)
    stacked.set_pbc([True, True, False])
    ase.build.add_vacuum(stacked, 10)
    return stacked


def rattle(atoms):
    atoms.rattle(stdev=0.001, seed=7, rng=None)
    return atoms


def single_cu_surface_topology() -> List[ResultSystem]:
    '''Copper surface topology'''
    conv_cell = conv_fcc('Cu')
    surface = surf(conv_cell, (1, 0, 0))

    n_atoms = len(surface)
    subsystem = create_system(
        label='subsystem',
        structural_type='surface',
        dimensionality='2D',
        building_block='surface',
        elements=['Cu'],
        formula_hill=f'Cu{n_atoms}',
        formula_reduced=f'Cu{n_atoms}',
        formula_anonymous=f'A{n_atoms}',
        system_relation=Relation(type='subsystem'),
        indices=list(range(n_atoms))
    )

    species = Species()
    species.name = "Cu"
    species.chemical_symbols = ["Cu"]
    species.concentration = [1.0]
    wyckoff_sets = WyckoffSet()
    wyckoff_sets.wyckoff_letter = "a"
    wyckoff_sets.indices = [0, 1, 2, 3]
    wyckoff_sets.element = "Cu"

    cell = cell_from_ase_atoms(conv_cell)
    atoms = nomad_atoms_from_ase_atoms(conv_cell)
    symmetry_fcc = create_symmetry('fcc')
    convsystem = create_system(
        label='conventional cell',
        structural_type='bulk',
        dimensionality='3D',
        building_block=None,
        elements=['Cu'],
        formula_hill='Cu4',
        formula_reduced='Cu4',
        formula_anonymous='A4',
        system_relation=Relation(type='conventional_cell'),
        material_id="3M6onRRrQbutydx916-Y15I79Z_X",
        atoms=atoms,
        cell=cell,
        symmetry=symmetry_fcc,
    )
    return [subsystem, convsystem]


def single_cr_surface_topology() -> List[ResultSystem]:
    '''Cr surface topology'''
    conv_cell = conv_bcc('Cr')
    surface = surf(conv_cell, (1, 0, 0))
    n_atoms = len(surface)
    subsystem = create_system(
        label='subsystem',
        structural_type='surface',
        dimensionality='2D',
        building_block='surface',
        elements=['Cr'],
        formula_hill=f'Cr{n_atoms}',
        formula_reduced=f'Cr{n_atoms}',
        formula_anonymous=f'A{n_atoms}',
        system_relation=Relation(type='subsystem'),
        indices=list(range(n_atoms))
    )

    species = Species()
    species.name = "Cr"
    species.chemical_symbols = ["Cr"]
    species.concentration = [1.0]
    wyckoff_sets = WyckoffSet()
    wyckoff_sets.wyckoff_letter = "a"
    wyckoff_sets.indices = [0, 1]
    wyckoff_sets.element = "Cr"

    atoms = nomad_atoms_from_ase_atoms(conv_cell)
    cell = cell_from_ase_atoms(conv_cell)
    symmetry_bcc = create_symmetry('bcc')
    convsystem = create_system(
        label='conventional cell',
        structural_type='bulk',
        dimensionality='3D',
        building_block=None,
        elements=['Cr'],
        formula_hill='Cr2',
        formula_reduced='Cr2',
        formula_anonymous='A2',
        system_relation=Relation(type='conventional_cell'),
        material_id='MDlo8h4C2Ppy-kLY9fHRovgnTN9T',
        atoms=atoms,
        cell=cell,
        symmetry=symmetry_bcc,
    )
    return [subsystem, convsystem]


def single_ni_surface_topology() -> List[ResultSystem]:
    '''Ni surface topology'''
    conv_cell = conv_fcc('Ni')
    surface = surf(conv_cell, (1, 0, 0))
    n_atoms = len(surface)

    subsystem = create_system(
        label='subsystem',
        structural_type='surface',
        dimensionality='2D',
        building_block='surface',
        elements=['Ni'],
        formula_hill=f'Ni{n_atoms}',
        formula_reduced=f'Ni{n_atoms}',
        formula_anonymous=f'A{n_atoms}',
        system_relation=Relation(type='subsystem'),
        indices=list(range(n_atoms))
    )

    species = Species()
    species.name = "Ni"
    species.chemical_symbols = ["Ni"]
    species.concentration = [1.0]
    wyckoff_sets = WyckoffSet()
    wyckoff_sets.wyckoff_letter = "a"
    wyckoff_sets.indices = [0, 1, 2, 3]
    wyckoff_sets.element = "Ni"
    cell = cell_from_ase_atoms(conv_cell)
    atoms = nomad_atoms_from_ase_atoms(conv_cell)
    symmetry_fcc = create_symmetry('fcc')
    convsystem = create_system(
        label='conventional cell',
        structural_type='bulk',
        dimensionality='3D',
        building_block=None,
        elements=['Ni'],
        formula_hill='Ni4',
        formula_reduced='Ni4',
        formula_anonymous='A4',
        system_relation=Relation(type='conventional_cell'),
        material_id='NdIWxnQzlp-aeP1IM2d8YJ04h6T0"',
        atoms=atoms,
        cell=cell,
        symmetry=symmetry_fcc,
    )
    return [subsystem, convsystem]


def stacked_cu_ni_surface_topology() -> List[ResultSystem]:
    topologies_cu = single_cu_surface_topology()
    topologies_ni = single_ni_surface_topology()

    # Indices are modified
    n_atoms_cu = len(topologies_cu[0].indices)
    n_atoms_ni = len(topologies_ni[0].indices)
    topologies_cu[0].indices = list(range(0, n_atoms_cu))
    topologies_ni[0].indices = list(range(n_atoms_cu, n_atoms_cu + n_atoms_ni))

    return topologies_cu + topologies_ni


def graphene() -> Atoms:
    '''Graphene system'''
    symbols_c = ['C', 'C']
    positions_c = [
        [0.0, 0.0, 2.1712595],
        [1.2338620706831436, -0.712370598651782, 2.1712595]
    ] * ureg.angstrom
    cell_c = [
        [1.2338620706831436, -2.137111795955346, 0.0],
        [1.2338620706831436, 2.137111795955346, 0.0],
        [0.0, 0.0, 8.685038]
    ] * ureg.angstrom
    system_c = Atoms(
        symbols=symbols_c,
        positions=positions_c,
        cell=cell_c,
        pbc=True
    ) * [4, 4, 1]
    return system_c


def graphene_topology() -> List[ResultSystem]:
    '''Graphene topology'''
    subsystem = create_system(
        label='subsystem',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['C'],
        formula_hill='C32',
        formula_reduced='C32',
        formula_anonymous='A32',
        system_relation=Relation(type='subsystem'),
        indices=[i for i in range(32)]
    )

    atoms_c_conv = NOMADAtoms()
    atoms_c_conv.periodic = [True, True, False]
    atoms_c_conv.lattice_vectors = [
        [2.4677241413662866, 0.0, 0.0],
        [-1.2338620706831433, 2.1371117959553457, 0.0],
        [0.0, 0.0, 1]
    ] * ureg.angstrom
    atoms_c_conv.positions = [
        [1.2338620706831433, 0.712370598651782, 0.5],
        [-2.7636130944313266e-16, 1.4247411973035641, 0.5]
    ] * ureg.angstrom
    atoms_c_conv.labels = ["C", "C"]
    species = Species()
    species.name = "C"
    species.chemical_symbols = ["C"]
    species.concentration = [1.0]
    cell = Cell(
        a=2.470 * ureg.angstrom,
        b=2.470 * ureg.angstrom,
        gamma=2.0943951023931957 * ureg.rad,
    )
    convsystem = create_system(
        label='conventional cell',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['C'],
        formula_hill='C2',
        formula_reduced='C2',
        formula_anonymous='A2',
        system_relation=Relation(type='conventional_cell'),
        material_id='jdP9AhZIFuYhubLWkm2FPtEV5IZA',
        atoms=atoms_c_conv,
        cell=cell,
        symmetry=None,
    )
    return [subsystem, convsystem]


def boron_nitride() -> Atoms:
    '''Boron nitride system'''
    symbols_bn = ['B', 'N']
    positions_bn = [
        [1.2557999125000436, -0.7250364175302085, 6.200847],
        [0.0, 0.0, 6.200847]
    ] * ureg.angstrom
    cell_bn = [
        [1.2557999125000436, -2.1751092525906257, 0.0],
        [1.2557999125000436, 2.1751092525906257, 0.0],
        [0.0, 0.0, 8.267796]
    ] * ureg.angstrom
    system_bn = Atoms(
        symbols=symbols_bn,
        positions=positions_bn,
        cell=cell_bn,
        pbc=True
    )
    bn_2d = ase.build.surface(system_bn, (0, 0, 1), layers=1, periodic=True)
    bn_2 = ase.build.stack(bn_2d, bn_2d, axis=0)
    bn_4 = ase.build.stack(bn_2, bn_2, axis=1)
    bn_8 = ase.build.stack(bn_4, bn_4, axis=0)
    bn_16 = ase.build.stack(bn_8, bn_8, axis=1)
    return bn_16


def boron_nitride_topology() -> List[ResultSystem]:
    '''Boron nitride topology'''
    subsystem = create_system(
        label='subsystem',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['B', 'N'],
        formula_hill='B16N16',
        formula_reduced='B16N16',
        formula_anonymous='A16B16',
        system_relation=Relation(type="subsystem"),
        indices=[i for i in range(32)]
    )

    atoms = NOMADAtoms()
    atoms.periodic = [True, True, False]
    atoms.lattice_vectors = [
        [2.510266994011973, 0.0, 0.0],
        [-1.2551334970059864, 2.1739549870959678, 0.0],
        [0.0, 0.0, 1]
    ] * ureg.angstrom
    atoms.labels = ["B", "N"]
    atoms.species = [5, 7]
    species_B = Species()
    species_B.name = "B"
    species_B.chemical_symbols = ["B"]
    species_B.concentration = [1.0]
    species_N = Species()
    species_N.name = "N"
    species_N.chemical_symbols = ["N"]
    species_N.concentration = [1.0]
    cell = Cell(
        a=2.513 * ureg.angstrom,
        b=2.513 * ureg.angstrom,
        gamma=2.0943951023931957 * ureg.rad,
    )
    convsystem = create_system(
        label='conventional cell',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['B', 'N'],
        formula_hill='BN',
        formula_reduced='BN',
        formula_anonymous='AB',
        system_relation=Relation(type="conventional_cell"),
        material_id="RxRsol0dp1vDkU7-pE3v2exglkpM",
        atoms=atoms,
        cell=cell,
        symmetry=None,
    )
    return [subsystem, convsystem]


def mos2() -> Atoms:
    symbols_mos2 = ['Mo', 'S', 'S']
    positions_mos2 = [
        [0.0, 0.0, 9.063556323175761],
        [1.5920332323422965, 0.9191608152516547, 10.62711264635152],
        [1.5920332323422965, 0.9191608152516547, 7.5]
    ] * ureg.angstrom
    cell_mos2 = [
        [3.184066464684593, 0.0, 0.0],
        [-1.5920332323422965, 2.7574824457549643, 0.0],
        [0.0, 0.0, 18.127112646351521]
    ] * ureg.angstrom
    system_mos2 = Atoms(
        symbols=symbols_mos2,
        positions=positions_mos2,
        cell=cell_mos2,
        pbc=True
    )
    mos2_2d = ase.build.surface(system_mos2, (1, 1, 0), layers=4, vacuum=None, periodic=True)
    stacked_2d_mos2 = ase.build.stack(mos2_2d, mos2_2d, axis=2, distance=2.5)
    stacked_2d_mos2_2 = ase.build.stack(stacked_2d_mos2, stacked_2d_mos2, axis=2)
    return stacked_2d_mos2_2


def mos2_topology() -> List[ResultSystem]:
    subsystem = create_system(
        label='subsystem',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['Mo', 'S'],
        formula_hill='Mo16S32',
        formula_reduced='Mo16S32',
        formula_anonymous='A32B16',
        system_relation=Relation(type="subsystem"),
        indices=[i for i in range(48)]
    )

    atoms = NOMADAtoms()
    atoms.periodic = [True, True, False]
    atoms.lattice_vectors = [
        [3.253646631826119, 0.0, 0.0],
        [-1.6268233159130596, 2.8177406380990937, 0.0],
        [0.0, 0.0, 3.124912396241947]
    ] * ureg.angstrom
    atoms.positions = [
        [0.0, 0.0, 1.562456198120974],
        [1.626823332181293, 0.9392468699738958, 3.124912396241947],
        [1.626823332181293, 0.9392468699738958, 0.0]
    ] * ureg.angstrom
    atoms.labels = ["Mo", "S", "S"]
    atoms.species = [42, 16, 16]
    species_Mo = Species()
    species_Mo.name = "Mo"
    species_Mo.chemical_symbols = ["Mo"]
    species_Mo.concentration = [1.0]
    species_S = Species()
    species_S.name = "S"
    species_S.chemical_symbols = ["S"]
    species_S.concentration = [1.0]
    cell = Cell(
        a=3.22 * ureg.angstrom,
        b=3.22 * ureg.angstrom,
        gamma=2.0943951023931957 * ureg.rad,
    )
    convsystem = create_system(
        label='conventional cell',
        structural_type='2D',
        dimensionality='2D',
        building_block='2D material',
        elements=['Mo', 'S'],
        formula_hill='MoS2',
        formula_reduced='MoS2',
        formula_anonymous='A2B',
        system_relation=Relation(type="conventional_cell"),
        material_id="KV4aYm-S1VJOH-SKeXXuG8JkTiGF",
        atoms=atoms,
        cell=cell,
        symmetry=None,
    )
    return [subsystem, convsystem]


def stacked_graphene_boron_nitride_topology() -> Atoms:
    topologies_c = graphene_topology()
    topologies_bn = boron_nitride_topology()

    # Indices are modified
    n_atoms_c = len(topologies_c[0].indices)
    n_atoms_bn = len(topologies_bn[0].indices)
    topologies_c[0].indices = list(range(0, n_atoms_c))
    topologies_bn[0].indices = list(range(n_atoms_c, n_atoms_c + n_atoms_bn))

    # Lattice parameters are modified as the cells are strained
    topologies_c[1].cell.a = 2.16 * ureg.angstrom
    topologies_c[1].cell.b = 2.16 * ureg.angstrom
    topologies_bn[1].cell.a = 2.16 * ureg.angstrom
    topologies_bn[1].cell.b = 2.16 * ureg.angstrom

    return topologies_c + topologies_bn
