// Lesson3: Routing request


const http = require('http');

requerstLitener = (req,res ) =>{console.log(req.url, req.method, req.headers);


// Response block: 
if (req.url === '/' ){
  res.setHeader('Content-Type', 'text/html');   //important to specify the content type
  res.write('<html>');
  res.write('<head><title>Node.js</title></head>');
  res.write('<body>Welcome to node js learning class</body>');
  res.write('</html>');
  return res.end();   //ending the response 
}
else if(req.url === '/preview'){
  res.setHeader('Content-Type', 'text/html');   //important to specify the content type
  res.write('<html>');
  res.write('<head><title>Node.js</title></head>');
  res.write('<body><h1>Like/share/subscribe </h1></body>');
  res.write('</html>');
  return res.end();
}
else{
  res.setHeader('Content-Type', 'text/html');   //important to specify the content type
  res.write('<html>');
  res.write('<head><title>Node.js</title></head>');
  res.write('<body>Bye!!!!</body>');
  res.write('</html>');
  return res.end();
}




  // process.exit(); //stops event loop
}

const server = http.createServer(requerstLitener)

server.listen(2000, ()=>{console.log(`server running at http://localhost:2000`)});