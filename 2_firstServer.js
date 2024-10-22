// lesson1 :

// const http = require('http');



// requerstLitener = (req,res ) =>{console.log(req.url, req.method, req.headers);
//   // process.exit(); //stops event loop
// }

// // creating a server
// const server = http.createServer(requerstLitener)
// // listening to server
// server.listen(2000, ()=>{console.log(`server running at http://localhost:2000`)});



// Lesson2: sending response from the server


const http = require('http');

requerstLitener = (req,res ) =>{console.log(req.url, req.method, req.headers);


// Response block: 
  res.setHeader('Content-Type', 'text/html');   //important to specify the content type
  res.write('<html>');
  res.write('<head><title>Node.js</title></head>');
  res.write('<body>Welcome to node js learning class</body>');
  res.write('</html>');
  res.end();   //ending the response


  // process.exit(); //stops event loop
}

const server = http.createServer(requerstLitener)

server.listen(2000, ()=>{console.log(`server running at http://localhost:2000`)});