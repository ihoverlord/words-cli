const randomWord = require('./wordOfTheDay').randomWord
const http = require('./oxford-api')

let playWord = ''
module.exports = {
    letsPlay: () => {
        playWord = randomWord()
        process.env.PLAY_WORD = randomWord()
        console.log('')
        console.log('This is going to be fun. Lets start the game.')
        console.log('')
        console.log('Word we choose for you is : ' + randomWord())

        http.data(playWord, ['actonyms', 'examples'], 'play')

    }
}