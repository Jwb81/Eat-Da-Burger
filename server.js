const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.static(__dirname))

