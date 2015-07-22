'use strict'

const issues = require('./issues')

exports.all = function(options) {
    return issues.all(options).then(function(all) {
        return all.filter(function(issue) {
            // Filter triggers to yes if the value is truthy
            return issue.pull_request
        })
    })
}

exports.unassigned = function(options) {
    return exports.all(options).then(function(all) {
        return all.filter(function(issue) {
            return issue.assignee
        })
    })
}
