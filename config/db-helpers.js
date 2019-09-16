//import db
const db = require('./db-config');

module.exports = {
    addUser,
    getUsers,
    getBy
}

function getUsers () {
    return db('users')
}

function getBy (user) {
    return db('users')
        .where(user)
        .first()
}

function addUser (data) {
    return db('users')
        .insert(data)
}