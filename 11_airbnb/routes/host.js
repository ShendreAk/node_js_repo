const express = require("express");
const path = require('path');
const hostRouter = express.Router();
hostRouter.use(express.urlencoded());
hostRouter.get("/home",(req,res,next)=>{
  console.log(req.url , req.method);
  res.sendFile(path.join(__dirname,'../','/views',"addhome.html"));
  
  });

hostRouter.post("/home",(req,res,next)=>{
    console.log(req.url , req.body);
    res.sendFile(path.join(__dirname,'../','/views',"addhomepage.html"));
    
    });

module.exports = hostRouter;