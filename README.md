# On Premise Loader Template project

## Setup
Please fork this branch and not commit to it with client specific changed.

The project has place holders for values that need to change for each project.
Do a full solution find and replace on the following keys:
`[CLIENT_NAME]` - Upper case client name with no spaces (Underscores are allowed)
`[PROJECT_CODE]` - The projects code, e.g. 'ksys339'

The following commands can be used to be able to initialize the solution:
`npm run`
    `init:artifacts` - Creates the missing folders in the artifacts folder

To load properties through the loader use the following command from a terminal in the project root:
`node dist/index.js <ENV> property allocationProperty statisticsProperty timeseriesProperty commentaryType disclaimerType docmeta formatCode fundList translation`

To install run `npm install`

## Development and testing

If you are using [vs-code](https://code.visualstudio.com/) just hit `F6` to build and `F5` to debug.
  