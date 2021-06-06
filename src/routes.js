const express = require('express')
const path = require('path')
const { renderBooks } = require('./services/renderBooks.js')

const routes = express.Router()

routes.get('/', function (req, res) {
    res.render('info')
})

routes.get('/search', renderBooks)

module.exports = routes