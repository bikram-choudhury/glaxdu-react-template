const express = require('express');
const router = express.Router();
const fs = require('fs');
const utils = require('./utils');
const path = require('path');
const userDbPath = path.resolve(__dirname, './../fake/users.json');

router.post('/register', (request, response) => {
    const userData = request.body;
    fs.readFile(userDbPath, (error, data) => {
        if (error) {
            response.status(500).json({ message: 'No read acces for User DB' });
        } else {
            const users = JSON.parse(data.toString());
            const isExist = users.find(user => user.username === userData.username || user.email === userData.email);

            if (!!isExist) {
                const message = 'username/email already exist';
                response.status(400).json({ message });
            } else {
                users.push({ id: (users.length + 1), ...userData });

                fs.writeFile(userDbPath, JSON.stringify(users), (error, result) => {
                    if (error) {
                        response.status(500).json({ message: 'No write access to User DB' });
                    } else {
                        const accessToken = utils.createToken(userData);
                        response.status(200).json({
                            access_token: accessToken,
                            refresh_token: '',
                            token_type: 'Bearer'
                        });
                    }
                });
            }
        }
    })
});

router.post('/login', (request, response) => {
    const userData = request.body;
    fs.readFile(userDbPath, (error, data) => {
        if (error) {
            response.status(500).json({ message: 'No read acces for User DB' });
        } else {
            const users = JSON.parse(data.toString());
            const isExist = users.find(user => user.username === userData.username && user.password === userData.password);

            if (!isExist) {
                const message = 'Incorrect credentials';
                response.status(400).json({ message });
            } else {
                const accessToken = utils.createToken(userData);
                response.status(200).json({
                    access_token: accessToken,
                    refresh_token: '',
                    token_type: 'Bearer'
                });
            }
        }
    })
});

module.exports = router;