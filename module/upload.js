 var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/employee',{useNewUrlParser:true});
var conn=mongoose.connection;
var uploadSchema=new mongoose.Schema({
	imagename:String,
	caption:String,

});
var uploadModel=mongoose.model('uploadimage',uploadSchema);
module.exports=uploadModel;