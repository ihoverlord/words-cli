const getCredentials = require('./config').getCredentials
const cli = require('./lib/commander')
// Initiate app by reading credentials.json file
// with Oxford Api Credentials
getCredentials()

// Run cli program
cli.run()