#!/usr/bin/env node
const program = require('commander');
const http = require('./oxford-api')
const getWordOfTheDay = require('../lib/wordOfTheDay').getWordOfTheDay
// const Types = ['antonyms', 'synonyms', 'examples', 'definitions']


// validate string input from user for only alphabets and return string converted to lowercase
const wordValidation = (word) => {
    return (word.match(/^[a-zA-Z]*$/))
}

let keys = [] 
let word = ''

runForData = () => {
    if (wordValidation(word)) {
        console.log('We are searching for : ' + word.toLowerCase() + ' --- ' + keys.toString());
        http.data(word.toLowerCase(), keys)
    } else {
        console.log('')
        console.log('Word : ' + word)
        console.log('Error : You cant have special characters or numbers or spaces in the word.')
        console.log('Try searching for Great/Inspiration/program')
        
    }
}

module.exports = {
     run: () => {
        program
            .version('0.1.0')
            .option('-a, --ant <a>', 'Search for Antonyms')
            .option('-s, --syn <s>', 'Search for Synonyms')
            .option('-e, --ex <ex>', 'Search for Examples')
            .option('-d, --def <def>', 'Search for Definitions')
            .option('-f, --dict <dict>', 'Search for Antonyms, Synonyms, Examples, Definitions')
            .option('-w, --word', 'Word of the Day')
            .option('-p, --play', 'Lets Play a Game!')
            .parse(process.argv);
            console.log('---')
            console.log('------')
            console.log('Thanks for using Oxford Dictionary CLI.');
            console.log('')
            if (program.ant) keys.push('antonyms'), word = program.ant, runForData()
            if (program.syn) keys.push('synonyms'), word = program.syn, runForData()
            if (program.ex) keys.push('examples'), word = program.ex, runForData()
            if (program.def) keys.push('definitions'), word = program.def, runForData()
            if (program.dict) keys = ['antonyms', 'synonyms', 'examples', 'definitions'], word = program.dict, runForData()
            if (program.word) {
                keys = ['antonyms', 'synonyms', 'examples', 'definitions']
                getWordOfTheDay().then(x =>{
                    word = x
                    runForData()
                })
            }
            if (program.play) keys.push('play')
            
    }
}
