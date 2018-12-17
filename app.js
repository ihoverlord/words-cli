const getCredentials = require('./config').getCredentials
const run = require('./lib/commander')
// Initiate app by reading credentials.json file
// with Oxford Api Credentials
getCredentials()

// Run cli program
run()