# words-cli

Access Oxford Dictionary using your CLI. Search for English word Synonyms, Actonyms, Examples, and Definitions right from your CLI. For fun, play a guessing game as well.

## Installation

```bash
git clone https://github.com/thebiryaniboy/words-cli.git YOUR_PROJECT_NAME
```

## Pre-requisites

First create a developer account with [Oxford Dictionary](https://developer.oxforddictionaries.com). Generate APP_ID and APP_KEY.
Set APP_ID and APP_KEY to process env.

From UNIX

```
export APP_ID='YOUR_ID'
export APP_KEY='YOUR_KEY'
```
From WINDOWS

```
SET APP_ID='YOUR_ID'
SET APP_KEY='YOUR_KEY'
```
From POWERSHELL

```
$env:APP_ID='YOUR_ID'
$env:APP_KEY='YOUR_KEY'
```

## Usage

```
node app -a|--ant WORD // 'Search for Antonyms'
node app -s|--syn WORD // 'Search for Synonyms'
node app -e|--ex WORD // 'Search for Examples'
node app -d|--def WORD // 'Search for Definitions'
```


## License
[MIT](https://choosealicense.com/licenses/mit/)