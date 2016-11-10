var express=require("express");
var router=express.Router();
var passport=require("passport");
var path=require("path");
var raiz=__dirname+"/../plantillas/gentelella-master/production";

var authMiddleware=require("../middlewares/auth");

router.route("/login").get((req,res)=>{
	res.sendFile("./login.html",{root:raiz});
})
.post(passport.authenticate('local-login',{
	successRedirect:'/profile',
	failureRedirect:'/user/login',
}));

router.route("/signup").
post(passport.authenticate('local-signup',{
	successRedirect:"/index.html",
	failureRedirect:"/error",

}));

router.route("/logout")
.get((req,res)=>{
	req.logout();
	res.redirect("/");
})

module.exports=router;