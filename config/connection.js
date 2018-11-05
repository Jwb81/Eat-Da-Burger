const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 1,
    username: 'root',
    password: 'root',
    database: 'burgers_db'
})

module.exports = connection