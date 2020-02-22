const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    // parse url
    const parsedUrl = url.parse(req.url, true);

    // get patth name
    const path = parsedUrl.pathname;
    
    // get method
    const method = parsedUrl.method;
    
    res.setHeader('Content Type', 'text/html');
    res.end("Hello World");
});

server.listen(3000, ()=> {
    console.log("Server running  on port 3000");
});