const express = require('express')
const path = require('path')
const { insertBooks } = require('./services/insertBooks.js')

const routes = express.Router()

routes.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname + '/public/html/index.html'))
    res.render('hello')
})

routes.post('/', insertBooks)

module.exports = routes