const express = require('express')
const path = require('path')
const { getBooks } = require('./service')

const routes = express.Router()

routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/index.html'))
})

routes.post('/', getBooks)

module.exports = routes