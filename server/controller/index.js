const api = require('express').Router()
const mediaController = require('./media')

api.use('/media', mediaController)

module.exports = api