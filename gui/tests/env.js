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
    "entry_points": {
      "exclude": [
        "nomad_porous_materials.normalizers:porositynormalizer"
      ],
      "include": [
        "runschema:run_schema_entry_point",
        "simulationworkflowschema:simulationworkflow_schema_entry_point",
        "electronicparsers:vasp_parser_entry_point"
      ],
      "options": {
        "apps/1_all/1_entries": {
          "id": "apps/1_all/1_entries",
          "entry_point_type": "app",
          "app": {
            "label": "Entries",
            "path": "entries",
            "resource": "entries",
            "category": "All",
            "description": "Search entries across all domains",
            "readme": "This page allows you to search **entries** within NOMAD. Entries represent any individual data items that have been uploaded to NOMAD, no matter whether they come from theoretical calculations, experiments, lab notebooks or any other source of data. This allows you to perform cross-domain queries, but if you are interested in a specific subfield, you should see if a specific application exists for it in the explore menu to get more details.",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "entry_name",
                "selected": true,
                "title": "Name",
                "align": "left"
              },
              {
                "search_quantity": "results.material.chemical_formula_hill",
                "selected": true,
                "title": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "entry_type",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_create_time",
                "selected": true,
                "title": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_name",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "upload_id",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.method_name",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.program_name",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.dft.xc_functional_type",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.apw_cutoff",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.basis_set",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.k_line_density",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.native_tier",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.planewave_cutoff",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.structural_type",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.crystal_system",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.space_group_symbol",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.space_group_number",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.lab_ids",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.sections",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.methods",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.tags",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.instruments",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "mainfile",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "comment",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "references",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "datasets",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "published",
                "selected": false,
                "title": "Access",
                "align": "left"
              }
            ],
            "rows": {
              "actions": {
                "enabled": true
              },
              "details": {
                "enabled": true
              },
              "selection": {
                "enabled": true
              }
            },
            "menu": {
              "width": 12,
              "show_header": true,
              "title": "Filters",
              "type": "menu",
              "size": "sm",
              "indentation": 0,
              "items": [
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Material",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Elements / Formula",
                  "type": "menu",
                  "size": "xxl",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "periodic_table",
                      "search_quantity": "results.material.elements",
                      "scale": "linear",
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_hill",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_iupac",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_reduced",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_anonymous",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.material.n_elements",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Structure / Symmetry",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.material.structural_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.bravais_lattice",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.crystal_system",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.space_group_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.structure_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.strukturbericht_designation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.point_group",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.hall_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.prototype_aflow_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Method",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "search_quantity": "results.method.simulation.program_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.program_version",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Precision",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.k_line_density",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.precision.native_tier",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.precision.basis_set",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.planewave_cutoff",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.apw_cutoff",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DFT": {
                          "label": "Search DFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_names",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.exact_exchange_mixing_factor",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.hubbard_kanamori_model.u_effective",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.core_electron_treatment",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.relativity_method",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "TB",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "TB": {
                          "label": "Search TB entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.localization_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "GW",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "GW": {
                          "label": "Search GW entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "BSE",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "BSE": {
                          "label": "Search BSE entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.solver",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.gw_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DMFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DMFT": {
                          "label": "Search DMFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.impurity_solver_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.inverse_temperature",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.magnetic_state",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.u",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.jh",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.analytical_continuation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "EELS",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "EELS": {
                          "label": "Search EELS entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.spectroscopic.spectra.provenance.eels",
                      "items": [
                        {
                          "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.detector_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.resolution",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.min_energy",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.max_energy",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Workflow",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Molecular dynamics",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.workflow_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "MolecularDynamics": {
                          "label": "Search molecular dynamics entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.thermodynamic.trajectory",
                      "items": [
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.available_properties",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 4,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.ensemble_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.time_step",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Geometry Optimization",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.properties.available_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "geometry_optimization": {
                          "label": "Search geometry optimization entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.geometry_optimization",
                      "items": [
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_energy_difference",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_force_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_displacement_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Properties",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Electronic",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "electronic_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic.band_gap",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.dos_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.dos_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Vibrational",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "vibrational_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Mechanical",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "mechanical_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.bulk_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.bulk_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.bulk_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.shear_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.shear_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.shear_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.energy_volume_curve",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.energy_volume_curve.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "options": 5,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Use Cases",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Solar Cells",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.efficiency",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.fill_factor",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.open_circuit_voltage",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.short_circuit_current_density",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.illumination_intensity",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.optoelectronic.solar_cell.device_area",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.device_architecture",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.device_stack",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.absorber",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.absorber_fabrication",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.electron_transport_layer",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.hole_transport_layer",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.substrate",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.back_contact",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Heterogeneous Catalysis",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.properties.catalytic.reaction.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.catalytic.reaction.reactants",
                      "items": [
                        {
                          "search_quantity": "results.properties.catalytic.reaction.reactants.name",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.reaction.reactants.conversion",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.reaction.reactants.gas_concentration_in",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.reaction.reactants.gas_concentration_out",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.catalytic.reaction.products",
                      "items": [
                        {
                          "search_quantity": "results.properties.catalytic.reaction.products.name",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.reaction.products.selectivity",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.reaction.products.gas_concentration_out",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.properties.catalytic.reaction.reaction_conditions.temperature",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.catalytic.catalyst",
                      "items": [
                        {
                          "search_quantity": "results.properties.catalytic.catalyst.catalyst_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.catalytic.catalyst.preparation_method",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.catalytic.catalyst.catalyst_name",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.catalytic.catalyst.characterization_methods",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.catalytic.catalyst.surface_area",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "search_quantity": "authors.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "upload_create_time",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "external_db",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.doi",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Visibility / IDs / Schema",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "visibility"
                    },
                    {
                      "search_quantity": "entry_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.material_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "definitions"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Optimade",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "optimade"
                    }
                  ]
                }
              ]
            },
            "search_quantities": {
              "exclude": [
                "mainfile",
                "entry_name",
                "combine"
              ]
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "apps/2_theory/1_calculations": {
          "id": "apps/2_theory/1_calculations",
          "entry_point_type": "app",
          "app": {
            "label": "Calculations",
            "path": "calculations",
            "resource": "entries",
            "category": "Theory",
            "description": "Search calculations",
            "readme": "This page allows you to search **calculations** within NOMAD. Calculations typically come from a specific simulation software that uses an approximate model to investigate and report different physical properties.",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "results.material.chemical_formula_hill",
                "selected": true,
                "title": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.program_name",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.method.method_name",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.dft.xc_functional_type",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_create_time",
                "selected": true,
                "title": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.apw_cutoff",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.basis_set",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.k_line_density",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.native_tier",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.method.simulation.precision.planewave_cutoff",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.structural_type",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.crystal_system",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.space_group_symbol",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.material.symmetry.space_group_number",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "entry_name",
                "selected": false,
                "title": "Name",
                "align": "left"
              },
              {
                "search_quantity": "mainfile",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "comment",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "references",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "datasets",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "published",
                "selected": false,
                "title": "Access",
                "align": "left"
              }
            ],
            "rows": {
              "actions": {
                "enabled": true
              },
              "details": {
                "enabled": true
              },
              "selection": {
                "enabled": true
              }
            },
            "menu": {
              "width": 12,
              "show_header": true,
              "title": "Filters",
              "type": "menu",
              "size": "sm",
              "indentation": 0,
              "items": [
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Material",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Elements / Formula",
                  "type": "menu",
                  "size": "xxl",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "periodic_table",
                      "search_quantity": "results.material.elements",
                      "scale": "linear",
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_hill",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_iupac",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_reduced",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_anonymous",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.material.n_elements",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Structure / Symmetry",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.material.structural_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.bravais_lattice",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.crystal_system",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.space_group_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.structure_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.strukturbericht_designation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.point_group",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.hall_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.prototype_aflow_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Method",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "search_quantity": "results.method.simulation.program_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.program_version",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Precision",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.k_line_density",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.precision.native_tier",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.precision.basis_set",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.planewave_cutoff",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.precision.apw_cutoff",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DFT": {
                          "label": "Search DFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_names",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.exact_exchange_mixing_factor",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.hubbard_kanamori_model.u_effective",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.core_electron_treatment",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.relativity_method",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "TB",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "TB": {
                          "label": "Search TB entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.localization_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "GW",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "GW": {
                          "label": "Search GW entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "BSE",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "BSE": {
                          "label": "Search BSE entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.solver",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.gw_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DMFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DMFT": {
                          "label": "Search DMFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.impurity_solver_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.inverse_temperature",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.magnetic_state",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.u",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.jh",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.analytical_continuation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Workflow",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Molecular dynamics",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.workflow_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "MolecularDynamics": {
                          "label": "Search molecular dynamics entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.thermodynamic.trajectory",
                      "items": [
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.available_properties",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 4,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.ensemble_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.time_step",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Geometry Optimization",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.properties.available_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "geometry_optimization": {
                          "label": "Search geometry optimization entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.geometry_optimization",
                      "items": [
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_energy_difference",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_force_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_displacement_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Properties",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Electronic",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "electronic_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic.band_gap",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.dos_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.dos_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Vibrational",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "vibrational_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Mechanical",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "mechanical_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.bulk_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.bulk_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.bulk_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.shear_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.shear_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.shear_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.energy_volume_curve",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.energy_volume_curve.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "options": 5,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "search_quantity": "authors.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "upload_create_time",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "external_db",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.doi",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Visibility / IDs / Schema",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "visibility"
                    },
                    {
                      "search_quantity": "entry_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.material_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "definitions"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Optimade",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "optimade"
                    }
                  ]
                }
              ]
            },
            "search_quantities": {
              "exclude": [
                "mainfile",
                "entry_name",
                "combine"
              ]
            },
            "dashboard": {
              "widgets": [
                {
                  "type": "periodictable",
                  "search_quantity": "results.material.elements",
                  "scale": "linear",
                  "layout": {
                    "lg": {
                      "h": 11,
                      "w": 14,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 11,
                      "w": 14,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 9,
                      "w": 13,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.material.symmetry.space_group_symbol",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 5,
                      "x": 19,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 6,
                      "y": 13,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 24,
                      "y": 5,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 9,
                      "w": 6,
                      "x": 30,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.material.structural_type",
                  "type": "terms",
                  "scale": "log",
                  "show_input": false,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 5,
                      "x": 19,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 6,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 11,
                      "w": 5,
                      "x": 19,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 9,
                      "w": 6,
                      "x": 19,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.method.simulation.program_name",
                  "type": "terms",
                  "scale": "log",
                  "show_input": true,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 5,
                      "x": 14,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 8,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 11,
                      "w": 5,
                      "x": 14,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 9,
                      "w": 6,
                      "x": 13,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.material.symmetry.crystal_system",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": false,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 5,
                      "x": 14,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 0,
                      "y": 13,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 5,
                      "w": 6,
                      "x": 24,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 9,
                      "w": 5,
                      "x": 25,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                }
              ]
            },
            "filters_locked": {
              "quantities": "results.method.simulation.program_name"
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "apps/2_theory/2_materials": {
          "id": "apps/2_theory/2_materials",
          "entry_point_type": "app",
          "app": {
            "label": "Materials",
            "path": "materials",
            "resource": "materials",
            "category": "Theory",
            "description": "Search materials that are identified from calculations",
            "readme": "This page allows you to search **materials** within NOMAD. NOMAD can often automatically detect the material from individual calculations that contain the full atomistic structure and can then group the data by using these detected materials. This allows you to search individual materials which have properties that are aggregated from several entries. Following the link for a specific material will take you to the corresponding [NOMAD Encyclopedia](https://nomad-lab.eu/prod/rae/encyclopedia/#/search) page for that material. NOMAD Encyclopedia is a service that is specifically oriented towards materials property exploration.\nNotice that by default the properties that you search can be combined from several different entries. If instead you wish to search for a material with an individual entry fullfilling your search criteria, uncheck the **combine results from several entries**-checkbox.",
            "pagination": {
              "order_by": "chemical_formula_hill",
              "order": "asc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "chemical_formula_hill",
                "selected": true,
                "title": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "structural_type",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "symmetry.structure_name",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "symmetry.space_group_number",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "symmetry.crystal_system",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "symmetry.space_group_symbol",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "material_id",
                "selected": false,
                "align": "left"
              }
            ],
            "rows": {
              "actions": {
                "enabled": true
              },
              "details": {
                "enabled": false
              },
              "selection": {
                "enabled": false
              }
            },
            "menu": {
              "width": 12,
              "show_header": true,
              "title": "Filters",
              "type": "menu",
              "size": "sm",
              "indentation": 0,
              "items": [
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Material",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Elements / Formula",
                  "type": "menu",
                  "size": "xxl",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "periodic_table",
                      "search_quantity": "results.material.elements",
                      "scale": "linear",
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_hill",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_iupac",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_reduced",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_anonymous",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.material.n_elements",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Structure / Symmetry",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.material.structural_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.bravais_lattice",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.crystal_system",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.space_group_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.structure_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.strukturbericht_designation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.point_group",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.hall_symbol",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.symmetry.prototype_aflow_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Method",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "search_quantity": "results.method.simulation.program_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.program_version",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DFT": {
                          "label": "Search DFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.xc_functional_names",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.exact_exchange_mixing_factor",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dft.hubbard_kanamori_model.u_effective",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.core_electron_treatment",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dft.relativity_method",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "TB",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "TB": {
                          "label": "Search TB entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.tb.localization_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "GW",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "GW": {
                          "label": "Search GW entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.gw.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "BSE",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "BSE": {
                          "label": "Search BSE entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.solver",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.starting_point_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.basis_set_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.bse.gw_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "DMFT",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "DMFT": {
                          "label": "Search DMFT entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.impurity_solver_type",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 2,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.inverse_temperature",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.magnetic_state",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.u",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.method.simulation.dmft.jh",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.dmft.analytical_continuation",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Workflow",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Molecular dynamics",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.workflow_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "MolecularDynamics": {
                          "label": "Search molecular dynamics entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.thermodynamic.trajectory",
                      "items": [
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.available_properties",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 4,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.ensemble_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.thermodynamic.trajectory.provenance.molecular_dynamics.time_step",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Geometry Optimization",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.properties.available_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "geometry_optimization": {
                          "label": "Search geometry optimization entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.geometry_optimization",
                      "items": [
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_energy_difference",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_force_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.geometry_optimization.final_displacement_maximum",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Properties",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Electronic",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "electronic_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic.band_gap",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "options": 2,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.band_structure_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.band_structure_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.electronic.dos_electronic",
                      "items": [
                        {
                          "search_quantity": "results.properties.electronic.dos_electronic.spin_polarized",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Vibrational",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "vibrational_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Mechanical",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "mechanical_properties",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.bulk_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.bulk_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.bulk_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.shear_modulus",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.shear_modulus.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": false,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.mechanical.shear_modulus.value",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.mechanical.energy_volume_curve",
                      "items": [
                        {
                          "search_quantity": "results.properties.mechanical.energy_volume_curve.type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "options": 5,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "search_quantity": "authors.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "upload_create_time",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "external_db",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.doi",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Visibility / IDs / Schema",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "visibility"
                    },
                    {
                      "search_quantity": "entry_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.material_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "definitions"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Optimade",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "optimade"
                    }
                  ]
                },
                {
                  "search_quantity": "combine",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": false,
                  "width": 12,
                  "show_header": false,
                  "options": {
                    "True": {
                      "label": "Combine results from several entries",
                      "description": "If selected, your filters may be matched from several entries that contain the same material. When unchecked, the material has to have a single entry that matches all your filters."
                    }
                  },
                  "n_columns": 1,
                  "sort_static": true,
                  "show_statistics": false
                }
              ]
            },
            "search_quantities": {
              "exclude": [
                "mainfile",
                "entry_name"
              ]
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "apps/3_experiment/1_eln": {
          "id": "apps/3_experiment/1_eln",
          "entry_point_type": "app",
          "app": {
            "label": "ELN",
            "path": "eln",
            "resource": "entries",
            "category": "Experiment",
            "description": "Search electronic lab notebooks",
            "readme": "This page allows you to specifically seach **electronic lab notebooks (ELNs)** within NOMAD. It is very similar to the entries search, but with a reduced filter set and specialized arrangement of default columns.",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "entry_name",
                "selected": true,
                "title": "Name",
                "align": "left"
              },
              {
                "search_quantity": "entry_type",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_create_time",
                "selected": true,
                "title": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.material.chemical_formula_hill",
                "selected": false,
                "title": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "results.method.method_name",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.lab_ids",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.sections",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.methods",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.tags",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.eln.instruments",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "mainfile",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "comment",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "references",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "datasets",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "published",
                "selected": false,
                "title": "Access",
                "align": "left"
              }
            ],
            "rows": {
              "actions": {
                "enabled": true
              },
              "details": {
                "enabled": true
              },
              "selection": {
                "enabled": true
              }
            },
            "menu": {
              "width": 12,
              "show_header": true,
              "title": "Filters",
              "type": "menu",
              "size": "sm",
              "indentation": 0,
              "items": [
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Material",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Elements / Formula",
                  "type": "menu",
                  "size": "xxl",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "periodic_table",
                      "search_quantity": "results.material.elements",
                      "scale": "linear",
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_hill",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_iupac",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_reduced",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_anonymous",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.material.n_elements",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Electronic Lab Notebook",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "search_quantity": "results.eln.sections",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.tags",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.methods",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.instruments",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.names",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.descriptions",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.eln.lab_ids",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "User Defined Quantities",
                  "type": "menu",
                  "size": "xl",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "custom_quantities"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "search_quantity": "authors.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "upload_create_time",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "external_db",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.doi",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Visibility / IDs / Schema",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "visibility"
                    },
                    {
                      "search_quantity": "entry_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.material_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "definitions"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Optimade",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "optimade"
                    }
                  ]
                }
              ]
            },
            "search_quantities": {
              "exclude": [
                "mainfile",
                "entry_name",
                "combine"
              ]
            },
            "filters_locked": {
              "quantities": "data"
            }
          }
        },
        "apps/3_experiment/2_eels": {
          "id": "apps/3_experiment/2_eels",
          "entry_point_type": "app",
          "app": {
            "label": "EELS",
            "path": "eels",
            "resource": "entries",
            "category": "Experiment",
            "description": "Search electron energy loss spectroscopy experiments",
            "readme": "This page allows you to spefically search **Electron Energy Loss Spectroscopy (EELS) experiments** within NOMAD. It is similar to the entries search, but with a reduced filter set and specialized arrangement of default columns.",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "results.material.chemical_formula_hill",
                "selected": true,
                "title": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.detector_type",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.resolution",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_create_time",
                "selected": true,
                "title": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.min_energy",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.max_energy",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "entry_name",
                "selected": false,
                "title": "Name",
                "align": "left"
              },
              {
                "search_quantity": "entry_type",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "mainfile",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "comment",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "references",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "datasets",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "published",
                "selected": false,
                "title": "Access",
                "align": "left"
              }
            ],
            "rows": {
              "actions": {
                "enabled": true
              },
              "details": {
                "enabled": true
              },
              "selection": {
                "enabled": true
              }
            },
            "menu": {
              "width": 12,
              "show_header": true,
              "title": "Filters",
              "type": "menu",
              "size": "sm",
              "indentation": 0,
              "items": [
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Material",
                  "type": "menu",
                  "size": "md"
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Elements / Formula",
                  "type": "menu",
                  "size": "xxl",
                  "indentation": 1,
                  "items": [
                    {
                      "type": "periodic_table",
                      "search_quantity": "results.material.elements",
                      "scale": "linear",
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_hill",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_iupac",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_reduced",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.chemical_formula_anonymous",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 6,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "results.material.n_elements",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Method",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "search_quantity": "results.method.simulation.program_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.method.simulation.program_version",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "EELS",
                  "type": "menu",
                  "size": "md",
                  "indentation": 1,
                  "items": [
                    {
                      "search_quantity": "results.method.method_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": false,
                      "options": {
                        "EELS": {
                          "label": "Search EELS entries"
                        }
                      },
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": false
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "nested_object",
                      "path": "results.properties.spectroscopic.spectra.provenance.eels",
                      "items": [
                        {
                          "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.detector_type",
                          "type": "terms",
                          "scale": "linear",
                          "show_input": true,
                          "width": 12,
                          "show_header": true,
                          "n_columns": 1,
                          "sort_static": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.resolution",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.min_energy",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        },
                        {
                          "type": "histogram",
                          "show_input": true,
                          "x": {
                            "search_quantity": "results.properties.spectroscopic.spectra.provenance.eels.max_energy",
                            "scale": "linear"
                          },
                          "y": {
                            "scale": "linear"
                          },
                          "autorange": false,
                          "width": 12,
                          "show_header": true,
                          "show_statistics": true
                        }
                      ]
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "search_quantity": "authors.name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "type": "histogram",
                      "show_input": true,
                      "x": {
                        "search_quantity": "upload_create_time",
                        "scale": "linear"
                      },
                      "y": {
                        "scale": "linear"
                      },
                      "autorange": false,
                      "width": 12,
                      "show_header": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "external_db",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": false,
                      "width": 12,
                      "show_header": true,
                      "options": 5,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.doi",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Visibility / IDs / Schema",
                  "type": "menu",
                  "size": "md",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "visibility"
                    },
                    {
                      "search_quantity": "entry_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "upload_name",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "results.material.material_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "search_quantity": "datasets.dataset_id",
                      "type": "terms",
                      "scale": "linear",
                      "show_input": true,
                      "width": 12,
                      "show_header": true,
                      "options": 0,
                      "n_columns": 1,
                      "sort_static": true,
                      "show_statistics": true
                    },
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "definitions"
                    }
                  ]
                },
                {
                  "width": 12,
                  "show_header": true,
                  "title": "Optimade",
                  "type": "menu",
                  "size": "lg",
                  "items": [
                    {
                      "width": 12,
                      "show_header": true,
                      "type": "optimade"
                    }
                  ]
                }
              ]
            },
            "search_quantities": {
              "exclude": [
                "mainfile",
                "entry_name",
                "combine"
              ]
            },
            "filters_locked": {
              "results.method.method_name": "EELS"
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "eelsdbparser:eelsdb_parser_entry_point": {
          "id": "eelsdbparser:eelsdb_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/eels",
          "description": "NOMAD parser for EELSDB.",
          "plugin_package": "eelsdbparser",
          "level": 0,
          "aliases": [
            "parsers/eels"
          ],
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "example_uploads/1_basic_examples/1_theory": {
          "id": "example_uploads/1_basic_examples/1_theory",
          "entry_point_type": "example_upload",
          "description": "This upload demonstrate the basic use of NOMAD's *parsers*. For many *electronic\nstructure codes* (VASP, etc.), NOMAD provides parsers. You simply upload\nthe *input and output files* of your simulations and NOMAD parsers are extracting\nall necessary metadata to produce a **FAIR** dataset.\n",
          "category": "Basic examples",
          "title": "Electronic structure code input and output files",
          "resources": [
            {
              "path": "theory/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/1_basic_examples/2_eln": {
          "id": "example_uploads/1_basic_examples/2_eln",
          "entry_point_type": "example_upload",
          "description": "This example contains a custom NOMAD *schema* to create an **Electronic\nLab Notebook (ELN)** and a few example *data* entries that use this schema.\nThe schema demonstrates the basic concepts behind a NOMAD ELN and can be a good\n**starting point** to create you own schemas that model **FAIR data** acquired in your lab.\n",
          "category": "Basic examples",
          "title": "Electronic Lab Notebook",
          "resources": [
            {
              "path": "eln/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/1_basic_examples/3_tables": {
          "id": "example_uploads/1_basic_examples/3_tables",
          "entry_point_type": "example_upload",
          "description": "This upload demonstrates the use of tabular data. In this example we use an *xlsx*\nfile in combination with a custom schema. The schema describes what the columns\nin the excel file mean and NOMAD can parse everything accordingly to\nproduce a **FAIR** dataset.\n",
          "category": "Basic examples",
          "title": "Tabular Data",
          "resources": [
            {
              "path": "tabular/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/2_tutorials/1_rdm_tutorial": {
          "id": "example_uploads/2_tutorials/1_rdm_tutorial",
          "entry_point_type": "example_upload",
          "description": "This notebook will teach you how you can build tailored research data\nmanagement (RDM) solutions using NOMAD. It uses existing thermally\nactivated delayed fluorescent (TADF) molecule data to teach you how we\ncan use the NOMAD to turn research data into datasets that are FAIR:\nFindable, Accessible, Interoperable and Reusable. The end-result can be\ndistributed as a NOMAD plugin: a self-contained Python package that can be\ninstalled on a NOMAD Oasis.\n",
          "category": "Tutorials",
          "title": "Tailored Research Data Management (RDM) with NOMAD",
          "resources": [
            {
              "path": "rdm_tutorial/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/2_tutorials/2_cow_tutorial": {
          "id": "example_uploads/2_tutorials/2_cow_tutorial",
          "entry_point_type": "example_upload",
          "description": "This upload provides a notebook as a tutorial that demonstrates how to use NOMAD\nfor managing custom data and file types. Based on a simple *Countries of the World*\ndataset, it shows how to model the data in a schema, do parsing and normalization,\nprocess data, access existing data with NOMAD's API for analysis, and how to\nadd visualization to your data.\n",
          "category": "Tutorials",
          "title": "NOMAD as a Data Management Framework Tutorial",
          "resources": [
            {
              "path": "cow_tutorial/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "pynxtools.nomad.entrypoints:nexus_data_converter": {
          "id": "pynxtools.nomad.entrypoints:nexus_data_converter",
          "entry_point_type": "schema_package",
          "name": "NeXus Dataconverter",
          "description": "The NeXus dataconverter to convert data into the NeXus format.",
          "plugin_package": "pynxtools"
        },
        "pynxtools.nomad.entrypoints:nexus_parser": {
          "id": "pynxtools.nomad.entrypoints:nexus_parser",
          "entry_point_type": "parser",
          "name": "pynxtools parser",
          "description": "A parser for nexus files.",
          "plugin_package": "pynxtools",
          "level": 0,
          "aliases": [],
          "mainfile_name_re": ".*\\.nxs",
          "mainfile_mime_re": "application/x-hdf5",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "pynxtools.nomad.entrypoints:nexus_schema": {
          "id": "pynxtools.nomad.entrypoints:nexus_schema",
          "entry_point_type": "schema_package",
          "name": "NeXus",
          "description": "The NeXus metainfo package.",
          "plugin_package": "pynxtools"
        },
        "pynxtools_apm.nomad.entrypoints:apm_example": {
          "id": "pynxtools_apm.nomad.entrypoints:apm_example",
          "entry_point_type": "example_upload",
          "description": "\n        This example presents the capabilities of the NOMAD platform to store and standardize atom probe data.\n        It shows the generation of a NeXus file according to the\n        [NXapm](https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXapm.html#nxapm)\n        application definition and a successive analysis of an example data set.\n        The example contains a small atom probe dataset from an experiment with a LEAP instrument to get you started\n        and keep the size of your NOMAD installation small. Once started, we recommend changing the respective\n        input file in the NOMAD Oasis ELN to run the example with your own datasets.\n    ",
          "plugin_package": "pynxtools_apm",
          "category": "FAIRmat examples",
          "title": "Atom Probe Microscopy",
          "resources": [
            {
              "path": "nomad/examples/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        },
        "pynxtools_ellips.nomad.entrypoints:ellips_example": {
          "id": "pynxtools_ellips.nomad.entrypoints:ellips_example",
          "entry_point_type": "example_upload",
          "description": "\n        This example presents the capabilities of the NOMAD platform to store and standardize ellipsometry data.\n        It shows the generation of a NeXus file according to the [NXellipsometry](https://manual.nexusformat.org/classes/contributed_definitions/NXellipsometry.html#nxellipsometry)\n        application definition and a successive analysis of a SiO2 on Si Psi/Delta measurement.\n    ",
          "plugin_package": "pynxtools_ellips",
          "category": "FAIRmat examples",
          "title": "Ellipsometry",
          "resources": [
            {
              "path": "nomad/examples/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        },
        "pynxtools_em.nomad.entrypoints:em_example": {
          "id": "pynxtools_em.nomad.entrypoints:em_example",
          "entry_point_type": "example_upload",
          "description": "\n        This example presents the capabilities of the NOMAD platform to store and standardize electron microscopy.\n        It shows the generation of a NeXus file according to the\n        [NXem](https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXem.html#nxem)\n        application definition.\n        The example contains a small set of electron microscopy datasets to get started and keep the size of your\n        NOMAD installation small. Ones started, we recommend to change the respective input file in the NOMAD Oasis\n        ELN to run the example with your own datasets.\n    ",
          "plugin_package": "pynxtools_em",
          "category": "FAIRmat examples",
          "title": "Electron Microscopy",
          "resources": [
            {
              "path": "nomad/examples/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        },
        "pynxtools_mpes.nomad.entrypoints:mpes_example": {
          "id": "pynxtools_mpes.nomad.entrypoints:mpes_example",
          "entry_point_type": "example_upload",
          "description": "\n        This example presents the capabilities of the NOMAD platform to store and standardize multidimensional photoemission spectroscopy (MPES) experimental data. It contains three major examples:\n\n      - Taking a pre-binned file, here stored in a h5 file, and converting it into the standardized MPES NeXus format.\n        There exists a [NeXus application definition for MPES](https://manual.nexusformat.org/classes/contributed_definitions/NXmpes.html#nxmpes) which details the internal structure of such a file.\n      - Binning of raw data (see [here](https://www.nature.com/articles/s41597-020-00769-8) for additional resources) into a h5 file and consecutively generating a NeXus file from it.\n      - An analysis example using data in the NeXus format and employing the [pyARPES](https://github.com/chstan/arpes) analysis tool to reproduce the main findings of [this paper](https://arxiv.org/pdf/2107.07158.pdf).\n    ",
          "plugin_package": "pynxtools_mpes",
          "category": "FAIRmat examples",
          "title": "Multidimensional photoemission spectroscopy (MPES)",
          "resources": [
            {
              "path": "nomad/examples/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        },
        "pynxtools_stm.nomad.entrypoints:stm_example": {
          "id": "pynxtools_stm.nomad.entrypoints:stm_example",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store standardized Scanning Tunneling Microscopy (stm)",
          "plugin_package": "pynxtools_stm",
          "category": "SPM experiments examples",
          "title": "Scanning Tunneling Microscopy (STM)",
          "resources": [
            {
              "path": "nomad/examples/stm/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        },
        "pynxtools_stm.nomad.entrypoints:sts_example": {
          "id": "pynxtools_stm.nomad.entrypoints:sts_example",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store standardized Scanning Tunneling Spectroscopy (sts) data.",
          "plugin_package": "pynxtools_stm",
          "category": "SPM experiments examples",
          "title": "Scanning Tunneling Spectroscopy (STS)",
          "resources": [
            {
              "path": "nomad/examples/sts/*",
              "target": ""
            }
          ],
          "from_examples_directory": false
        }
      }
    ],
    "plugin_packages": {
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
        "version": "0.8.2.post1.dev9+g46b043e.d20241127"
      },
      "pynxtools_apm": {
        "description": "Make atom probe tomography and field-ion microscopy results interoperable via NeXus",
        "documentation": null,
        "entry_points": [
          "pynxtools_apm.nomad.entrypoints:apm_example"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/pynxtools-apm",
        "name": "pynxtools_apm",
        "repository": null,
        "version": "0.2.1.post1.dev23+gcfcc8e3"
      },
      "pynxtools_ellips": {
        "description": "A reader for transferring ellipsometry data from vendor formats to NeXus and NOMAD.",
        "documentation": null,
        "entry_points": [
          "pynxtools_ellips.nomad.entrypoints:ellips_example"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/pynxtools-ellips",
        "name": "pynxtools_ellips",
        "repository": null,
        "version": "0.0.4.post1.dev25+gf21be30"
      },
      "pynxtools_em": {
        "description": "Make electron microscopy results interoperable via NeXus",
        "documentation": null,
        "entry_points": [
          "pynxtools_em.nomad.entrypoints:em_example"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/pynxtools-em",
        "name": "pynxtools_em",
        "repository": null,
        "version": "0.3.0.post1.dev17+gc4c0c5f"
      },
      "pynxtools_mpes": {
        "description": null,
        "documentation": null,
        "entry_points": [
          "pynxtools_mpes.nomad.entrypoints:mpes_example"
        ],
        "homepage": "https://github.com/FAIRmat-NFDI/pynxtools-mpes",
        "name": "pynxtools_mpes",
        "repository": null,
        "version": "0.2.1.dev43+g373edb6"
      },
      "pynxtools_stm": {
        "description": "A plugin for pynxtools to convert sts and stm files",
        "documentation": null,
        "entry_points": [
          "pynxtools_stm.nomad.entrypoints:stm_example",
          "pynxtools_stm.nomad.entrypoints:sts_example"
        ],
        "homepage": null,
        "name": "pynxtools_stm",
        "repository": null,
        "version": "1.0.8.post1.dev16+gcff2ef8.d20241125"
      }
    }
  },
  "dataciteEnabled": false
}
