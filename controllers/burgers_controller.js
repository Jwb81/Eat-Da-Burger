const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req, res) => {
    res.send()
})

router.get('/all', (req, res) => {
    burger.selectAll((err, data) => {
        if (err) {
            return res.send(err)
        }

        res.render('index', {burgers: data})
    })
})

router.post('/update-burger', (req, res) => {
    const set = {
        devoured: req.body.devoured
    }
    const where = {
        id: req.body.id
    }

    burger.updateOne(set, where, (err, data) => {
        if (err) {
            console.log(err)
            return res.send(err)
        }

        console.log(data)
        res.send(data)
    })
})


module.exports = router