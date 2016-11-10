var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var userSchema=new Schema({
	nombre:{type:String},
	nick:{type:String},
	email:{type:String},
	password:{type:String}
});

var User=mongoose.model("User",userSchema);

module.exports=User;