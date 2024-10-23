// const requerstLitener = require('./utils')
const http = require('http');


const server = http.createServer((req, res)=>{console.log(req.url, req.method);
  res.write("Started")
  return res.end()
})

server.listen(3000, ()=>{console.log(`server running at http://localhost:3 000`)});