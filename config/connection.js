const mysql = require('mysql')

// setup connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
})


// Make connection
connection.connect(function(err) {
    if (err) {
      return console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
  });
  

// export connection for later use
module.exports = connection