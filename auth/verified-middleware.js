//import bcrypt library
const bcrypt = require('bcryptjs');

//import helpers
const Users = require('../config/db-helpers');


module.exports = function verified (req, res, next) {
    const { username, password } = req.headers;

    if(username && password) {
        Users.getBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                next();
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
    }else {
        res.status(401).json({
            message: 'Please provide valid credentials'
        });
    }
};