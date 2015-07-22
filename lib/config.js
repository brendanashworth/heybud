'use strict'

const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

var config = path.resolve(__dirname, '../config.yml')

module.exports = yaml.safeLoad(fs.readFileSync(config))
