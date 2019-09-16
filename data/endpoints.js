//import express
const express = require('express');

//import express router
const router = express.Router();

//import helpers
const Users = require('../config/db-helpers');

//import bcrypt library
const bcrypt = require('bcryptjs');

//import middlewares
const verified = require('../auth/verified-middleware');

//<---------------GET REQUESTS--------------------
router.get('/users', verified, (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })

})

//<---------------POST REQUESTS--------------------
router.post('/register', (req, res) => {
    
    const credentials = req.body; //fetchs the data inside the body

    //This creates a hash for password coming from the body before storing it in the database
    const hash = bcrypt.hashSync(credentials.password, 12)
    //this sets the hash to the password
    credentials.password = hash;

    Users.addUser(credentials)
    .then(user => {
        res.status(200).json({
            message: 'User was added sucessfully', user
        })
    })
    .catch(err => {
        res.status(500).json({
            message:'Unable to add user', err: err.response
        })
    })
})

router.post('/login', (req, res) => {

    const { username, password } = req.body;

    Users.getBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                res.status(200).json({
                    message: `Welcome aboard ${user.username}!`
                })
            } else {
                res.status(401).json({
                    message: 'Invalid credentials'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message:'Error while logging in', err: err.response
            })
        })
})


module.exports = router;