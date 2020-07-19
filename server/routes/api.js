const express = require('express');
const router = express.Router();
const path = require('path');
const jsonServer = require('json-server');
const utils = require('./utils');

const authRouter = require('./auth');
router.use('/auth', authRouter);

const serverDbPath = path.resolve(__dirname, './../fake/DB.json');
const jsonServerDbMiddleware = jsonServer.router(serverDbPath);

const authMiddleware = (request, response, next) => {
    const Authorization = request.headers.authorization;

    if (Authorization) {
        const tokenArr = Authorization.split(' ');
        if (tokenArr[0] === 'Bearer') {
            const accessToken = tokenArr[1];
            const decodedToken = utils.verifyToken(accessToken);

            if (decodedToken instanceof Error) {
                const message = 'Invalid Access token provided';
                response.status(401).json({ message });
            } else {
                next();
            }
        } else {
            const message = 'Error in authorization format';
            response.status(401).json({ message });
        }
    } else {
        const message = 'Authorization is not provided in header';
        response.status(401).json({ message });
    }
};

router.use(authMiddleware, jsonServerDbMiddleware);


module.exports = router;