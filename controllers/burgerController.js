const express = require('express');

const burger = require('../models/burger');

const router = express.Router();

//routes

//default route
router.get('/', (req, res) => {

    burger.getAll(burgers => {
        const availableBurgers = burgers.filter(burger => !burger.eaten);
        const eatenBurgers = burgers.filter(burger => burger.eaten);
        res.render("index", {availableBurgers, eatenBurgers})
    });
});

//update route

router.put('/api/burger/:id', (req, res) => {
    const { id, bool } = req.body;
    burger.update(id, bool, (result) => {
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

//create route

router.post('/api/burger', (req, res) => {
    const { burgerName } = req.body;
    burger.create(burgerName, (result) => {
        if (result.affectedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;