const requerstLitener = require('./utils')



// import express
const express = require('express')
// initiates express as a method app this app is like eventListner
const app = express();


// adding middleware
// app.use("/",(req,res,next)=>{
//   console.log(req.url, req.method);
//   console.log('first middleware');
//   // res.send("<h1>Welcome!!!</h1>");
//   next();
// });

// app.use("/submit",(req,res,next)=>{
//   console.log('second middleware');
//   res.send("<h1>Welcome!!! to second middleware</h1>");
//   next();
// });

app.get("/",(req,res,next)=>{
  console.log(req.url, req.method);
  console.log('came in first middleware');
  // res.send("<h1>Welcome!!! through get request</h1>");
  next();
});

app.use("/",(req,res,next)=>{
  console.log(req.url, req.method);
  console.log('first middleware!!!');
  res.send("<h1>Welcome!!!</h1>");
  
});

app.post("/submit",(req,res,next)=>{
  console.log('second middleware');
  res.send("<h1>Welcome!!! to second middleware</h1>");
  next();
});

// app creates server and starts listening to it
app.listen(2001, ()=>{console.log(`server running at http://localhost:2000`)});


