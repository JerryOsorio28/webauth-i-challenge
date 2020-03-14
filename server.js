//import express
const express = require('express');

// assign express to your server
const server = express();

//import enpoints 
const endPoints = require('./data/endpoints');

//importing CORS
const cors = require('cors');
server.use(cors());

//teach express how to parse data from the body to JSON
server.use(express.json());

//Have server use your endpoint
server.use('/api', endPoints)

server.get('/', (req, res) => {
    res.send('MAGIC')
})

//export your server
module.exports = server;