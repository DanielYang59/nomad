# Tutorial for parsing data from electron microscopy

## Scope
This example combines a set of configured components of NOMAD to collect
metadata specific for electron microscopy and combine these with data from
different domain-specific file formats. The example shows how functionalities
of a NOMAD electronic lab notebook (ELN) template instance that is customized
for electron microscopy, the `pynxtools-em` plugin of the `pynxtools` NeXus parser,
the `NXem` NeXus data schema, and several NOMAD core functionalities work together
to create electron-microscopy-domain-specific NOMAD entries with respective
default plots for `h5web`.

## Getting started
1. Click the respective button to execute the example.
2. Wait for NOMAD to instantiate the example for you.
3. Check that you are in the `Uploads` section (menu bar).
4. Select the generated upload.
5. Explore its content by clicking on the arrow keys (to the right side of a file).
6. Modify the input file in the NOMAD ELN to match your dataset.
7. Click `save` to trigger a reprocessing of your upload.
8. Explore its content via e.g. the preview or via the `Entries`
   (select from the menu bar).
   
## Which input is supported by this example?
Please consult the [reference section of the pynxtools-em plugin](https://fairmat-nfdi.github.io/pynxtools-em/) to learn which file formats the plugin currently supports.

## Which data artefacts should I expect to find?
This example upload contains the following entries:
- A schema in NOMAD's *archive.yaml* format: *nxem.schema.archive.yaml*
- A schema instance file as used and generated by NOMAD *em.archive.json*.
  For educational purposes this file is filled with values but it is the
  user's responsibility to check that these metadata match with their dataset.
- Another schema instance file *eln_data.yaml*. This file contains a plain
  view of all entered/modified quantities including their units. This file is
  updated with clicking the `save` button. This file should not be edited
  manually. Instead, edit the schema instance using the NOMAD GUI.
- Another schema instance file *em.oasis.specific.yaml*. This file contains
  metadata that for specific local NOMAD OASIS installations should become
  overwritten to reduce the complexity of ELN templates.

## Which data schema is used?
The ELN template is configured such that its terminology matches with the [NXem](https://fairmat-nfdi.github.io/nexus_definitions/classes/contributed_definitions/NXem.html#nxem) NeXus application definition.

## Acknowledgements
[This example comes with real world datasets contributed by the international atom probe community.](https://zenodo.org/records/7986279)

## Where to raise questions, comments, and suggestions?
You are very welcome to approach us with all sorts of questions and feature requests.
For atom-probe-domain-specific requests [Markus Kühbach](https://www.fairmat-nfdi.eu/fairmat/about-fairmat/team-fairmat)
is the respective contact person within FAIRmat. Feel free and [create a GitHub issue](https://github.com/FAIRmat-NFDI/pynxtools-em) to point us to specific questions, experiences, or problems.

## Where to go from now?
Please consult the documentation of the domain-specific examples for electron microscopy in the NOMAD documentation
to learn how you can process your data further using NOMAD and the Nomad Remote Tools Hub (NORTH).
