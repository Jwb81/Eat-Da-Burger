const db = require('./connection')

const orm = {
    selectAll: (cb) => {
        const query = 'SELECT * FROM burgers'
        db.query(query, cb)
    },

    insertOne: (obj, cb) => {
        const query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)'
        db.query(query, [obj.burger_name, obj.devoured], cb)
    },

    updateOne: (set, where, cb) => {
        const query = 'UPDATE burgers SET ? WHERE ?'
        db.query(query, [set, where], cb)
    }
}

module.exports = orm