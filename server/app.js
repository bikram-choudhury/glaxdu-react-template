const bodyParser = require('body-parser');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const jsonServer = require('json-server');
const path = require('path');
const PORT = 8000;

const userDbPath = path.resolve(__dirname, '../fake/users.json');
const serverDbPath = path.resolve(__dirname, '../fake/DB.json');

const server = jsonServer.create();
const router = jsonServer.router(serverDbPath);

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = 'I am a Bad boy';
const expiresIn = '1hr';

const createToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY, (error, decode) => decode ? decode : error);
}

server.post('/auth/register', (request, response) => {
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
                        const accessToken = createToken(userData);
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

server.post('/auth/login', (request, response) => {
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
                const accessToken = createToken(userData);
                response.status(200).json({
                    access_token: accessToken,
                    refresh_token: '',
                    token_type: 'Bearer'
                });
            }
        }
    })
});

server.use(/^(?!\/auth).*$/, (request, response, next) => {
    const Authorization = request.headers.authorization;

    if (Authorization) {
        const tokenArr = Authorization.split(' ');
        if (tokenArr[0] === 'Bearer') {
            const accessToken = tokenArr[1];
            const decodedToken = verifyToken(accessToken);

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
});

server.use(router);

server.listen(PORT, () => {
    console.log('Auth API Server is running at ' + PORT);
});
