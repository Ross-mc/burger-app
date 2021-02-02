const express = require('express');

const burger = require('../models/burger');

const router = express.Router();

//routes

//default route
router.get('/', (req, res) => {

    burger.getAll(burgersArr => {
        res.render("index", {burgersArr})
    })
});

module.exports = router;