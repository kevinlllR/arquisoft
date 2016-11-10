//npm modules
var express=require("express");
var session=require("express-session");
var cookie=require("cookie-parser");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var app=express();

//core modules
var path=require("path");

//otros modulos
var raiz=__dirname+"/app";
var config=require("./config/database");
var passport=require("passport");
var authRoutes=require("./routes/auth");

mongoose.connect("mongodb://edwin:edwin@ds149567.mlab.com:49567/edwin");

require("./config/passport.js");

//Configuración archivos estáticos
app.use("/",express.static("./plantillas/gentelella-master/production"));
app.use("/vendors",express.static("./plantillas/gentelella-master/vendors"))
app.use("/build",express.static("./plantillas/gentelella-master/build"))

app.use("/",express.static("./app"));
app.use(cookie());
app.use(bodyParser());

app.use(session({secret:"ASDASDSAD"}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/user",authRoutes);
//Endpoint de arranque
app.get("/",(req,res)=>{
res.sendFile("inicio.html",{root:raiz});
});

//Puerto de escucha
app.listen(8000);