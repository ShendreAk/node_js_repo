const http =require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{console.log(req.url); console.log(req.method); console.log(req.headers);
  if(req.url === '/'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<html lang="en">
<head>
  <title>Myntra</title>
</head>
<body>
  <head>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </head>
</body>
</html>
  `);
    return res.end()
  }
  else if (req.url.toLowerCase()==='/home'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <nav>
    <center>
    <h1> Welcome to Home</h1>
  </center>
    
  </nav>
  
</body>
</html>`);
    return res.end()
  }

  else if (req.url.toLowerCase()==='/men'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <nav>
    <center>
    <h1> Welcome to Men</h1>
  </center>
    
  </nav>
  
</body>
</html>`);
    return res.end()
  }
  else if (req.url.toLowerCase()==='/women'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <nav>
    <center>
    <h1> Welcome to Women</h1>
  </center>
    
  </nav>
  
</body>
</html>`);
    return res.end()
  }
  else if (req.url.toLowerCase()==='/kids'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <nav>
    <center>
    <h1> Welcome to Kids section</h1>
  </center>
    
  </nav>
  
</body>
</html>`);
    return res.end()
  }
  else if (req.url.toLowerCase()==='/cart'){
    // res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <nav>
    <center>
    <h1> Welcome to Cart</h1>
  </center>
    
  </nav>
  
</body>
</html>`);
    return res.end()
  }

});

server.listen(2000,()=>{console.log(`server running at http://localhost:2000`)});