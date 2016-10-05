# On Premise Loader Template project

## Setup
To start do a clone of this repo, then change the repo path. 

```
	git clone https://github.com/Kurtosys/ksys_loader_start.git <YOUR PROJECT FOLDER>
	cd <YOUR PROJECT FOLDER>
	git remote set-url origin <YOUR PROJECT GIT URL>
	git push origin master
```

Now setup the upstream to the template to be able to get latest of the template into your project

```
	git remote add upstream https://github.com/Kurtosys/ksys_loader_start.git
``` 

Go to project root and run this to clear the git history

```
	rm -rf .git
```

The solution is using Typescript to be able to compile, not webpack as these solutions have no need to minify their code, being non-client facing.

Make sure that you have typings installed as well as the at least node v6.2.0

```
	npm install typings -g 
	nvm use v6.2.0
```	

The project has place holders for values that need to change for each project.

Do a full solution find and replace on the following keys:

`[CLIENT_NAME]` - Upper case client name with no spaces (Underscores are allowed)

`[PROJECT_CODE]` - The projects code, e.g. 'ksys339'

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
  
