const express = require("express");
const path = require('path');

const {registeredHomes} = require("./host")
const userRouter = express.Router();
userRouter.use(express.urlencoded());
userRouter.get("/",(req,res,next)=>{
  console.log(req.url , req.method);
  console.log(registeredHomes);
  res.render("home")});

module.exports = userRouter;