 var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Woman',{useNewUrlParser:true,useCreateIndex:true,});
var conn=mongoose.connection;
var userSchema=new mongoose.Schema({
	
	email:
	{
		type:String,
		required:true,
		index:{
			unique:true,
		}
	},
	username:
	{
		type:String,
		required:true,
		index:{
			unique:true,
		}
	},
	password:
	{
		type:String,
		required:true,
	},
	date:{
	type:Date,
	default:Date.now
	}
});
var userModel=mongoose.model('signupuser',userSchema);
module.exports=userModel; 
	
		