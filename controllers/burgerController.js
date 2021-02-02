const express = require('express');

const burger = require('../models/burger');

const router = express.Router();

//routes

//default route
router.get('/', (req, res) => {
    const test = {
        test: 'hello'
    }
    res.render("index", test)
});

module.exports = router;