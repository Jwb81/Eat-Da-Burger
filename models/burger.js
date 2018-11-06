const orm = require('../config/orm')

const burger = {
    selectAll: (cb) => {
        orm.selectAll(cb)
    },

    insertOne: (name, cb) => {
        orm.insertOne(name, cb)
    },

    updateOne: (set, where, cb) => {
        orm.updateOne(set, where, cb)
    }

    
}

module.exports = burger