const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/users') {
        res.write("  {name: \"John Doe\",email: \"john.doe@example.com\",address: \"123 Main St, Anytown USA\",cin:\"07491634\",phone: \"555-555-1234\",photo: \"/images/profil1.jpg\",}")
        res.end();
    }

    })


server.on('connection', (socket) => {
    console.log('a user connected')
});

server.listen(2000);
console.log('listening on *:2000')