window.nomadEnv = {
  "appBase": "http://localhost:8000/fairdi/nomad/latest",
  "northBase": "http://localhost:9000/fairdi/nomad/latest/north",
  "keycloakBase": "https://nomad-lab.eu/fairdi/keycloak/auth/",
  "keycloakRealm": "fairdi_nomad_test",
  "keycloakClientId": "nomad_public",
  "debug": false,
  "encyclopediaBase": "https://nomad-lab.eu/prod/rae/encyclopedia/#",
  "oasis": false,
  "version": {},
  "globalLoginRequired": false,
  "servicesUploadLimit": 10,
  "appTokenMaxExpiresIn": 2592000,
  "uploadMembersGroupSearchEnabled": true,
  "ui": {
    "app_base": "http://localhost:8000/fairdi/nomad/latest",
    "north_base": "http://localhost:9000/fairdi/nomad/latest/north",
    "theme": {
      "title": "NOMAD"
    },
    "unit_systems": {
      "options": {
        "Custom": {
          "label": "Custom",
          "units": {
            "angle": {
              "definition": "\u00b0",
              "locked": false
            },
            "energy": {
              "definition": "eV",
              "locked": false
            },
            "length": {
              "definition": "\u00c5",
              "locked": false
            },
            "pressure": {
              "definition": "GPa",
              "locked": false
            },
            "time": {
              "definition": "fs",
              "locked": false
            },
            "dimensionless": {
              "definition": "dimensionless",
              "locked": false
            },
            "mass": {
              "definition": "kg",
              "locked": false
            },
            "current": {
              "definition": "A",
              "locked": false
            },
            "temperature": {
              "definition": "K",
              "locked": false
            },
            "luminosity": {
              "definition": "cd",
              "locked": false
            },
            "luminous_flux": {
              "definition": "lm",
              "locked": false
            },
            "substance": {
              "definition": "mol",
              "locked": false
            },
            "information": {
              "definition": "bit",
              "locked": false
            },
            "force": {
              "definition": "N",
              "locked": false
            },
            "power": {
              "definition": "W",
              "locked": false
            },
            "charge": {
              "definition": "C",
              "locked": false
            },
            "resistance": {
              "definition": "\u03a9",
              "locked": false
            },
            "conductance": {
              "definition": "S",
              "locked": false
            },
            "inductance": {
              "definition": "H",
              "locked": false
            },
            "magnetic_flux": {
              "definition": "Wb",
              "locked": false
            },
            "magnetic_field": {
              "definition": "T",
              "locked": false
            },
            "frequency": {
              "definition": "Hz",
              "locked": false
            },
            "luminance": {
              "definition": "nit",
              "locked": false
            },
            "illuminance": {
              "definition": "lx",
              "locked": false
            },
            "electric_potential": {
              "definition": "V",
              "locked": false
            },
            "capacitance": {
              "definition": "F",
              "locked": false
            },
            "activity": {
              "definition": "kat",
              "locked": false
            }
          }
        },
        "SI": {
          "label": "International System of Units (SI)",
          "units": {
            "activity": {
              "definition": "kat",
              "locked": true
            },
            "angle": {
              "definition": "rad",
              "locked": true
            },
            "capacitance": {
              "definition": "F",
              "locked": true
            },
            "charge": {
              "definition": "C",
              "locked": true
            },
            "conductance": {
              "definition": "S",
              "locked": true
            },
            "current": {
              "definition": "A",
              "locked": true
            },
            "dimensionless": {
              "definition": "dimensionless",
              "locked": true
            },
            "electric_potential": {
              "definition": "V",
              "locked": true
            },
            "energy": {
              "definition": "J",
              "locked": true
            },
            "force": {
              "definition": "N",
              "locked": true
            },
            "frequency": {
              "definition": "Hz",
              "locked": true
            },
            "illuminance": {
              "definition": "lx",
              "locked": true
            },
            "inductance": {
              "definition": "H",
              "locked": true
            },
            "information": {
              "definition": "bit",
              "locked": true
            },
            "length": {
              "definition": "m",
              "locked": true
            },
            "luminance": {
              "definition": "nit",
              "locked": true
            },
            "luminosity": {
              "definition": "cd",
              "locked": true
            },
            "luminous_flux": {
              "definition": "lm",
              "locked": true
            },
            "magnetic_field": {
              "definition": "T",
              "locked": true
            },
            "magnetic_flux": {
              "definition": "Wb",
              "locked": true
            },
            "mass": {
              "definition": "kg",
              "locked": true
            },
            "power": {
              "definition": "W",
              "locked": true
            },
            "pressure": {
              "definition": "Pa",
              "locked": true
            },
            "resistance": {
              "definition": "\u03a9",
              "locked": true
            },
            "substance": {
              "definition": "mol",
              "locked": true
            },
            "temperature": {
              "definition": "K",
              "locked": true
            },
            "time": {
              "definition": "s",
              "locked": true
            }
          }
        },
        "AU": {
          "label": "Hartree atomic units (AU)",
          "units": {
            "activity": {
              "definition": "kat",
              "locked": false
            },
            "angle": {
              "definition": "rad",
              "locked": false
            },
            "capacitance": {
              "definition": "F",
              "locked": false
            },
            "charge": {
              "definition": "C",
              "locked": false
            },
            "conductance": {
              "definition": "S",
              "locked": false
            },
            "current": {
              "definition": "atomic_unit_of_current",
              "locked": true
            },
            "dimensionless": {
              "definition": "dimensionless",
              "locked": true
            },
            "electric_potential": {
              "definition": "V",
              "locked": false
            },
            "energy": {
              "definition": "Ha",
              "locked": true
            },
            "force": {
              "definition": "atomic_unit_of_force",
              "locked": true
            },
            "frequency": {
              "definition": "Hz",
              "locked": false
            },
            "illuminance": {
              "definition": "lx",
              "locked": false
            },
            "inductance": {
              "definition": "H",
              "locked": false
            },
            "information": {
              "definition": "bit",
              "locked": false
            },
            "length": {
              "definition": "bohr",
              "locked": true
            },
            "luminance": {
              "definition": "nit",
              "locked": false
            },
            "luminosity": {
              "definition": "cd",
              "locked": false
            },
            "luminous_flux": {
              "definition": "lm",
              "locked": false
            },
            "magnetic_field": {
              "definition": "T",
              "locked": false
            },
            "magnetic_flux": {
              "definition": "Wb",
              "locked": false
            },
            "mass": {
              "definition": "m_e",
              "locked": true
            },
            "power": {
              "definition": "W",
              "locked": false
            },
            "pressure": {
              "definition": "atomic_unit_of_pressure",
              "locked": true
            },
            "resistance": {
              "definition": "\u03a9",
              "locked": false
            },
            "substance": {
              "definition": "mol",
              "locked": false
            },
            "temperature": {
              "definition": "atomic_unit_of_temperature",
              "locked": true
            },
            "time": {
              "definition": "atomic_unit_of_time",
              "locked": true
            }
          }
        }
      },
      "selected": "Custom"
    },
    "entry": {
      "cards": {
        "exclude": [
          "relatedResources"
        ],
        "options": {
          "sections": {
            "error": "Could not render section card."
          },
          "definitions": {
            "error": "Could not render definitions card."
          },
          "nexus": {
            "error": "Could not render NeXus card."
          },
          "hdf5dataset": {
            "error": "Could not render HDF5Dataset card."
          },
          "material": {
            "error": "Could not render material card."
          },
          "solarcell": {
            "error": "Could not render solar cell properties."
          },
          "heterogeneouscatalyst": {
            "error": "Could not render catalyst properties."
          },
          "electronic": {
            "error": "Could not render electronic properties."
          },
          "vibrational": {
            "error": "Could not render vibrational properties."
          },
          "mechanical": {
            "error": "Could not render mechanical properties."
          },
          "thermodynamic": {
            "error": "Could not render thermodynamic properties."
          },
          "structural": {
            "error": "Could not render structural properties."
          },
          "dynamical": {
            "error": "Could not render dynamical properties."
          },
          "geometry_optimization": {
            "error": "Could not render geometry optimization."
          },
          "spectroscopic": {
            "error": "Could not render spectroscopic properties."
          },
          "history": {
            "error": "Could not render history card."
          },
          "workflow": {
            "error": "Could not render workflow card."
          },
          "references": {
            "error": "Could not render references card."
          },
          "relatedResources": {
            "error": "Could not render related resources card."
          }
        }
      }
    },
    "north": {
      "enabled": true
    },
    "example_uploads": {}
  },
  "plugins": {
    "entry_points": [
      {
        "id": "runschema:run_schema_entry_point",
        "entry_point_type": "schema_package",
        "name": "RunSchema",
        "description": "Schema for the nomad run section.",
        "plugin_package": "runschema"
      },
      {
        "id": "simulationworkflowschema:simulationworkflow_schema_entry_point",
        "entry_point_type": "schema_package",
        "name": "SimulationWorkflowSchema",
        "description": "Schema for the nomad simulation workflows.",
        "plugin_package": "simulationworkflowschema"
      },
      {
        "id": "electronicparsers:vasp_parser_entry_point",
        "entry_point_type": "parser",
        "name": "parsers/vasp",
        "description": "NOMAD parser for VASP.",
        "plugin_package": "electronicparsers",
        "level": 0,
        "aliases": [
          "parsers/vasp"
        ],
        "mainfile_contents_re": "^\\s*<\\?xml version=\"1\\.0\" encoding=\"ISO-8859-1\"\\?>\\s*?\\s*<modeling>?\\s*<generator>?\\s*<i name=\"program\" type=\"string\">\\s*vasp\\s*</i>?|^\\svasp[\\.\\d]+.+?(?:\\(build|complex)[\\s\\S]+?executed on",
        "mainfile_name_re": ".*[^/]*xml[^/]*",
        "mainfile_mime_re": "(application/.*)|(text/.*)",
        "mainfile_alternative": true,
        "supported_compressions": [
          "gz",
          "bz2",
          "xz"
        ]
      }
    ],
    "plugin_packages": {
      "atomisticparsers": {
        "description": "Collection of NOMAD parsers for atomistic codes.",
        "documentation": null,
        "entry_points": [
          "atomisticparsers:amber_parser_entry_point",
          "atomisticparsers:asap_parser_entry_point",
          "atomisticparsers:bopfox_parser_entry_point",
          "atomisticparsers:dftbplus_parser_entry_point",
          "atomisticparsers:dlpoly_parser_entry_point",
          "atomisticparsers:gromacs_parser_entry_point",
          "atomisticparsers:gromos_parser_entry_point",
          "atomisticparsers:gulp_parser_entry_point",
          "atomisticparsers:h5md_parser_entry_point",
          "atomisticparsers:lammps_parser_entry_point",
          "atomisticparsers:libatoms_parser_entry_point",
          "atomisticparsers:namd_parser_entry_point",
          "atomisticparsers:tinker_parser_entry_point",
          "atomisticparsers:xtb_parser_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/atomistic-parsers",
        "name": "atomisticparsers",
        "repository": null,
        "version": "1.0.2"
      },
      "bandstructurenormalizer": {
        "description": "Band structure normalizer plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "bandstructurenormalizer:bandstructure_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-bandstructure",
        "name": "bandstructurenormalizer",
        "repository": null,
        "version": "1.0"
      },
      "databaseparsers": {
        "description": "Collection of NOMAD parsers for databases.",
        "documentation": null,
        "entry_points": [
          "databaseparsers:openkim_parser_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/database-parsers",
        "name": "databaseparsers",
        "repository": null,
        "version": "1.0"
      },
      "dosnormalizer": {
        "description": "DOS normalizer plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "dosnormalizer:dos_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-dos",
        "name": "dosnormalizer",
        "repository": null,
        "version": "1.0"
      },
      "eelsdbparser": {
        "description": "NOMAD converter/parser for metadata from EELS database.",
        "documentation": null,
        "entry_points": [
          "eelsdbparser:eelsdb_parser_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-parser-eelsdb",
        "name": "eelsdbparser",
        "repository": null,
        "version": "1.0"
      },
      "electronicparsers": {
        "description": "Collection of NOMAD parsers for electronic structure codes.",
        "documentation": null,
        "entry_points": [
          "electronicparsers:abacus_parser_entry_point",
          "electronicparsers:abinit_parser_entry_point",
          "electronicparsers:ams_parser_entry_point",
          "electronicparsers:atk_parser_entry_point",
          "electronicparsers:bigdft_parser_entry_point",
          "electronicparsers:castep_parser_entry_point",
          "electronicparsers:charmm_parser_entry_point",
          "electronicparsers:cp2k_parser_entry_point",
          "electronicparsers:cpmd_parser_entry_point",
          "electronicparsers:crystal_parser_entry_point",
          "electronicparsers:dmol3_parser_entry_point",
          "electronicparsers:edmft_parser_entry_point",
          "electronicparsers:elk_parser_entry_point",
          "electronicparsers:exciting_parser_entry_point",
          "electronicparsers:fhiaims_parser_entry_point",
          "electronicparsers:fleur_parser_entry_point",
          "electronicparsers:fplo_parser_entry_point",
          "electronicparsers:gamess_parser_entry_point",
          "electronicparsers:gaussian_parser_entry_point",
          "electronicparsers:gpaw_parser_entry_point",
          "electronicparsers:magres_parser_entry_point",
          "electronicparsers:molcas_parser_entry_point",
          "electronicparsers:mopac_parser_entry_point",
          "electronicparsers:nwchem_parser_entry_point",
          "electronicparsers:ocean_parser_entry_point",
          "electronicparsers:octopus_parser_entry_point",
          "electronicparsers:onetep_parser_entry_point",
          "electronicparsers:openmx_parser_entry_point",
          "electronicparsers:orca_parser_entry_point",
          "electronicparsers:psi4_parser_entry_point",
          "electronicparsers:qball_parser_entry_point",
          "electronicparsers:qbox_parser_entry_point",
          "electronicparsers:quantumespresso_parser_entry_point",
          "electronicparsers:siesta_parser_entry_point",
          "electronicparsers:soliddmft_parser_entry_point",
          "electronicparsers:tbstudio_parser_entry_point",
          "electronicparsers:turbomole_parser_entry_point",
          "electronicparsers:vasp_parser_entry_point",
          "electronicparsers:w2dynamics_parser_entry_point",
          "electronicparsers:wannier90_parser_entry_point",
          "electronicparsers:wien2k_parser_entry_point",
          "electronicparsers:yambo_parser_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/electronic-parsers",
        "name": "electronicparsers",
        "repository": null,
        "version": "1.0.2"
      },
      "nomad_aitoolkit": {
        "description": "Schema and app for AI Toolkit notebooks.",
        "documentation": null,
        "entry_points": [
          "nomad_aitoolkit.apps:aitoolkit",
          "nomad_aitoolkit:aitoolkit"
        ],
        "homepage": null,
        "name": "nomad_aitoolkit",
        "repository": "https://github.com/FAIRmat-NFDI/nomad-aitoolkit",
        "version": "0.1.1"
      },
      "nomad_external_eln_integrations": {
        "description": "3rd Party Integration packages",
        "documentation": null,
        "entry_points": [
          "nomad_external_eln_integrations.parsers:chemotion_parser_entry_point",
          "nomad_external_eln_integrations.example_uploads:elabftwexample",
          "nomad_external_eln_integrations.parsers:elabftw_parser_entry_point",
          "nomad_external_eln_integrations.schema_packages.elabftw:elabftw_schema",
          "nomad_external_eln_integrations.schema_packages.labfolder:labfolder_schema",
          "nomad_external_eln_integrations.schema_packages.openbis:openbis_schema"
        ],
        "homepage": null,
        "name": "nomad_external_eln_integrations",
        "repository": "https://github.com/FAIRmat-NFDI/nomad-external-eln-integrations",
        "version": "0.1.0"
      },
      "nomad_porous_materials": {
        "description": "NOMAD plugin for porous materials",
        "documentation": null,
        "entry_points": [
          "nomad_porous_materials.apps:mofapp",
          "nomad_porous_materials.normalizers:porositynormalizer"
        ],
        "homepage": null,
        "name": "nomad_porous_materials",
        "repository": "https://github.com/lauri-codes/nomad-porous-materials",
        "version": "0.1.0"
      },
      "nomad_simulations": {
        "description": "A NOMAD plugin for FAIR schemas for simulation data.",
        "documentation": "https://nomad-coe.github.io/nomad-simulations/",
        "entry_points": [
          "nomad_simulations.schema_packages:nomad_simulations_plugin"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-simulations",
        "name": "nomad_simulations",
        "repository": null,
        "version": "0.0.1"
      },
      "perovskite_solar_cell_database": {
        "description": "Perovskite solar cell data schema plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "perovskite_solar_cell_database:perovskite_solar_cell",
          "perovskite_solar_cell_database.apps:solar_cells"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/nomad-perovskite-solar-cells-database",
        "name": "perovskite_solar_cell_database",
        "repository": "https://github.com/FAIRmat-NFDI/nomad-perovskite-solar-cells-database",
        "version": "0.0.0"
      },
      "pynxtools": {
        "description": "Extend NeXus for experiments and characterization in Materials Science and Materials Engineering and serve as a NOMAD parser implementation for NeXus.",
        "documentation": null,
        "entry_points": [
          "pynxtools.nomad.entrypoints:nexus_data_converter",
          "pynxtools.nomad.entrypoints:nexus_parser",
          "pynxtools.nomad.entrypoints:nexus_schema"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/pynxtools",
        "name": "pynxtools",
        "repository": null,
        "version": "0.7.0"
      },
      "runschema": {
        "description": "Run schema plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "runschema:run_schema_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-schema-plugin-run.git",
        "name": "runschema",
        "repository": null,
        "version": "1.0.2"
      },
      "simulationworkflownormalizer": {
        "description": "Simulation workflow nomad plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "simulationworkflownormalizer:simulationworkflow_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-simulation-workflow",
        "name": "simulationworkflownormalizer",
        "repository": null,
        "version": "1.0"
      },
      "simulationworkflowschema": {
        "description": "Simulation workflow schema plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "simulationworkflowschema:simulationworkflow_schema_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-schema-simulation-workflow-plugin",
        "name": "simulationworkflowschema",
        "repository": null,
        "version": "1.0.4"
      },
      "soapnormalizer": {
        "description": "SOAP nomad plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "soapnormalizer:soap_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-soap",
        "name": "soapnormalizer",
        "repository": null,
        "version": "1.0"
      },
      "spectranormalizer": {
        "description": "Spectra normalizer plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "spectranormalizer:spectra_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-spectra",
        "name": "spectranormalizer",
        "repository": null,
        "version": "1.0"
      },
      "systemnormalizer": {
        "description": "System normalizer plugin for NOMAD.",
        "documentation": null,
        "entry_points": [
          "systemnormalizer:system_normalizer_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/nomad-normalizer-plugin-system",
        "name": "systemnormalizer",
        "repository": null,
        "version": "1.0"
      },
      "workflowparsers": {
        "description": "Collection of NOMAD parsers for workflow engines.",
        "documentation": null,
        "entry_points": [
          "workflowparsers:aflow_parser_entry_point",
          "workflowparsers:asr_parser_entry_point",
          "workflowparsers:atomate_parser_entry_point",
          "workflowparsers:elastic_parser_entry_point",
          "workflowparsers:fhivibes_parser_entry_point",
          "workflowparsers:lobster_parser_entry_point",
          "workflowparsers:phonopy_parser_entry_point",
          "workflowparsers:quantum_espresso_epw_parser_entry_point",
          "workflowparsers:quantum_espresso_phonon_parser_entry_point",
          "workflowparsers:quantum_espresso_xspectra_parser_entry_point"
        ],
        "homepage": "https://github.com/nomad-coe/electronic-parsers",
        "name": "workflowparsers",
        "repository": null,
        "version": "1.0"
      }
    }
  },
  "dataciteEnabled": false
}
