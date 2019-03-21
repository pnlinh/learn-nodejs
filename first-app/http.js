const http = require('http');

const server = http.createServer(((req, res) => {
    if (req.url === '/') {
        res.write('Hello NodeJs');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
}));

server.listen(3000);

// server.on('connection', socket => console.log('New connection...'));

console.log('Listening on port 3000...');