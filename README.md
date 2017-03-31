# On Premise Loader Template project

## Setup
1. To start do a clone of this repo, then change the repo path. 

```
	git clone https://github.com/Kurtosys/ksys_loader_start.git <YOUR PROJECT FOLDER>
	cd <YOUR PROJECT FOLDER>
	git remote set-url origin <YOUR PROJECT GIT URL>
	git push origin master
```

2. Now setup the upstream to the template to be able to get latest of the template into your project

```
	git remote add upstream https://github.com/Kurtosys/ksys_loader_start.git
``` 

3. Make sure that you have at least node v6.2.0

```	
	nvm use v7.6.0
```	

4. Replace the place holders that are in the template

The project has place holders for values that need to change for each project.

Do a full solution find and replace on the following keys:

`[CLIENT_NAME]` - Upper case client name with no spaces (Underscores are allowed)

`[PROJECT_CODE]` - The projects code, e.g. 'ksys339'

5. Setup the environmental variables on your system. 

Go to the `artifacts` folder, there are a number of files that are named with the following pattern: `loaderConfig_<environment>.json`. 

You will need to add environmental variables for the userName and userPwd fields values in each of the files. e.g.
```
    export DEMO_CLIENT_DEV_ADMIN_USERNAME='<USERNAME>'
    export DEMO_CLIENT_DEV_ADMIN_PASSWORD='<PASSWORD>'
```
The values for these come from the initial client setup that was done for you and provided over OTS. These will be the Admin user credentials and not the API user. The Admin user will have access to load data into the database through the API while the API user only has read access by default.

6. Install the project dependencies using npm install in a terminal pointing to the root of the project.
```
    npm install
```
or 
```
    npm i
```
7. Develop the loader code for ingesting



The following commands can be used to be able to initialize the solution:

`npm install` - Installs missing node_modules

`npm run init:artifacts` - Creates the missing folders in the artifacts folder

`npm run build` - Builds the solution and outputs to the dist folder

`npm run properties:dev` - Creates the properties using the development instance

`npm run properties:staging` - Creates the properties using the staging instance

`npm run properties:prod` - Creates the properties using the production instance

`npm run start` - Starts the development instance

`npm run start:staging` - Starts the staging instance

`npm run start:prod` - Starts the production instance

## Development and testing

If you are using [vs-code](https://code.visualstudio.com/) just hit `F6` to build and `F5` to debug.
  
