//import express
const express = require('express');

// assign express to your server
const server = express();

//import enpoints 
const endPoints = require('./data/endpoints');

//importing CORS
const cors = require('cors');
server.use(cors());

//setting up express session
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const dbConnection = require('./config/db-config');

//express session config
const sessionConfig = {
    name: 'notACookie', //if not is named SID by default
    secret: process.env.SESSION_SECRET || 'keep it secret, keep it safe',
    cookie: {
        maxAge: 1000 * 60 * 60, //since in milliseconds by default, we set timeout for an hr
        secure: false, //true if in production
        httpOnly: true, //Means forbidding JS access to the cookie
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30, // cleans out expired session data
    })
}

//teach express how to parse data from the body to JSON
server.use(express.json());
server.use(session(sessionConfig));


//Have server use your endpoint
server.use('/api', endPoints)

server.get('/', (req, res) => {
    res.send('MAGIC')
})

//export your server
module.exports = server;