const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req, res) => {
    res.send()
})

router.get('/all', (req, res) => {
    burger.selectAll((err, data) => {
        if (err) {
            return res.json(err)
        }
        console.log(data)
        res.render('index', {burgers: data})
    })
})


module.exports = router