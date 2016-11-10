//npm modules
var express=require("express");
var app=express();

//core modules
var path=require("path");

//otros modulos
var raiz=__dirname+"/app";

//Configuración archivos estáticos
app.use("/",express.static("./app"));

//Endpoint de arranque
app.get("/",(req,res)=>{
res.sendFile("inicio.html",{root:raiz});
});

//Puerto de escucha
app.listen(8000);