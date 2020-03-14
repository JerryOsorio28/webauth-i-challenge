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

//token generator function
const { generateToken } = require('../auth/generateToken.js');

//<---------------GET REQUESTS--------------------
router.get('/users',  verified, (req, res) => {

    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json(err.response)
        })

})

router.get('/logout', (req, res) => {

    if(req.session){
        req.session.destroy(err => {
            if(err){
                res.json({ message: 'Unable to log out'})
            } else {
                res.status(200).json({ message: 'Logged out sucessfully'});
            }
        })
    } else {
        res.status(500).json({ message: 'Server error'});
    }
})

//<---------------POST REQUESTS--------------------
router.post('/register', (req, res) => {
    
    let { username, password } = req.body; //fetchs the data inside the body

    //This creates a hash for password coming from the body before storing it in the database
    const hash = bcrypt.hashSync(password, 12)

    Users.addUser({ username, password: hash }) //this sets the hash to the password
    .then(user => {
        res.status(200).json({
            message: 'User was added sucessfully', user
        })
    })
    .catch(err => {
        res.status(500).json({
            message:'User already exists, choose unique username', err: err.response
        })
    })
})

router.post('/login', (req, res) => {

    const { username, password } = req.body;

    Users.getBy({ username })
        .first()
        .then(user => { 
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user) //generates token for authentication
                res.status(200).json({
                    message: `Welcome aboard ${user.username}!`,
                    token
                })
            } else {
                res.status(401).json({
                    message: 'Invalid credentials'
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message:'Error while logging in', err: err
            })
        })
})


module.exports = router;