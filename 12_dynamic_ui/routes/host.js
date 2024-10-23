const express = require("express");
const path = require('path');

const hostRouter = express.Router();

hostRouter.use(express.urlencoded());
hostRouter.get("/home",(req,res,next)=>{
  console.log(req.url , req.method);
  res.sendFile(path.join(__dirname,'../','/views',"addhome.html"));
  
  });
const registeredHomes = [];
hostRouter.post("/home",(req,res,next)=>{
    // console.log(req.url , req.body);
    registeredHomes.push({"HomeName": req.body.houseName, "HomePrice": req.body.housePrice, "HomeLocation": req.body.HomeLocation, "HomeImage": req.body.HomeImage})
    // console.log(registeredHomes);
    res.render('home', {registeredHomes, pageTitle: "airbnb"});
    
    });

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;