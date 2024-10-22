const requerstLitener = require('./utils')
const http = require('http');


const server = http.createServer(requerstLitener)

server.listen(2000, ()=>{console.log(`server running at http://localhost:2000`)});


