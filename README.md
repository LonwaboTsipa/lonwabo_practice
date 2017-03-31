# Loader Template Project
The starter project for the Kurtosys loader


Table of Contents
-----------------

* [Requirements](#requirements)
* [Project Setup](#project-setup)
* [Implementation](#implementation)
* [NPM Commands](#npm-commands)


Requirements
------------

### Kurtosys API Setup
Contact the Implementation department of Kurtosys for the setup of the following information:

* A GitHub account

	If you don't have one, create one [here](https://github.com/). (You should already have one otherwise you wouldn't see this)

* An NPM account
	
	If you don’t have one, create one [here](https://www.npmjs.com/). Make sure that you log in to your NPM account in a terminal to perform package installs later. Open a terminal and enter the following:
	```
	npm adduser
	```
* Your accounts linked to the Kurtosys company accounts

	Provide your GitHub and NPM to the relevant product owners. If you are unsure of who they are, contact the head of implementation engineering at Kurtosys
* A Client created on the FundPress api for the necessary environments
	
	Contact Infrastructure at Kurtosys to be able to facilitate this.
	2 users will be created for each environment:

	* Admin User: For loading data into the API
	* API User: For calling data out of the API

	The following details need to be provided to you from Kurtosys:
	* A username and password will be provided for the Admin users. 
	* A permanent token will be provided for the API users.
	* A client short code provided to you (Usually a 3 digit code)
	* A private loader repository created on GitHub on the Kurtosys account

### Knowledge
To implement a loader project you need to know the following technologies:
* Javascript (ECMA6 and higher) 
	* [Mozilla JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
* [Typescript](https://www.typescriptlang.org/) 
	* [Typescript Deep Dive](https://basarat.gitbooks.io/typescript/) Tutorial 	
* [Kurtosys API](https://www.kurtosys.com/api/)

### Software 
To implement a loader project it is recommended that you have the following installed:
* Git
	* Installation instructions can be found [here](https://git-scm.com/downloads)
* Node JS
	* We recommend installing the latest LTS version.
	* Details for installation can be found [here](https://nodejs.org/)
	* To assist with the versioning of Node we would recommend installing [NVM](https://github.com/creationix/nvm) as well.
* An IDE (Integrated Development Environment)
	* We use [Visual Studio Code](https://code.visualstudio.com/) and would strongly recommend using it, but you can use any IDE that you feel comfortable with.
	
Project Setup
-------------

1. To start, clone this repository, then change the repository path to the project git you were provided. 

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

3. Replace the place holders that are in the template

	The project has place holders for values that need to change for each project.

	Do a full solution find and replace on the following keys:

	`[CLIENT_NAME]` - Upper case client name with no spaces (Underscores are allowed)

	`[PROJECT_CODE]` - The projects code, e.g. 'ksys339'

4. Setup the environmental variables on your system. 

	Go to the `artifacts` folder, there are a number of files that are named with the following pattern: `loaderConfig_<environment>.json`. 

	You will need to add environmental variables for the userName and userPwd fields values in each of the files. e.g.
	```
	export DEMO_CLIENT_DEV_ADMIN_USERNAME='<USERNAME>'
	export DEMO_CLIENT_DEV_ADMIN_PASSWORD='<PASSWORD>'
	```
	The values for these come from the initial client setup that was done for you and provided over OTS. These will be the Admin user credentials and not the API user. The Admin user will have access to load data into the database through the API while the API user only has read access by default.

5. Install the project dependencies using npm install in a terminal pointing to the root of the project.
	```
	npm install
	```
	or 
	```
	npm i
	```

Implementation
--------------
The instructions for implementating this template can be found [here](./docs/IMPLEMENTATION.md)

NPM Commands
------------
The following commands can be used with the solution from the root directory:

`npm install` - Installs missing node_modules

`npm run init:artifacts` - Creates the missing folders in the artifacts folder

`npm run build` - Builds the solution and outputs to the dist folder

`npm run properties:dev` - Creates the properties using the development instance

`npm run properties:release` - Creates the properties using the release instance

`npm run properties:staging` - Creates the properties using the staging instance

`npm run properties:prod` - Creates the properties using the production instance

`npm run start:dev` - Starts the development instance

`npm run start:release` - Starts the release instance

`npm run start:staging` - Starts the staging instance

`npm run start:prod` - Starts the production instance


  
