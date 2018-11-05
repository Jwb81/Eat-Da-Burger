const express = require('express')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 8080

const app = express()

// serve static content inside public directory
app.use(express.static(__dirname))

// Parse data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// set Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// import routes
const routes = require('./controllers/burgers_controller')

// set routes
app.use(routes)

// start the server
app.listen(PORT, () => {
    `App listening on port: ${PORT}`
})

