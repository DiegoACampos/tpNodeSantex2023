const passport = require('passport')
const PassportStrategy = require('./passport-config')

function initializeAuthetication() {
    passport.use(PassportStrategy)
}

module.exports = { initializeAuthetication }