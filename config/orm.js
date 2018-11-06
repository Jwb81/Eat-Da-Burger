const db = require('./connection')
const mysql = require('mysql')

const orm = {
    // Helper function to convert object key/value pairs to SQL syntax
    objToSql: (ob) => {
        var arr = [];

        // loop through the keys and push the key/value as a string int arr
        for (var key in ob) {
            var value = ob[key];
            // check to skip hidden properties
            if (Object.hasOwnProperty.call(ob, key)) {
                // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                    value = "'" + value + "'";
                }
                // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
                // e.g. {sleepy: true} => ["sleepy=true"]
                arr.push(key + "=" + value);
            }
        }

        // translate array of strings to a single comma-separated string
        return arr.toString();
    },

    selectAll: (cb) => {
        const query = 'SELECT * FROM burgers'
        db.query(query, cb)
    },

    insertOne: (obj, cb) => {
        const query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)'
        db.query(query, [obj.burger_name, obj.devoured], cb)
    },

    updateOne: (set, where, cb) => {
        let query = 'UPDATE burgers SET '
        query += orm.objToSql(set)
        query += ' WHERE '
        query += orm.objToSql(where)

        // query = mysql.format(query, [set, where])

        const q = db.query(query, [set, where], cb)
    }
}

module.exports = orm