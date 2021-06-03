const routes = require('./routes')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(routes)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('Server running on port 3000'))