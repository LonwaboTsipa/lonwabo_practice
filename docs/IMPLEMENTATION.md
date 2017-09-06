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
To develop a loader you need to ask, where the data is coming from and what the data represents. Then we look at how we should ingest the data and how we should prepare it for transfer to the Kurtosys API.

### Ingesting Data
We use a manifest file to help define the different external data points. This file can be found at:
```
arftifacts/config/manifest.json
```
This is an array of manifest items. Each item represents an external data point. These will change depending on the type of data that we are loading in e.g. files or API endpoints.

#### Manifest Item Attributes
| Attribute | Type | Is Required? | Description |
|:-----|:-----|:-----|:-----|
| `key` | `string` | `true` | A unique key for each manifest item in the array.|
| `isFileForLoad` | `boolean` | `true` | Tells the system if the manifest item is a file to load. Should be used so the system can automatically ingest the file specified.|
| `description` | `string` | `true` | A description of what the manifest item is describing.|
| `type` | `"api"`, `"xml"`, `"xlsx"`, `"xls"` or `"csv"` | `false` | The type to ingest.|
| `regex` | `string` | `false` | A regular expression defining the name of the file. |
| `sheet` | `string` | `Only for excel types` | The name of the excel sheet to read the data from.|
| `raw` | `boolean` | `Only for excel types` | This should be set to true for excel types.|
| `csvOptions` | `csvOptions` | `false` | Options to be passed through for ingesting a csv file. default: `{ "separator": ",", "quote": "'", "escape": "'" }`|
| `apiOptions` | `apiOptions` | `false` | The options to be passed through for the ingestion of an API request. |

csvOptions
| Attribute | Type | Is Required? | Description |
|:-----|:-----|:-----|:-----|
| `separator` | `string` | `false`  | Field separator (delimiter), default: ',' (comma) |
| `quote ` | `string` | `false`  | The character used to enclose fields with white space characters, escaping etc., default: '"' (double quote) |
| `escape ` | `string` | `false`  | Character used to escape the quote inside a field, default: '"' (double quote). If you are changing quotechar you may want to change the escape to the same value |
| `comment ` | `string` | `false`  | Parser will ignore this character and all following characters on the same line the line, default: none |
| `columnNames` | `string` | `false`  | An array of column names, if used, the rows sent to the data listener are represented as hashes instead of arrays, default: none |
| `columnsFromHeader` | `string` | `false`  | Value indicating whether the first row should be interpreted as a list of header names. If used, the rows sent to the data listener are represented as hashes instead of arrays, default: false |
| `nestedQuotes` | `string` | `false`  | Value indicating whether the parser should try to process a file with unescaped quote characters inside fields, default: false |

#### Excel file manifest item:
```json
{
	"key": "fund",
	"isFileForLoad": "true", 
	"sheet": "Fund",
	"regex": "Fund.*\\.xlsx",
	"type": "xlsx",
	"raw": true,
	"description": "Funds"
}
```
#### CSV file manifest item
```json
{
	"key": "fund",
	"isFileForLoad": true,
	"regex": "Fund.*\\.csv",
	"type": "csv",
	"description": "Funds",
	"csvOptions": {
		"separator": ",",
		"quote": "'",
		"escape": "'"
	}
}
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

#### API Calls



