//import your .env file asap in your code
require('dotenv').config();

//import your default dynamic port set in defaults
const defaults = require('./defaults/defaults');

//import server
const server = require('./server');

//have a port listening dynamically
const port = defaults.port;

//Server listening on dynamic port
server.listen(port, () => console.log(`Server up and running on port ${port}`))