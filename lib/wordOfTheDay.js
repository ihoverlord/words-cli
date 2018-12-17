const cheerio = require('cheerio')
const request = require('request');

const sample = ["admonishment","admonishments","admonition","admonitions","admonitive","admonitor","admonitorily","admonitors","admonitory","adnascent","adnate","adnation","adnations","adnexa","adnexal","adnominal","adnominals","adnoun","adnouns","ado","adobe","adobelike","adobes","adobo","adobos","adolescence","adolescences","adolescent","adolescently","adolescents","adonis","adonise","adonised","adonises","adonising","adonize","adonized","adonizes","adonizing","adoors","adopt","adoptabilities"];

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
    }
}