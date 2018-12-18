const cheerio = require('cheerio')
const request = require('request');

const sample = ["quickly", "great", "listen", 'corrupt', 'discover'];

module.exports = {
    getWordOfTheDay: () => {
        return new Promise(function(resolve, reject) {
            request('https://www.merriam-webster.com/word-of-the-day', (err, resp, html) => {
                if (!err) {
                    const $ = cheerio.load(html);
                    
                    const word = $('.word-and-pronunciation h1').text() || sample[Math.floor(Math.random()*sample.length)];
                    console.log(word + ' ---- word of the day')
                    resolve(word)
                } else {
                    resolve(sample[Math.floor(Math.random()*sample.length)])
                }
            });
        });
    },
    randomWord: () => {
        return sample[Math.floor(Math.random()*sample.length)]
    }
}