const express = require('express')
const path = require('path')
const { insertBooks } = require('./services/insertBooks')

const routes = express.Router()

routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

routes.post('/', insertBooks)

module.exports = routes