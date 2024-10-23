const express = require("express");
const path = require('path');

const host = require("./routes/host");
const user = require("./routes/user");
const userRouter = require('./routes/user');
const {hostRouter} = require("./routes/host");
const {registeredHomes} = require("./routes/host");
// const exp = require("constants");



const app = express();
// we have to then let express that we are using templating engine using app.set

app.set('view engine', 'ejs');
app.set('views','views');


app.use(express.urlencoded());
app.get("/",(req,res,next)=>{
  console.log(req.url , req.method);
  console.log(registeredHomes);
  res.render("home", {registeredHomes, pageTitle: "airbnb"})});
app.use("/users",userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(__dirname,"public")));
// 404 status middleware should be at last
app.use((req,res,next)=>{
  res.status(404).render("404",{pageTitle:"error page"})});




app.listen(3000);