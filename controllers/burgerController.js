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
    burger.update(id, (result) => {
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

//create route

router.post('/api/burger', (req, res) => {
    const { burgerName } = req.body;
    console.log('The request from the server is: ', burgerName)
})

module.exports = router;