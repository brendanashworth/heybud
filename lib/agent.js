'use strict'

const GitHub = require('github')
const config = require('./config')

var agent = new GitHub({
    version: "3.0.0"
})

module.exports = function() {
    return agent;
}
