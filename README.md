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

You search for Antonyms, Synonyms, Examples and Definitions from Oxford Dictionary

'Search for Antonyms'
```
node app -a WORD
node app --ant WORD
```

'Search for Synonyms'
```
node app -s WORD
node app --syn WORD 
```

'Search for Examples'
```
node app -e WORD
node app --ex WORD
```
'Search for Definitions'
```
node app -d WORD
node app --def WORD
```
'Search for Every thing'
```
node app -f WORD
node app --dict WORD
```

## Word of the day
Free version of the API do not have word of the day option. So [cheerio](https://cheerio.js.org/) has been used to scrap from [Webster](https://www.merriam-webster.com/word-of-the-day). If scrape fails a random word will be selected from the collection and displayed.
```
node app -w
node app --word
```

## Play a Guessing Game


```
node app -p
node app --play 
```
### Rules of the Game :
 1. You will start with a Synonym hint.
 2. You can only enter String of alphabets.
 3. Input Will be refined to lowercase before processing 
 4. On every wrong answer, A new Hint will be displayed
  

## License
[MIT](https://choosealicense.com/licenses/mit/)