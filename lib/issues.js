'use strict'

const agent = require('./agent')
const config = require('./config').api

exports.all = function(options) {
    options = options || {}
    options.user = options.user || config.user
    options.repo = options.repo || config.repo

    return new Promise(function(resolve, reject) {
        // pass to API
        agent().issues.repoIssues(options, function(err, issues) {
            if (err)
                return reject(err)

            resolve(issues)
        })
    })
}
