const fs = require('fs');

const oxford = {
    'BASE_URL': 'https://od-api.oxforddictionaries.com/api/v1'
}

readCredentials = (obj) => {
    if (!obj.APP_ID || !obj.APP_KEY) {
        console.log('')
        console.log('APP_ID or APP_KEY or Both are missing from credentials.json')
        process.exit()
    } else {
        oxford.APP_ID = obj.APP_ID
        oxford.APP_KEY = obj.APP_KEY
    }
}



module.exports = {
    credentials: oxford,
    getCredentials: () => {
        try {
            const obj = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
            console.log(obj)
            readCredentials(obj)
        } catch (error) {
            console.log('')
            console.log('Please add "credentials.json" file width Oxford API Keys to the project folder before we continue any further.')
            process.exit()
        }
    }  
}