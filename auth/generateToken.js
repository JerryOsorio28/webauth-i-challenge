//json web token dependency for auth
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken
}


function generateToken (user) {

    const payload = {
        subject: user.id,
        username: user.username
    };
    const secret = 'This is a secret';

    const options = {
        expiresIn: '1d'
    }


    return jwt.sign(payload, secret, options)
}