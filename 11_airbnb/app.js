const express = require("express");
const path = require('path');

const host = require("./routes/host");
const user = require("./routes/user");
const userRouter = require('./routes/user');
const hostRouter = require("./routes/host");
// const exp = require("constants");



const app = express();
app.use(express.urlencoded());
app.get("/",(req,res,next)=>{
  console.log(req.url , req.method);
  res.sendFile(path.join(__dirname,'/views',"home.html"));

});
app.use("/users",userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(__dirname,"public")));
// 404 status middleware should be at last
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'/views',"404.html"));

})


app.listen(3000);