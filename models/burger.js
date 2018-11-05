const orm = require('../config/orm')

const burger = {
    selectAll: (cb) => {
        orm.selectAll((err, data) => {
            cb(err, data)
        })
    }
}

module.exports = burger