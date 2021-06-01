const express = require('express')
const path = require('path')

const routes = express.Router()

routes.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/pages/html/index.html'))
})

module.exports = routes