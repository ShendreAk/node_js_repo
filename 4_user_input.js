// Lesson4: taking user input

const http = require('http');

requerstLitener = (req,res ) =>{console.log(req.url, req.method, req.headers);


// Response block: 
if (req.url === '/' ){
  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>')
    return res.end()   //ending the response 
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