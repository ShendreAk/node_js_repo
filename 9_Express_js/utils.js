
const fs = require('fs');
const requerstLitener = (req,res ) =>{
  
  console.log(req.url, req.method);


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
  else if(req.url.toLowerCase()==='/submit-details' && req.method=='POST'){
    const body = []
  // when a new chunk is given 
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", ()=>{
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      const params = new URLSearchParams(parsebody);
      // const bodyobject = {};
      // for (const [key, value] of params.entries()){
      //   bodyobject[key] = value;
      // };
      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
  
      fs.writeFile("7_output.txt", JSON.stringify(bodyobject), (err)=>{if (err) throw err});
    }
    );
  
    res.statusCode = 302;
    res.setHeader('Location', '/');
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

  module.exports = requerstLitener;