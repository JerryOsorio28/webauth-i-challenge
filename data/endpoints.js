//import express
const express = require('express');

//import express router
const router = express.Router();

//import your database
const db = require('./db-config.js');

//<---------------GET REQUESTS--------------------
router.get('/', (req, res) => {

    db('users')
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })

})

module.exports = router;