const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '120m' });
}

module.exports = {
    generateToken
};