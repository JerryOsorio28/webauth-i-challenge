//import knex
const knex = require('knex');

//import knexFile that holds your db
const knexFile = require('../knexfile.js');

//Target development property from your knexFile
const knexConfig = knexFile.development;

//export your config
module.exports = knex(knexConfig);