const request = require('request')
const fs = require('fs');

// const config = require('../config').credentials

const oxford = {
    'BASE_URL': 'https://od-api.oxforddictionaries.com/api/v1'
}

let Headers = {}

// const Types = ['antonyms', 'synonyms', 'examples', 'definitions', 'word', 'play']



const generateUrl = (word, t) => {
    const ext = t ? '/' + t : ''
    const Url = oxford.BASE_URL + '/entries/en/' + word.toLowerCase() + ext
    // console.log(Url)
    return Url
}

const HTTP_Request = (word, t) => {
    // validation(t)
    return new Promise((Resolve, Reject) => {
        request({
            headers: Headers,
            uri: generateUrl(word, t),
            method: 'GET'
        }, (err, res, body) => {
            //it works!
            if (err) Reject({'Error': err})
            if (res.statusCode === 404) Reject({'Error': 'Keyword not found. --- '+ t})
            else if (res.statusCode === 500) Reject({'Error': 'Internal Error. Try again. --- '+ t})
            else dataMap(body, t).then(x => {Resolve(x)}).catch(err => {Reject(err)})
        });
    })
    
    
}

const dataMap = (array, key) => {
    // console.log(key +' : '+JSON.stringify(array))
    return new Promise((Resolve, Reject) => {
        try {
            let arr = JSON.parse(array).results[0].lexicalEntries[0].entries[0].senses
            arr = arr.map(x => x[key])
            arr = [].concat(...arr)
            if (key !== 'definitions') arr = arr.map(x => x.text)
            Resolve({[key]: arr})
        } catch (error) {
            Reject({key: ' ----- Error : Could not read data'})
        }
    })
        

}


module.exports = {
    checkCredentials: () => {
        if (!process.env['APP_ID'] || !process.env['APP_KEY']) {
            console.log('')
            console.log('Error : APP_ID or APP_KEY or Both are missing')
            console.log('')
            console.log('To set APP_ID & APP_KEY please follow README.md file')
            process.exit()
        } else {
            Headers = {
                'Accept': 'application/json',
                'app_id': process.env['APP_ID'],
                'app_key': process.env['APP_KEY']
            }
        }
    }  ,
    data: (word, t) => {
            // Print data on the console log
            t.forEach(element => {
                HTTP_Request(word, element)
                .then(x => {
                    for(i in x) {
                        console.log (i +' ----- '+ x[i])
                        console.log('')
                    }
                })
                .catch(err => {
                    for(i in err) {
                        console.log (i +' ----- '+ err[i])
                        console.log('')
                    }
                })
            })
        
    },
    playData: async (word, t) => {
        var arr = []
        
           var pr =  t.map(async (element) => {
                
                var temp = await HTTP_Request(word, element)
                return temp
                
            })
            return Promise.all(pr)
            
    }
}


