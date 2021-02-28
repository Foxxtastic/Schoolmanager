const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log('Invalid Json Web Token');
            console.log(err);
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        next();
    })
};

module.exports = {
    authenticate
};