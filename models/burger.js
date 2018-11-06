const orm = require('../config/orm')

const burger = {
    selectAll: (cb) => {
        orm.selectAll(cb)
    },

    updateOne: (set, where, cb) => {
        orm.updateOne(set, where, cb)
    }
}

module.exports = burger