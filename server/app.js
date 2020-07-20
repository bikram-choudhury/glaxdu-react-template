const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8000;

const server = express();

const cors = require('cors');
server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'client-bundle', 'build')));

const apiRouter = require('./routes/api');
server.use('/api', apiRouter);

server.get('/*', (req, res) => {
    const filePath = path.join(__dirname, 'client-bundle', 'build', 'index.html');
    res.sendFile(filePath);
});

server.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

server.use((err, req, res, next) => {
    // set locals, only providing error in development
    const env = req.app.get('env');
    const response = {
        message: err.message,
        err: env === 'development' ? err : {},
    };
    res.status(err.status || 500).send(response);
});

server.listen(PORT, () => {
    console.log('Server is running at ' + PORT);
});
