const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next)=>{
  console.log(req.url, req.method);
  console.log("my first middleware");
  next();
});
app.use((req, res, next)=>{
  console.log(req.url, req.method);
  console.log("my second middleware");
  next();
});
// app.use((req, res, next)=>{
//   console.log(req.url, req.method);
//   console.log("my first middleware");
//   res.send("<h1>response of third middleware</h1>");
// });

app.get("/",(req, res, next)=>{
  console.log(req.url, req.method);
  console.log("my home middleware");
  next();
});

app.get("/contact-us",(req, res, next)=>{
  console.log(req.url, req.method);
  console.log("my contact-form middleware");
  res.send(`<html>
              <body>
                <form action="/contact-us" method="POST">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name">
                    <label for="email">email</label>
                    <input type="text" name="email" id="email">
                    <input type="submit" value="Submit">
                </form>
                
              </body>
            </html>`);
});

app.post("/contact-us",(req, res, next)=>{
  console.log(req.url, req.method);
  console.log("my contact-info middleware");
  const body = []
  req.on('data', (chunk)=>{
    body.push(chunk);
    console.log(body);
  });
  req.on('end', ()=>{
    const parsebody = Buffer.concat(body).toString();
    const params = new URLSearchParams(parsebody);
    const bodyObject = Object.fromEntries(params);
    fs.writeFile("output.txt", JSON.stringify(bodyObject), (error)=>{if (error) throw error});
    res.send(`<h1>${JSON.stringify(bodyObject)}</h1>`);
    
  })
  
});


app.listen(3000);