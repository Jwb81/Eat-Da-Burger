const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('/home.html')
})


module.exports = router