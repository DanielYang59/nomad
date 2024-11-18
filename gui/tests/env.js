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
        "atomisticparsers:amber_parser_entry_point": {
          "id": "atomisticparsers:amber_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/amber",
          "description": "NOMAD parser for AMBER.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/amber"
          ],
          "mainfile_contents_re": "\\s*Amber\\s[0-9]+\\s[A-Z]+\\s*[0-9]+",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:asap_parser_entry_point": {
          "id": "atomisticparsers:asap_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/asap",
          "description": "NOMAD parser for ASAP.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/asap"
          ],
          "mainfile_name_re": ".*.traj$",
          "mainfile_mime_re": "application/octet-stream",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:bopfox_parser_entry_point": {
          "id": "atomisticparsers:bopfox_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/bopfox",
          "description": "NOMAD parser for BOPFOX.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/bopfox"
          ],
          "mainfile_contents_re": "\\-+\\s+BOPfox \\(v",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:dftbplus_parser_entry_point": {
          "id": "atomisticparsers:dftbplus_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/dftbplus",
          "description": "NOMAD parser for DFTBPLUS.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/dftbplus"
          ],
          "mainfile_contents_re": "\\|  DFTB\\+",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "text/.*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:dlpoly_parser_entry_point": {
          "id": "atomisticparsers:dlpoly_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/dl-poly",
          "description": "NOMAD parser for DLPOLY.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/dl-poly"
          ],
          "mainfile_contents_re": "\\*\\*\\s+DL_POLY.+\\*\\*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:gromacs_parser_entry_point": {
          "id": "atomisticparsers:gromacs_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gromacs",
          "description": "NOMAD parser for GROMACS.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/gromacs"
          ],
          "mainfile_contents_re": "gmx mdrun, (VERSION|version)[\\s\\S]*Input Parameters:",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:gromos_parser_entry_point": {
          "id": "atomisticparsers:gromos_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gromos",
          "description": "NOMAD parser for GROMOS.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/gromos"
          ],
          "mainfile_contents_re": "Bugreports to http://www.gromos.net",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:gulp_parser_entry_point": {
          "id": "atomisticparsers:gulp_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gulp",
          "description": "NOMAD parser for GULP.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/gulp"
          ],
          "mainfile_contents_re": "\\s*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\s*\\s*\\*\\s*GENERAL UTILITY LATTICE PROGRAM\\s*\\*\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:h5md_parser_entry_point": {
          "id": "atomisticparsers:h5md_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/h5md",
          "description": "NOMAD parser for H5MD.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/h5md"
          ],
          "mainfile_name_re": "^.*\\.(h5|hdf5)$",
          "mainfile_mime_re": "(application/x-hdf)",
          "mainfile_alternative": false,
          "mainfile_contents_dict": {
            "__has_all_keys": [
              "h5md"
            ]
          },
          "supported_compressions": []
        },
        "atomisticparsers:lammps_parser_entry_point": {
          "id": "atomisticparsers:lammps_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/lammps",
          "description": "NOMAD parser for LAMMPS.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/lammps"
          ],
          "mainfile_contents_re": "^LAMMPS\\s+\\(.+\\)",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:libatoms_parser_entry_point": {
          "id": "atomisticparsers:libatoms_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/lib-atoms",
          "description": "NOMAD parser for LIBATOMS.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/lib-atoms"
          ],
          "mainfile_contents_re": "\\s*<GAP_params\\s",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:namd_parser_entry_point": {
          "id": "atomisticparsers:namd_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/namd",
          "description": "NOMAD parser for NAMD.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/namd"
          ],
          "mainfile_contents_re": "\\s*Info:\\s*NAMD\\s*[0-9.]+\\s*for\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "text/.*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:tinker_parser_entry_point": {
          "id": "atomisticparsers:tinker_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/tinker",
          "description": "NOMAD parser for TINKER.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/tinker"
          ],
          "mainfile_contents_re": "TINKER  ---  Software Tools for Molecular Design",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "atomisticparsers:xtb_parser_entry_point": {
          "id": "atomisticparsers:xtb_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/xtb",
          "description": "NOMAD parser for XTB.",
          "plugin_package": "atomisticparsers",
          "level": 0,
          "aliases": [
            "parsers/xtb"
          ],
          "mainfile_contents_re": "x T B\\s+\\|\\s+\\|\\s+=",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "bandstructurenormalizer:bandstructure_normalizer_entry_point": {
          "id": "bandstructurenormalizer:bandstructure_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "BandStructureNormalizer",
          "description": "Normalizer for the band structure data.",
          "plugin_package": "bandstructurenormalizer"
        },
        "databaseparsers:openkim_parser_entry_point": {
          "id": "databaseparsers:openkim_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/openkim",
          "description": "NOMAD parser for OPENKIM.",
          "plugin_package": "databaseparsers",
          "level": 0,
          "aliases": [
            "parsers/openkim"
          ],
          "mainfile_contents_re": "openkim|OPENKIM|OpenKIM",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "(application/json)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "dosnormalizer:dos_normalizer_entry_point": {
          "id": "dosnormalizer:dos_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "DosNormalizer",
          "description": "Normalizer for the DOS data.",
          "plugin_package": "dosnormalizer"
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
        "electronicparsers:abacus_parser_entry_point": {
          "id": "electronicparsers:abacus_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/abacus",
          "description": "NOMAD parser for ABACUS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/abacus"
          ],
          "mainfile_contents_re": "\\s*\\n\\s*WELCOME TO ABACUS",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:abinit_parser_entry_point": {
          "id": "electronicparsers:abinit_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/abinit",
          "description": "NOMAD parser for ABINIT.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/abinit"
          ],
          "mainfile_contents_re": "^\\n*\\.Version\\s*[0-9.]*\\s*of ABINIT\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:ams_parser_entry_point": {
          "id": "electronicparsers:ams_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/ams",
          "description": "NOMAD parser for AMS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/ams"
          ],
          "mainfile_contents_re": "\\* +\\| +A M S +\\| +\\*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:atk_parser_entry_point": {
          "id": "electronicparsers:atk_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/atk",
          "description": "NOMAD parser for ATK.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/atk"
          ],
          "mainfile_name_re": "^.*\\.nc",
          "mainfile_mime_re": "application/octet-stream",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:bigdft_parser_entry_point": {
          "id": "electronicparsers:bigdft_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/bigdft",
          "description": "NOMAD parser for BIGDFT.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/bigdft"
          ],
          "mainfile_contents_re": "\\|_____\\|__:__\\|__:__\\|_____\\|_____\\|___ BBBBB          i     g         g\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:castep_parser_entry_point": {
          "id": "electronicparsers:castep_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/castep",
          "description": "NOMAD parser for CASTEP.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/castep"
          ],
          "mainfile_contents_re": "\\s\\|\\s*CCC\\s*AA\\s*SSS\\s*TTTTT\\s*EEEEE\\s*PPPP\\s*\\|\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:charmm_parser_entry_point": {
          "id": "electronicparsers:charmm_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/charmm",
          "description": "NOMAD parser for CHARMM.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/charmm"
          ],
          "mainfile_contents_re": "\\s*Chemistry\\s*at\\s*HARvard\\s*Macromolecular\\s*Mechanics\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "text/.*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:cp2k_parser_entry_point": {
          "id": "electronicparsers:cp2k_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/cp2k",
          "description": "NOMAD parser for CP2K.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/cp2k"
          ],
          "mainfile_contents_re": "\\*\\*\\*\\* \\*\\*\\*\\* \\*\\*\\*\\*\\*\\*  \\*\\*  PROGRAM STARTED AT\\s.*\\n \\*\\*\\*\\*\\* \\*\\* \\*\\*\\*  \\*\\*\\* \\*\\*   PROGRAM STARTED ON\\s*.*\\n \\*\\*    \\*\\*\\*\\*   \\*\\*\\*\\*\\*\\*    PROGRAM STARTED BY .*\\n \\*\\*\\*\\*\\* \\*\\*    \\*\\* \\*\\* \\*\\*   PROGRAM PROCESS ID .*\\n  \\*\\*\\*\\* \\*\\*  \\*\\*\\*\\*\\*\\*\\*  \\*\\*  PROGRAM STARTED IN .*\\n",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:cpmd_parser_entry_point": {
          "id": "electronicparsers:cpmd_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/cpmd",
          "description": "NOMAD parser for CPMD.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/cpmd"
          ],
          "mainfile_contents_re": "\\*\\*\\*       \\*\\*   \\*\\*\\*  \\*\\* \\*\\*\\*\\* \\*\\*  \\*\\*   \\*\\*\\*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:crystal_parser_entry_point": {
          "id": "electronicparsers:crystal_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/crystal",
          "description": "NOMAD parser for CRYSTAL.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/crystal"
          ],
          "mainfile_contents_re": "(\\r?\\n \\*\\s+CRYSTAL[\\d]+\\s+\\*\\r?\\n \\*\\s*[a-zA-Z]+ : \\d+[\\.\\d+]*)",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:dmol3_parser_entry_point": {
          "id": "electronicparsers:dmol3_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/dmol",
          "description": "NOMAD parser for DMOL3.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/dmol"
          ],
          "mainfile_contents_re": "Materials Studio DMol\\^3",
          "mainfile_name_re": ".*\\.outmol",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:edmft_parser_entry_point": {
          "id": "electronicparsers:edmft_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/edmft",
          "description": "NOMAD parser for EDMFT.",
          "plugin_package": "electronicparsers",
          "level": 2,
          "aliases": [
            "parsers/edmft"
          ],
          "mainfile_contents_re": "\\-\\-\\-\\s*Preparing GF calculation\\s*\\-\\-\\-",
          "mainfile_name_re": "^.*\\.(out)$",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:elk_parser_entry_point": {
          "id": "electronicparsers:elk_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/elk",
          "description": "NOMAD parser for ELK.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/elk"
          ],
          "mainfile_contents_re": "\\| Elk version [0-9.a-zA-Z]+ started \\|",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:exciting_parser_entry_point": {
          "id": "electronicparsers:exciting_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/exciting",
          "description": "NOMAD parser for EXCITING.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/exciting"
          ],
          "mainfile_contents_re": "EXCITING.*started[\\s\\S]+?All units are atomic ",
          "mainfile_name_re": "^.*.OUT(\\.[^/]*)?$",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:fhiaims_parser_entry_point": {
          "id": "electronicparsers:fhiaims_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/fhi-aims",
          "description": "NOMAD parser for FHIAIMS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/fhi-aims"
          ],
          "mainfile_contents_re": "^(.*\\n)*?\\s*Invoking FHI-aims \\.\\.\\.",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:fleur_parser_entry_point": {
          "id": "electronicparsers:fleur_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/fleur",
          "description": "NOMAD parser for FLEUR.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/fleur"
          ],
          "mainfile_contents_re": "This output is generated by fleur.|\\<fleurOutput",
          "mainfile_name_re": ".*[^/]*\\.xml[^/]*",
          "mainfile_mime_re": "(application/.*)|(text/.*)",
          "mainfile_alternative": true,
          "supported_compressions": []
        },
        "electronicparsers:fplo_parser_entry_point": {
          "id": "electronicparsers:fplo_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/fplo",
          "description": "NOMAD parser for FPLO.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/fplo"
          ],
          "mainfile_contents_re": "\\s*\\|\\s*FULL-POTENTIAL LOCAL-ORBITAL MINIMUM BASIS BANDSTRUCTURE CODE\\s*\\|\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "text/.*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:gamess_parser_entry_point": {
          "id": "electronicparsers:gamess_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gamess",
          "description": "NOMAD parser for GAMESS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/gamess"
          ],
          "mainfile_contents_re": "\\s*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\**\\s*\\s*\\*\\s*GAMESS VERSION =\\s*(.*)\\*\\s*\\s*\\*\\s*FROM IOWA STATE UNIVERSITY\\s*\\*\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:gaussian_parser_entry_point": {
          "id": "electronicparsers:gaussian_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gaussian",
          "description": "NOMAD parser for GAUSSIAN.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/gaussian"
          ],
          "mainfile_contents_re": "\\s*Cite this work as:\\s*Gaussian [0-9]+, Revision [A-Za-z0-9\\.]*,",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:gpaw_parser_entry_point": {
          "id": "electronicparsers:gpaw_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/gpaw",
          "description": "NOMAD parser for GPAW.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/gpaw"
          ],
          "mainfile_name_re": "^.*\\.(gpw2|gpw)$",
          "mainfile_mime_re": "application/(x-tar|octet-stream)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:magres_parser_entry_point": {
          "id": "electronicparsers:magres_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/magres",
          "description": "NOMAD parser for MAGRES.",
          "plugin_package": "electronicparsers",
          "level": 1,
          "aliases": [
            "parsers/magres"
          ],
          "mainfile_contents_re": "\\$magres-abinitio-v(\\d\\.)+",
          "mainfile_name_re": "^.*\\.magres",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:molcas_parser_entry_point": {
          "id": "electronicparsers:molcas_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/molcas",
          "description": "NOMAD parser for MOLCAS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/molcas"
          ],
          "mainfile_contents_re": "M O L C A S",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:mopac_parser_entry_point": {
          "id": "electronicparsers:mopac_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/mopac",
          "description": "NOMAD parser for MOPAC.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/mopac"
          ],
          "mainfile_contents_re": "\\s*\\*\\*\\s*MOPAC\\s*([0-9a-zA-Z\\.]*)\\s*\\*\\*\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "text/.*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:nwchem_parser_entry_point": {
          "id": "electronicparsers:nwchem_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/nwchem",
          "description": "NOMAD parser for NWCHEM.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/nwchem"
          ],
          "mainfile_contents_re": "Northwest Computational Chemistry Package \\(NWChem\\) (\\d+\\.)+\\d+",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:ocean_parser_entry_point": {
          "id": "electronicparsers:ocean_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/ocean",
          "description": "NOMAD parser for OCEAN.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/ocean"
          ],
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "(application/.*)|(text/.*)",
          "mainfile_alternative": false,
          "mainfile_contents_dict": {
            "__has_all_keys": [
              "bse",
              "structure",
              "screen",
              "calc"
            ]
          },
          "supported_compressions": []
        },
        "electronicparsers:octopus_parser_entry_point": {
          "id": "electronicparsers:octopus_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/octopus",
          "description": "NOMAD parser for OCTOPUS.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/octopus"
          ],
          "mainfile_contents_re": "\\|0\\) ~ \\(0\\) \\|",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:onetep_parser_entry_point": {
          "id": "electronicparsers:onetep_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/onetep",
          "description": "NOMAD parser for ONETEP.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/onetep"
          ],
          "mainfile_contents_re": "####### #     # ####### ####### ####### ######",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:openmx_parser_entry_point": {
          "id": "electronicparsers:openmx_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/openmx",
          "description": "NOMAD parser for OPENMX.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/openmx"
          ],
          "mainfile_contents_re": "^\\*{59}\\s+\\*{59}\\s+This calculation was performed by OpenMX",
          "mainfile_name_re": ".*\\.out$",
          "mainfile_mime_re": "(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:orca_parser_entry_point": {
          "id": "electronicparsers:orca_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/orca",
          "description": "NOMAD parser for ORCA.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/orca"
          ],
          "mainfile_contents_re": "\\s+\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\**\\s*\\s+\\* O   R   C   A \\*\\s*\\s+\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\*\\**\\s*\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:psi4_parser_entry_point": {
          "id": "electronicparsers:psi4_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/psi4",
          "description": "NOMAD parser for PSI4.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/psi4"
          ],
          "mainfile_contents_re": "Psi4: An Open-Source Ab Initio Electronic Structure Package",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:qball_parser_entry_point": {
          "id": "electronicparsers:qball_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/qball",
          "description": "NOMAD parser for QBALL.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/qball"
          ],
          "mainfile_contents_re": "qball",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": [
            "gz",
            "bz2",
            "xz"
          ]
        },
        "electronicparsers:qbox_parser_entry_point": {
          "id": "electronicparsers:qbox_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/qbox",
          "description": "NOMAD parser for QBOX.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/qbox"
          ],
          "mainfile_contents_re": "http://qboxcode.org",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "(application/xml)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:quantumespresso_parser_entry_point": {
          "id": "electronicparsers:quantumespresso_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/quantumespresso",
          "description": "NOMAD parser for QUANTUMESPRESSO.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/quantumespresso"
          ],
          "mainfile_contents_re": "(Program PWSCF.*starts)|(Current dimensions of program PWSCF are)",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": [
            "gz",
            "bz2",
            "xz"
          ]
        },
        "electronicparsers:siesta_parser_entry_point": {
          "id": "electronicparsers:siesta_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/siesta",
          "description": "NOMAD parser for SIESTA.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/siesta"
          ],
          "mainfile_contents_re": "(Siesta Version: siesta-|SIESTA [0-9]\\.[0-9]\\.[0-9])|(\\*\\s*WELCOME TO SIESTA\\s*\\*)",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:soliddmft_parser_entry_point": {
          "id": "electronicparsers:soliddmft_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/soliddmft",
          "description": "NOMAD parser for SOLIDDMFT.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/soliddmft"
          ],
          "mainfile_name_re": "^.*\\.(h5|hdf5)$",
          "mainfile_mime_re": "(application/x-hdf)",
          "mainfile_alternative": false,
          "mainfile_contents_dict": {
            "__has_all_keys": [
              "dft_input",
              "DMFT_input",
              "DMFT_results"
            ]
          },
          "supported_compressions": []
        },
        "electronicparsers:tbstudio_parser_entry_point": {
          "id": "electronicparsers:tbstudio_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/tbstudio",
          "description": "NOMAD parser for TBSTUDIO.",
          "plugin_package": "electronicparsers",
          "level": 1,
          "aliases": [
            "parsers/tbstudio"
          ],
          "mainfile_contents_re": "\"ApplicationFullName\": \"Tight Binding Studio\"",
          "mainfile_name_re": ".*\\.tbm",
          "mainfile_mime_re": "(application/json)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:turbomole_parser_entry_point": {
          "id": "electronicparsers:turbomole_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/turbomole",
          "description": "NOMAD parser for TURBOMOLE.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/turbomole"
          ],
          "mainfile_contents_re": "Copyright \\(C\\) [0-9]+ TURBOMOLE GmbH, Karlsruhe",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:vasp_parser_entry_point": {
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
        },
        "electronicparsers:w2dynamics_parser_entry_point": {
          "id": "electronicparsers:w2dynamics_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/w2dynamics",
          "description": "NOMAD parser for W2DYNAMICS.",
          "plugin_package": "electronicparsers",
          "level": 2,
          "aliases": [
            "parsers/w2dynamics"
          ],
          "mainfile_name_re": "^.*\\.(h5|hdf5)$",
          "mainfile_mime_re": "(application/x-hdf)",
          "mainfile_alternative": false,
          "mainfile_contents_dict": {
            "__has_all_keys": [
              ".axes",
              ".config",
              ".quantities"
            ]
          },
          "supported_compressions": []
        },
        "electronicparsers:wannier90_parser_entry_point": {
          "id": "electronicparsers:wannier90_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/wannier90",
          "description": "NOMAD parser for WANNIER90.",
          "plugin_package": "electronicparsers",
          "level": 1,
          "aliases": [
            "parsers/wannier90"
          ],
          "mainfile_contents_re": "\\|\\s*WANNIER90\\s*\\|",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "electronicparsers:wien2k_parser_entry_point": {
          "id": "electronicparsers:wien2k_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/wien2k",
          "description": "NOMAD parser for WIEN2K.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/wien2k"
          ],
          "mainfile_contents_re": "\\s*---------\\s*:ITE[0-9]+:\\s*[0-9]+\\.\\s*ITERATION\\s*---------",
          "mainfile_name_re": ".*\\.scf$",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": true,
          "supported_compressions": []
        },
        "electronicparsers:yambo_parser_entry_point": {
          "id": "electronicparsers:yambo_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/yambo",
          "description": "NOMAD parser for YAMBO.",
          "plugin_package": "electronicparsers",
          "level": 0,
          "aliases": [
            "parsers/yambo"
          ],
          "mainfile_contents_re": "Build.+\\s+http://www\\.yambo-code\\.org",
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
        "example_uploads/3_fairmat_examples/1_ellips": {
          "id": "example_uploads/3_fairmat_examples/1_ellips",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store and standardize ellipsometry data.\nIt shows the generation of a NeXus file according to the [NXellipsometry](https://manual.nexusformat.org/classes/contributed_definitions/NXellipsometry.html#nxellipsometry)\napplication definition and a successive analysis of a SiO2 on Si Psi/Delta measurement.\n",
          "category": "FAIRmat examples",
          "title": "Ellipsometry",
          "resources": [
            {
              "path": "ellips/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/2_mpes": {
          "id": "example_uploads/3_fairmat_examples/2_mpes",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store and standardize multi photoemission spectroscopy (MPES) experimental data. It contains three major examples:\n\n  - Taking a pre-binned file, here stored in a h5 file, and converting it into the standardized MPES NeXus format.\n    There exists a [NeXus application definition for MPES](https://manual.nexusformat.org/classes/contributed_definitions/NXmpes.html#nxmpes) which details the internal structure of such a file.\n  - Binning of raw data (see [here](https://www.nature.com/articles/s41597-020-00769-8) for additional resources) into a h5 file and consecutively generating a NeXus file from it.\n  - An analysis example using data in the NeXus format and employing the [pyARPES](https://github.com/chstan/arpes) analysis tool to reproduce the main findings of [this paper](https://arxiv.org/pdf/2107.07158.pdf).\n",
          "category": "FAIRmat examples",
          "title": "Mpes",
          "resources": [
            {
              "path": "mpes/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/3_xps": {
          "id": "example_uploads/3_fairmat_examples/3_xps",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store and standardize XPS data.\nIt shows the generation of a NeXus file according to the\n[NXmpes](https://manual.nexusformat.org/classes/contributed_definitions/NXmpes.html#nxmpes)\napplication definition and a successive analysis of an example data set.\n",
          "category": "FAIRmat examples",
          "title": "XPS",
          "resources": [
            {
              "path": "xps/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/4_sts": {
          "id": "example_uploads/3_fairmat_examples/4_sts",
          "entry_point_type": "example_upload",
          "description": "This example is for two types of experiments: Scanning Tunneling Microscopy (STM) and Scanning Tunneling Spectroscopy (STS) from Scanning Probe Microscopy.\nIt can transform the data from files generated by a the nanonis software into the NeXus application definition NXsts.\nThe example contains data files from the two specific nanonis software versions generic 5e and generic 4.5.\n",
          "category": "FAIRmat examples",
          "title": "STS",
          "resources": [
            {
              "path": "sts/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/5_stm": {
          "id": "example_uploads/3_fairmat_examples/5_stm",
          "entry_point_type": "example_upload",
          "description": "This example is for two types of experiments: Scanning Tunneling Microscopy (STM) and Scanning Tunneling Spectroscopy (STS) from Scanning Probe Microscopy.\nIt can transform the data from files generated by a the nanonis software into the NeXus application definition NXsts.\nThe example contains data files from the two specific nanonis software versions generic 5e and generic 4.5.\n",
          "category": "FAIRmat examples",
          "title": "STM",
          "resources": [
            {
              "path": "stm/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/6_apm": {
          "id": "example_uploads/3_fairmat_examples/6_apm",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store and standardize atom probe data.\nIt shows the generation of a NeXus file according to the\n[NXapm](https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXapm.html#nxapm)\napplication definition and a successive analysis of an example data set.\nThe example contains a small atom probe dataset from an experiment with a LEAP instrument to get you started\nand keep the size of your NOMAD installation small. Ones started, we recommend to change the respective\ninput file in the NOMAD Oasis ELN to run the example with your own datasets.\n",
          "category": "FAIRmat examples",
          "title": "Atom Probe Microscopy",
          "resources": [
            {
              "path": "apm/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/7_em": {
          "id": "example_uploads/3_fairmat_examples/7_em",
          "entry_point_type": "example_upload",
          "description": "This example presents the capabilities of the NOMAD platform to store and standardize electron microscopy.\nIt shows the generation of a NeXus file according to the\n[NXem](https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXem.html#nxem)\napplication definition.\nThe example contains a small set of electron microscopy datasets to get started and keep the size of your\nNOMAD installation small. Ones started, we recommend to change the respective input file in the NOMAD Oasis\nELN to run the example with your own datasets.\n",
          "category": "FAIRmat examples",
          "title": "Electron Microscopy",
          "resources": [
            {
              "path": "em/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "example_uploads/3_fairmat_examples/8_iv_temp": {
          "id": "example_uploads/3_fairmat_examples/8_iv_temp",
          "entry_point_type": "example_upload",
          "description": "This example shows users how to take data from a Python framework and map it out to a Nexus application definition for IV Temperature measurements, [NXiv_temp](https://fairmat-experimental.github.io/nexus-fairmat-proposal/1c3806dba40111f36a16d0205cc39a5b7d52ca2e/classes/contributed_definitions/NXiv_temp.html#nxiv-temp).\nWe use the Nexus ELN features of Nomad to generate a Nexus file.\n",
          "category": "FAIRmat examples",
          "title": "Sensor Scan - IV Temperature Curve",
          "resources": [
            {
              "path": "iv_temp/*",
              "target": ""
            }
          ],
          "from_examples_directory": true
        },
        "nomad_aitoolkit.apps:aitoolkit": {
          "id": "nomad_aitoolkit.apps:aitoolkit",
          "entry_point_type": "app",
          "name": "AI Toolkit notebooks",
          "description": "App defined using the new plugin mechanism.",
          "plugin_package": "nomad_aitoolkit",
          "app": {
            "label": "AI Toolkit Notebooks",
            "path": "ai-toolkit",
            "resource": "entries",
            "category": "Tools",
            "description": "Search AI toolkit notebooks",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "entry_id",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "entry_type",
                "selected": false,
                "title": "Entry type",
                "label": "Entry type",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "title": "Authors",
                "label": "Authors",
                "align": "left"
              },
              {
                "search_quantity": "data.name#nomad_aitoolkit.schema.AIToolkitNotebook",
                "selected": true,
                "title": "Name",
                "label": "Name",
                "align": "left"
              },
              {
                "search_quantity": "data.category#nomad_aitoolkit.schema.AIToolkitNotebook",
                "selected": true,
                "title": "Category",
                "label": "Category",
                "align": "left"
              },
              {
                "search_quantity": "data.platform#nomad_aitoolkit.schema.AIToolkitNotebook",
                "selected": false,
                "title": "Platform",
                "label": "Platform",
                "align": "left"
              },
              {
                "search_quantity": "data.date#nomad_aitoolkit.schema.AIToolkitNotebook",
                "selected": true,
                "title": "Last update",
                "label": "Last update",
                "align": "left",
                "format": {
                  "decimals": 3,
                  "mode": "date"
                }
              }
            ],
            "rows": {
              "actions": {
                "options": {
                  "launch": {
                    "description": "Launch Jupyter notebook",
                    "type": "url",
                    "path": "data.references[?kind=='hub'].uri"
                  }
                },
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
                  "title": "Notebooks",
                  "type": "menu",
                  "size": "xl",
                  "indentation": 0,
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
                  "title": "Author",
                  "type": "menu",
                  "size": "lg",
                  "indentation": 0,
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
                  "title": "Visibility / IDs",
                  "type": "menu",
                  "size": "md",
                  "indentation": 0,
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
                }
              ]
            },
            "search_quantities": {
              "include": [
                "*#nomad_aitoolkit.schema.AIToolkitNotebook"
              ]
            },
            "dashboard": {
              "widgets": [
                {
                  "search_quantity": "data.category#nomad_aitoolkit.schema.AIToolkitNotebook",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "layout": {
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "data.methods.name#nomad_aitoolkit.schema.AIToolkitNotebook",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "title": "Methods",
                  "layout": {
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "data.systems.name#nomad_aitoolkit.schema.AIToolkitNotebook",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "title": "Systems",
                  "layout": {
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                }
              ]
            },
            "filters_locked": {
              "section_defs.definition_qualified_name": [
                "nomad_aitoolkit.schema.AIToolkitNotebook"
              ]
            }
          }
        },
        "nomad_aitoolkit:aitoolkit": {
          "id": "nomad_aitoolkit:aitoolkit",
          "entry_point_type": "schema_package",
          "name": "AIToolkit",
          "description": "Describes the basic schemas for AI Toolkit notebooks.",
          "plugin_package": "nomad_aitoolkit"
        },
        "nomad_external_eln_integrations.example_uploads:elabftwexample": {
          "id": "nomad_external_eln_integrations.example_uploads:elabftwexample",
          "entry_point_type": "example_upload",
          "description": "Thi example contains an ELabFTW Experiment exported into .ELN file format.",
          "plugin_package": "nomad_external_eln_integrations",
          "category": "Examples",
          "title": "ELN File Format Example",
          "resources": [
            {
              "path": "example_uploads/files",
              "target": ""
            }
          ],
          "path": "example_uploads/files",
          "from_examples_directory": false
        },
        "nomad_external_eln_integrations.parsers:chemotion_parser_entry_point": {
          "id": "nomad_external_eln_integrations.parsers:chemotion_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/chemotion",
          "description": "NOMAD parser for chemotion data.",
          "plugin_package": "nomad_external_eln_integrations",
          "level": 0,
          "aliases": [
            "parsers/chemotion"
          ],
          "mainfile_name_re": "^.*export.json$",
          "mainfile_mime_re": "application/json|text/plain",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "nomad_external_eln_integrations.parsers:elabftw_parser_entry_point": {
          "id": "nomad_external_eln_integrations.parsers:elabftw_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/elabftw",
          "description": "NOMAD parser for eln file formats.",
          "plugin_package": "nomad_external_eln_integrations",
          "level": 0,
          "aliases": [
            "parsers/elabftw"
          ],
          "mainfile_name_re": ".*ro-crate-metadata.json$",
          "mainfile_mime_re": "text/plain|application/json|text/html",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "nomad_external_eln_integrations.schema_packages.elabftw:elabftw_schema": {
          "id": "nomad_external_eln_integrations.schema_packages.elabftw:elabftw_schema",
          "entry_point_type": "schema_package",
          "name": "elabftw",
          "description": "NOMAD integration for mapping elabftw data to NOMAD schema",
          "plugin_package": "nomad_external_eln_integrations"
        },
        "nomad_external_eln_integrations.schema_packages.labfolder:labfolder_schema": {
          "id": "nomad_external_eln_integrations.schema_packages.labfolder:labfolder_schema",
          "entry_point_type": "schema_package",
          "name": "labfolder",
          "description": "NOMAD integration for mapping Labfolder data to NOMAD schema",
          "plugin_package": "nomad_external_eln_integrations"
        },
        "nomad_external_eln_integrations.schema_packages.openbis:openbis_schema": {
          "id": "nomad_external_eln_integrations.schema_packages.openbis:openbis_schema",
          "entry_point_type": "schema_package",
          "name": "openbis",
          "description": "NOMAD integration for mapping Openbis data to NOMAD schema",
          "plugin_package": "nomad_external_eln_integrations"
        },
        "nomad_porous_materials.apps:mofapp": {
          "id": "nomad_porous_materials.apps:mofapp",
          "entry_point_type": "app",
          "name": "MOF",
          "description": "App defined using the new plugin mechanism.",
          "plugin_package": "nomad_porous_materials",
          "app": {
            "label": "Metal-Organic Frameworks",
            "path": "mofs",
            "resource": "entries",
            "category": "Use Cases",
            "description": "Search metal-organic frameworks (MOFs)",
            "readme": "\n            This page allows you to search **metal-organic framework\n            (MOF) data** within NOMAD. The filter menu on the left\n            and the shown default columns are specifically designed\n            for MOF exploration. The dashboard directly shows useful\n            interactive statistics about the data.",
            "pagination": {
              "order_by": "upload_create_time",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "results.material.chemical_formula_iupac",
                "selected": true,
                "title": "Formula",
                "label": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "mainfile",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "upload_create_time",
                "selected": false,
                "title": "Upload time",
                "label": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "comment",
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
                "label": "Access",
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
                  "size": "md",
                  "indentation": 0
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
                  "title": "Structure",
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
                  "title": "Electronic Properties",
                  "type": "menu",
                  "size": "md",
                  "indentation": 0,
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
                  "title": "Author / Origin / Dataset",
                  "type": "menu",
                  "size": "lg",
                  "indentation": 0,
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
                  "indentation": 0,
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
                  "indentation": 0,
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
                  "type": "periodic_table",
                  "search_quantity": "results.material.elements",
                  "scale": "linear",
                  "layout": {
                    "lg": {
                      "h": 9,
                      "w": 15,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 8,
                      "w": 11,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 9,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 9,
                      "w": 19,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 10,
                      "w": 25,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.material.topology.sbu_type",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "showinput": true,
                  "title": "SBU type",
                  "layout": {
                    "lg": {
                      "h": 9,
                      "w": 9,
                      "x": 15,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 8,
                      "w": 7,
                      "x": 11,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 3,
                      "x": 9,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 9,
                      "w": 11,
                      "x": 19,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 10,
                      "w": 11,
                      "x": 25,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": true,
                  "showinput": true,
                  "x": {
                    "search_quantity": "results.material.topology.pore_limiting_diameter",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "linear"
                  },
                  "autorange": false,
                  "n_bins": 30,
                  "nbins": 30,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 12,
                      "x": 0,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 9,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 3,
                      "w": 6,
                      "x": 0,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 5,
                      "w": 15,
                      "x": 0,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 19,
                      "x": 0,
                      "y": 10,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": true,
                  "showinput": true,
                  "x": {
                    "search_quantity": "results.material.topology.largest_cavity_diameter",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "linear"
                  },
                  "autorange": false,
                  "n_bins": 30,
                  "nbins": 30,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 12,
                      "x": 0,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 9,
                      "x": 9,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 3,
                      "w": 6,
                      "x": 6,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 5,
                      "w": 15,
                      "x": 0,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 17,
                      "x": 19,
                      "y": 10,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": true,
                  "showinput": true,
                  "x": {
                    "search_quantity": "results.material.topology.accessible_surface_area",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "linear"
                  },
                  "autorange": false,
                  "n_bins": 30,
                  "nbins": 30,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 12,
                      "x": 11,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 9,
                      "x": 0,
                      "y": 12,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 3,
                      "w": 6,
                      "x": 0,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 5,
                      "w": 15,
                      "x": 15,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 19,
                      "x": 0,
                      "y": 16,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": true,
                  "showinput": true,
                  "x": {
                    "search_quantity": "results.material.topology.void_fraction",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "linear"
                  },
                  "autorange": false,
                  "n_bins": 30,
                  "nbins": 30,
                  "layout": {
                    "lg": {
                      "h": 5,
                      "w": 12,
                      "x": 11,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 9,
                      "x": 9,
                      "y": 12,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 3,
                      "w": 6,
                      "x": 6,
                      "y": 9,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 5,
                      "w": 15,
                      "x": 15,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 17,
                      "x": 19,
                      "y": 16,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                }
              ]
            },
            "filters_locked": {
              "results.material.topology.label": "MOF"
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "nomad_porous_materials.normalizers:porositynormalizer": {
          "id": "nomad_porous_materials.normalizers:porositynormalizer",
          "entry_point_type": "normalizer",
          "name": "PorosityNormalizer",
          "description": "\n        Normalizer that automatically extracts properties from porous\n        materials.\n    ",
          "plugin_package": "nomad_porous_materials"
        },
        "nomad_simulations.schema_packages:nomad_simulations_plugin": {
          "id": "nomad_simulations.schema_packages:nomad_simulations_plugin",
          "entry_point_type": "schema_package",
          "name": "NOMADSimulations",
          "description": "A NOMAD plugin for FAIR schemas for simulation data.",
          "plugin_package": "nomad_simulations"
        },
        "perovskite_solar_cell_database.apps:solar_cells": {
          "id": "perovskite_solar_cell_database.apps:solar_cells",
          "entry_point_type": "app",
          "name": "Solar Cells",
          "description": "\n      This app allows you to search **solar cell data** within NOMAD. The filter\n      menu on the left and the shown default columns are specifically designed\n      for solar cell exploration. The dashboard directly shows useful\n      interactive statistics about the data.\n    ",
          "plugin_package": "perovskite_solar_cell_database",
          "app": {
            "label": "Solar Cells",
            "path": "solarcells",
            "resource": "entries",
            "category": "Use Cases",
            "description": "Search solar cells",
            "readme": "This page allows you to search **solar cell data** within NOMAD. The filter menu on the left and the shown default columns are specifically designed for solar cell exploration. The dashboard directly shows useful interactive statistics about the data.",
            "pagination": {
              "order_by": "results.properties.optoelectronic.solar_cell.efficiency",
              "order": "desc",
              "page_size": 20
            },
            "columns": [
              {
                "search_quantity": "results.material.chemical_formula_descriptive",
                "selected": true,
                "title": "Descriptive formula",
                "label": "Descriptive formula",
                "align": "left"
              },
              {
                "search_quantity": "results.properties.optoelectronic.solar_cell.efficiency",
                "selected": true,
                "title": "Efficiency (%)",
                "label": "Efficiency (%)",
                "align": "left",
                "format": {
                  "decimals": 2,
                  "mode": "standard"
                }
              },
              {
                "search_quantity": "results.properties.optoelectronic.solar_cell.open_circuit_voltage",
                "selected": true,
                "align": "left",
                "unit": "V",
                "format": {
                  "decimals": 3,
                  "mode": "standard"
                }
              },
              {
                "search_quantity": "results.properties.optoelectronic.solar_cell.short_circuit_current_density",
                "selected": true,
                "align": "left",
                "unit": "A/m**2",
                "format": {
                  "decimals": 3,
                  "mode": "standard"
                }
              },
              {
                "search_quantity": "results.properties.optoelectronic.solar_cell.fill_factor",
                "selected": true,
                "align": "left",
                "format": {
                  "decimals": 3,
                  "mode": "standard"
                }
              },
              {
                "search_quantity": "references",
                "selected": true,
                "align": "left"
              },
              {
                "search_quantity": "results.material.chemical_formula_hill",
                "selected": false,
                "title": "Formula",
                "label": "Formula",
                "align": "left"
              },
              {
                "search_quantity": "results.material.structural_type",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "results.properties.optoelectronic.solar_cell.illumination_intensity",
                "selected": false,
                "title": "Illum. intensity",
                "label": "Illum. intensity",
                "align": "left",
                "unit": "W/m**2",
                "format": {
                  "decimals": 3,
                  "mode": "standard"
                }
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
                "search_quantity": "entry_name",
                "selected": false,
                "title": "Name",
                "label": "Name",
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
                "search_quantity": "upload_create_time",
                "selected": false,
                "title": "Upload time",
                "label": "Upload time",
                "align": "left"
              },
              {
                "search_quantity": "authors",
                "selected": false,
                "align": "left"
              },
              {
                "search_quantity": "comment",
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
                "label": "Access",
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
                  "title": "Absorber Material",
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
                  "title": "Electronic Properties",
                  "type": "menu",
                  "size": "md",
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
                  "title": "Solar Cell Properties",
                  "type": "menu",
                  "size": "md",
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
              "include": [
                "*#perovskite_solar_cell_database.schema.PerovskiteSolarCell"
              ],
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
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 0,
                      "minH": 8,
                      "minW": 12
                    },
                    "md": {
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 0,
                      "minH": 8,
                      "minW": 12
                    },
                    "sm": {
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 16,
                      "minH": 8,
                      "minW": 12
                    },
                    "xl": {
                      "h": 8,
                      "w": 12,
                      "x": 0,
                      "y": 0,
                      "minH": 8,
                      "minW": 12
                    },
                    "xxl": {
                      "h": 8,
                      "w": 13,
                      "x": 0,
                      "y": 0,
                      "minH": 8,
                      "minW": 12
                    }
                  }
                },
                {
                  "type": "scatterplot",
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 12,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 9,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 0,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 8,
                      "w": 9,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 8,
                      "w": 12,
                      "x": 24,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  },
                  "x": {
                    "search_quantity": "results.properties.optoelectronic.solar_cell.open_circuit_voltage",
                    "scale": "linear"
                  },
                  "y": {
                    "title": "Efficiency (%)",
                    "search_quantity": "results.properties.optoelectronic.solar_cell.efficiency",
                    "scale": "linear"
                  },
                  "markers": {
                    "color": {
                      "unit": "mA/cm^2",
                      "search_quantity": "results.properties.optoelectronic.solar_cell.short_circuit_current_density",
                      "scale": "linear"
                    }
                  },
                  "size": 1000,
                  "drag_mode": "zoom",
                  "autorange": true
                },
                {
                  "type": "scatterplot",
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 12,
                      "x": 0,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 9,
                      "x": 9,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 6,
                      "x": 6,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 8,
                      "w": 9,
                      "x": 21,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 8,
                      "w": 11,
                      "x": 13,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    }
                  },
                  "x": {
                    "search_quantity": "results.properties.optoelectronic.solar_cell.open_circuit_voltage",
                    "scale": "linear"
                  },
                  "y": {
                    "title": "Efficiency (%)",
                    "search_quantity": "results.properties.optoelectronic.solar_cell.efficiency",
                    "scale": "linear"
                  },
                  "markers": {
                    "color": {
                      "search_quantity": "results.properties.optoelectronic.solar_cell.device_architecture",
                      "scale": "linear"
                    }
                  },
                  "size": 1000,
                  "drag_mode": "zoom",
                  "autorange": true
                },
                {
                  "search_quantity": "results.properties.optoelectronic.solar_cell.device_stack",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "showinput": true,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 6,
                      "x": 12,
                      "y": 4,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 6,
                      "w": 4,
                      "x": 0,
                      "y": 10,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 14,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 14,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": true,
                  "showinput": true,
                  "x": {
                    "search_quantity": "results.properties.optoelectronic.solar_cell.illumination_intensity",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "1/4"
                  },
                  "autorange": true,
                  "n_bins": 30,
                  "nbins": 30,
                  "layout": {
                    "lg": {
                      "h": 4,
                      "w": 12,
                      "x": 12,
                      "y": 12,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 3,
                      "w": 8,
                      "x": 10,
                      "y": 17,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 3,
                      "w": 8,
                      "x": 4,
                      "y": 13,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 3,
                      "w": 8,
                      "x": 0,
                      "y": 11,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 3,
                      "w": 8,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.properties.optoelectronic.solar_cell.absorber_fabrication",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "showinput": true,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 18,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 4,
                      "w": 6,
                      "x": 12,
                      "y": 0,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 4,
                      "x": 0,
                      "y": 5,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 6,
                      "x": 8,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 8,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "type": "histogram",
                  "show_input": false,
                  "showinput": false,
                  "x": {
                    "search_quantity": "results.properties.electronic.band_structure_electronic.band_gap.value",
                    "scale": "linear"
                  },
                  "y": {
                    "scale": "1/4"
                  },
                  "autorange": false,
                  "n_bins": 30,
                  "nbins": 30,
                  "title": "Band gap",
                  "layout": {
                    "lg": {
                      "h": 4,
                      "w": 12,
                      "x": 12,
                      "y": 16,
                      "minH": 3,
                      "minW": 8
                    },
                    "md": {
                      "h": 3,
                      "w": 8,
                      "x": 10,
                      "y": 14,
                      "minH": 3,
                      "minW": 8
                    },
                    "sm": {
                      "h": 3,
                      "w": 8,
                      "x": 4,
                      "y": 10,
                      "minH": 3,
                      "minW": 8
                    },
                    "xl": {
                      "h": 3,
                      "w": 8,
                      "x": 0,
                      "y": 8,
                      "minH": 3,
                      "minW": 8
                    },
                    "xxl": {
                      "h": 3,
                      "w": 8,
                      "x": 0,
                      "y": 11,
                      "minH": 3,
                      "minW": 8
                    }
                  }
                },
                {
                  "search_quantity": "results.properties.optoelectronic.solar_cell.electron_transport_layer",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "showinput": true,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 18,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 5,
                      "x": 0,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 4,
                      "x": 4,
                      "y": 5,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 5,
                      "x": 25,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 20,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                },
                {
                  "search_quantity": "results.properties.optoelectronic.solar_cell.hole_transport_layer",
                  "type": "terms",
                  "scale": "linear",
                  "show_input": true,
                  "showinput": true,
                  "layout": {
                    "lg": {
                      "h": 6,
                      "w": 6,
                      "x": 12,
                      "y": 6,
                      "minH": 3,
                      "minW": 3
                    },
                    "md": {
                      "h": 6,
                      "w": 5,
                      "x": 5,
                      "y": 14,
                      "minH": 3,
                      "minW": 3
                    },
                    "sm": {
                      "h": 5,
                      "w": 4,
                      "x": 8,
                      "y": 5,
                      "minH": 3,
                      "minW": 3
                    },
                    "xl": {
                      "h": 6,
                      "w": 5,
                      "x": 20,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    },
                    "xxl": {
                      "h": 6,
                      "w": 6,
                      "x": 26,
                      "y": 8,
                      "minH": 3,
                      "minW": 3
                    }
                  }
                }
              ]
            },
            "filters_locked": {
              "sections": "nomad.datamodel.results.SolarCell"
            },
            "search_syntaxes": {
              "exclude": [
                "free_text"
              ]
            }
          }
        },
        "perovskite_solar_cell_database:perovskite_solar_cell": {
          "id": "perovskite_solar_cell_database:perovskite_solar_cell",
          "entry_point_type": "schema_package",
          "name": "PerovskiteSolarCell",
          "description": "Schema package defined for the perovskite solar cells database.",
          "plugin_package": "perovskite_solar_cell_database"
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
        "runschema:run_schema_entry_point": {
          "id": "runschema:run_schema_entry_point",
          "entry_point_type": "schema_package",
          "name": "RunSchema",
          "description": "Schema for the nomad run section.",
          "plugin_package": "runschema"
        },
        "simulationworkflownormalizer:simulationworkflow_normalizer_entry_point": {
          "id": "simulationworkflownormalizer:simulationworkflow_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "SimulationWorkflowNormalizer",
          "description": "Normalizer for the simulation workflow data.",
          "plugin_package": "simulationworkflownormalizer"
        },
        "simulationworkflowschema:simulationworkflow_schema_entry_point": {
          "id": "simulationworkflowschema:simulationworkflow_schema_entry_point",
          "entry_point_type": "schema_package",
          "name": "SimulationWorkflowSchema",
          "description": "Schema for the nomad simulation workflows.",
          "plugin_package": "simulationworkflowschema"
        },
        "soapnormalizer:soap_normalizer_entry_point": {
          "id": "soapnormalizer:soap_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "SoapNormalizer",
          "description": "Normalizer for the SOAP data.",
          "plugin_package": "soapnormalizer"
        },
        "spectranormalizer:spectra_normalizer_entry_point": {
          "id": "spectranormalizer:spectra_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "SpectraNormalizer",
          "description": "Normalizer for the spectra data.",
          "plugin_package": "spectranormalizer"
        },
        "systemnormalizer:system_normalizer_entry_point": {
          "id": "systemnormalizer:system_normalizer_entry_point",
          "entry_point_type": "normalizer",
          "name": "SystemNormalizer",
          "description": "Normalizer for the system data.",
          "plugin_package": "systemnormalizer"
        },
        "workflowparsers:aflow_parser_entry_point": {
          "id": "workflowparsers:aflow_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/aflow",
          "description": "NOMAD parser for AFLOW.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/aflow"
          ],
          "mainfile_contents_re": "^\\s*\\[AFLOW\\] \\*+\\s*\\[AFLOW\\]\\s*\\[AFLOW\\]                     .o.        .o88o.oooo\\s*\\[AFLOW\\]                    .888.       888 `` `888\\s*\\[AFLOW\\]                   .8'888.     o888oo   888   .ooooo.  oooooooo    ooo\\s*\\[AFLOW\\]                  .8' `888.     888     888  d88' `88b  `88.`88.  .8'\\s*\\[AFLOW\\]                 .88ooo8888.    888     888  888   888   `88..]88..8'\\s*\\[AFLOW\\]                .8'     `888.   888     888  888   888    `888'`888'\\s*\\[AFLOW\\]               o88o     o8888oo888o   o888o `Y8bod8P'     `8'  `8'  .in|^\\s*\\{\\\"aurl\\\"\\:\\\"aflowlib\\.duke\\.edu\\:AFLOWDATA",
          "mainfile_name_re": ".*aflowlib\\.json.*",
          "mainfile_mime_re": "(application/json)|(text/.*)",
          "mainfile_alternative": true,
          "supported_compressions": [
            "gz",
            "bz2",
            "xz"
          ]
        },
        "workflowparsers:asr_parser_entry_point": {
          "id": "workflowparsers:asr_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/asr",
          "description": "NOMAD parser for ASR.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/asr"
          ],
          "mainfile_contents_re": "\"name\": \"ASR\"",
          "mainfile_name_re": ".*archive_.*\\.json",
          "mainfile_mime_re": "(application/json)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:atomate_parser_entry_point": {
          "id": "workflowparsers:atomate_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/atomate",
          "description": "NOMAD parser for ATOMATE.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/atomate"
          ],
          "mainfile_contents_re": "\"pymatgen_version\":",
          "mainfile_name_re": ".*mp.+materials\\.json",
          "mainfile_mime_re": "(application/json)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:elastic_parser_entry_point": {
          "id": "workflowparsers:elastic_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/elastic",
          "description": "NOMAD parser for ELASTIC.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/elastic"
          ],
          "mainfile_contents_re": "\\s*Order of elastic constants\\s*=\\s*[0-9]+\\s*",
          "mainfile_name_re": ".*/INFO_ElaStic",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:fhivibes_parser_entry_point": {
          "id": "workflowparsers:fhivibes_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/fhivibes",
          "description": "NOMAD parser for FHIVIBES.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/fhivibes"
          ],
          "mainfile_name_re": "^.*\\.(nc)$",
          "mainfile_mime_re": "(application/x-hdf)",
          "mainfile_alternative": false,
          "mainfile_contents_dict": {
            "__has_all_keys": [
              "I",
              "a",
              "b"
            ]
          },
          "supported_compressions": []
        },
        "workflowparsers:lobster_parser_entry_point": {
          "id": "workflowparsers:lobster_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/lobster",
          "description": "NOMAD parser for LOBSTER.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/lobster"
          ],
          "mainfile_contents_re": "^LOBSTER\\s*v[\\d\\.]+.*",
          "mainfile_name_re": ".*lobsterout.*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": [
            "gz",
            "bz2",
            "xz"
          ]
        },
        "workflowparsers:phonopy_parser_entry_point": {
          "id": "workflowparsers:phonopy_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/phonopy",
          "description": "NOMAD parser for PHONOPY.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/phonopy"
          ],
          "mainfile_name_re": "(.*/phonopy-FHI-aims-displacement-0*1/control.in$)|(.*/phon[^/]+yaml)",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:quantum_espresso_epw_parser_entry_point": {
          "id": "workflowparsers:quantum_espresso_epw_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/quantum_espresso_epw",
          "description": "NOMAD parser for QUANTUM_ESPRESSO_EPW.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/quantum_espresso_epw"
          ],
          "mainfile_contents_re": "Program EPW.+\\s*This program is part of the open-source Quantum ESPRESSO suite",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:quantum_espresso_phonon_parser_entry_point": {
          "id": "workflowparsers:quantum_espresso_phonon_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/quantum_espresso_phonon",
          "description": "NOMAD parser for QUANTUM_ESPRESSO_PHONON.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/quantum_espresso_phonon"
          ],
          "mainfile_contents_re": "Program PHONON.+\\s*This program is part of the open-source Quantum ESPRESSO suite",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": ".*",
          "mainfile_alternative": false,
          "supported_compressions": []
        },
        "workflowparsers:quantum_espresso_xspectra_parser_entry_point": {
          "id": "workflowparsers:quantum_espresso_xspectra_parser_entry_point",
          "entry_point_type": "parser",
          "name": "parsers/quantum_espresso_xspectra",
          "description": "NOMAD parser for QUANTUM_ESPRESSO_XSPECTRA.",
          "plugin_package": "workflowparsers",
          "level": 0,
          "aliases": [
            "parsers/quantum_espresso_xspectra"
          ],
          "mainfile_contents_re": "\\s*Program XSpectra\\s*",
          "mainfile_name_re": ".*",
          "mainfile_mime_re": "(application/.*)|(text/.*)",
          "mainfile_alternative": false,
          "supported_compressions": []
        }
      }
    },
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
