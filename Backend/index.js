const http = require('http');
const { getTimeStories } = require('./router/routes');

const PORT = 3000;

const requestHandler = (req, res) => {
    if (req.url === '/getTimeStories' && req.method === 'GET') {
        getTimeStories(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
