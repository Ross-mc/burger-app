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

//update route

router.put('/api/burger/:id', (req, res) => {
    const id = req.params.id;
    console.log('The id received at the server was: ', id);
    res.json({testMessage: `${id} received at the server and send back to front end`})
})

module.exports = router;