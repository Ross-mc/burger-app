const express = require('express');

const burger = require('../models/burger');

const router = express.Router();

//routes

//default route
router.get('/', (req, res) => {

    burger.getAll(burgers => {
        res.render("index", {burgers})
    })
});

module.exports = router;