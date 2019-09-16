//import express
const express = require('express');

// assign express to your server
const server = express();

//teach express how to parse data from the body to JSON
server.use(express.json());

//import enpoints 
const endPoints = require('./data/endpoints');

//Have server use your endpoint
server.use('/api/users', endPoints)

server.get('/', (req, res) => {
    res.send('MAGIC')
})

//export your server
module.exports = server;