const jwt = require('jsonwebtoken');

const SECRET_KEY = 'I am a Bad boy';
const expiresIn = '1hr';

const createToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY, (error, decode) => decode ? decode : error);
}

module.exports = { createToken, verifyToken };