# Implementation

Table of Contents
-----------------
* [Introduction](#introduction)
* [Requirements](#requirements)
* [Development](#development)
	* [Ingesting Data](#ingesting-data)

Introduction
------------
A loader is a node process that is created to be able to transform data from multiple sources and insert it into the Kurtosys FundPress API. There are three main steps in any loader:
* Ingest the external data
* Process the data to a format we can use
* Load the data to the Kurtosys API

A loader can accept data from, but is not limited to, the following sources:
* Files
	* CSV
	* Excel (XLSX or XLS)
	* XML
	* JSON
* API Endpoints
	* REST (JSON or XML)

Requirements
------------

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

Development
-----------
To develop in a loeader you need to ask where the data is coming from and what the data represents. Then we looks at how we should ingest the data and how we should prepare it for transfer to the Kurtosys API.

### Ingesting Data
We use a manifest file to help fine the different external data points. This file can be found at:
```
arftifacts/config/manifest.json
```
This is an array of manifest items. Each item represents an external data point. These will change depending on the type of data that we are loading in e.g. files or API endpoints.

The structure of a manifest item is as follows:
```json
{
	"key": string, // A unique key for each manifest item in the array
	"isFileForLoad": boolean, // Tells the system if it is going to be a file to load
	"fileName": "Fund.xlsx",
	"sheet": "Fund",
	"regex": "Fund.*\\.xlsx",
	"type": "xlsx",
	"raw": true,
	"description": "Funds"
},
```

#### Files
Files are pulled from the SFTP by default and loaded into the ```artifacts/pending``` directory. For development you can manually load the files into the ```artifacts/pending``` directory.

The files will automatically be pulled from the SFTP directory if:
* You have the credentials setup correctly as described in the base readme.
* You have the ```useFTP``` constant in the ```src/index.ts``` file set to true.
```
const useFTP = true;
```

The base file formats that work out of the gate are CSV, XLSX and XLS files.
For these files you need to provide manifest item that describes the file and allows the system to read it. If you do not have a manifest item then the file will not be loaded.

#### CSV Files
An example of a man


