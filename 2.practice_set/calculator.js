const http = require('http')

const requestListner = (req, res )=>{
  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader("Content-Type", 'text/html');
    res.write(
      `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
          </head>
          <body>
              <nav>
                <center>
                    <h1>Welcome</h1>
                    <a href="/calculator">Calculator</a>
                </center>
                
              </nav>
  
        </body>
        </html>`
    );
    return res.end();
  }
  else if(req.url === '/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write(`<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Document</title>
                </head>
                <body>
                  <form action="/calculator-result" method="POST">
                    <label for="x_val">X</label>
                    <input type="text" name="x_val" id="x_val">
                    <label for="y_val">Y</label>
                    <input type="text" name="y_val" id="y_val">
                    <input type="submit" value="Sum">
                  </form>
                  
                </body>
                </html>`);
      return res.end();
  }
  else if(req.url === '/calculator-result' && 
    req.method==='POST'){ 
      console.log("inside /calculator-result")
      const body = [];
      res.on('data', (chunk)=>{
        body.push(chunk);
        console.log(body);
      });
      
      res.on('end', ()=>{
        const parserbody = Buffer.concat(body).toString();
        const params = new URLSearchParams(parserbody);
        const bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        const sum = Number(bodyObject.x_val) + Number(bodyObject.y_val);
        console.log(sum);
        res.write(`the sum is ${sum}`);
        return res.end();
      });
    

  }
};

const server = http.createServer(requestListner);
server.listen(2000, ()=>{console.log('server started')});