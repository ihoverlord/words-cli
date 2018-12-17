const checkCredentials = require('./lib/oxford-api').checkCredentials
const cli = require('./lib/commander')

// Initiate app by checking credentials
// for Oxford Api
checkCredentials()

// Run cli program
cli.run()