const randomWord = require('./wordOfTheDay').randomWord
const http = require('./oxford-api')
const {Input} = require('enquirer');

let playWord = ''
let synonyms = []
let data = {}
const Types = ['antonyms', 'synonyms', 'examples', 'definitions']

interact = async () => {
    const prompt = new Input({
        message: 'Please enter the word',
        validate(value) {
            return (value.match(/^[a-zA-Z]*$/)) ? true : 'Cant use special characters/numbers/spaces. Try again'
          }
      });
      
      prompt.run()
    .then(answer => {
        validateAnswer(answer.toLowerCase())
        
    })
    .catch(console.log);
}

validateAnswer = (answer) => {
    if (playWord === answer || synonyms.includes(answer)) {
        console.log('') 
        console.log('Right Answer. You won the game.')
        console.log('--------------------------------------------------')
        console.log('')
        console.log('--------------------------------------------------')
        console.log('Word : ' +answer)
        console.log('--------------------------------------------------')
        console.log('')
        console.log('Here comes the full details : ')
        console.log('--------------------------------------------------')
        console.log('')
        displayDetails()

    } else {
        console.log('') 
        console.log('--------------------------------------------------')
        console.log('Sorry that was a wrong answer. Try again')
        console.log('--------------------------------------------------')
        console.log('')
        showHint()
        interact()
    }
}

showHint = () => {
    console.log('')
    console.log('H I N T')
    console.log('--------------------------------------------------')
    console.log('What is the other Synonym for ----- '+synonyms[Math.floor(Math.random()*synonyms.length)])
    console.log('--------------------------------------------------')
    console.log('')
}

displayDetails = () => {

    for(i in data) {
        console.log (i +' ----- '+ data[i])
        console.log('')
    }
}
module.exports = {
    letsPlay: () => {
        playWord = randomWord()
        console.log('')
        console.log('This is going to be fun. Lets start the game.')
        console.log('')
        // console.log('Word we choose for you is : ' + randomWord())
        http.playData(playWord, Types)
        .then(x => {
            // console.log(x)
            x.forEach((el, i) => {
                Object.assign(data, el)
                
            })
            synonyms = data['synonyms']
            
            // console.log(synonyms)
            showHint()
            interact()
        })
        .catch(err => console.log(err))
        

    }
}