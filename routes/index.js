var express = require('express');
var bodyParser = require('body-parser');
var app = express();

/*app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
*/
var urlencodeParser = bodyParser.urlencoded();
var jsonParser = bodyParser.json()
var uploadModel=require('../module/upload');
var userModel=require('../module/signup');
var multer=require('multer');
var path=require('path'); 
var router = express.Router();
var imageData=uploadModel.find({});



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use(express.static(__dirname+"./public/"));//static path hai is public folder k andr sarri static file hai


var Storage= multer.diskStorage({
  destination:"./public/upload/",
  filename:(req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
  storage:Storage
}).single('file');	


router.get('/upload', function(req, res, next) {
	imageData.exec(function(err,data){
				if(err) throw err;
		res.render('upload', { title: 'Upload file',record:data})
		 });

	});
router.post('/upload',upload, function(req, res, next) { // this upload is the middle ware
		var imageFile=req.file.filename;
		var Success=req.file.filename+ "Uploaded Succesfully";
		var imageDetails=new uploadModel({
			imagename:imageFile
		});
		imageDetails.save(function(err,doc){
			if(err) throw err;
			imageData.exec(function(err,data1){
				if(err) throw err;
				res.render('upload', { title: 'Upload file',record:data1, success:Success });

			});
			//res.render('upload-file', { title: 'Upload file',success:Success });

		});
		//res.render('upload-file', { title: 'Upload file',success:success });


	});
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/*Signup*/


router.get('/signup', function(req, res, next) {
	console.log("Hello");
		//const form = JSON.parse(JSON.stringify(req.body))
		var mail=req.body;
		console.log("hi");
		console.log(mail);
		console.log("hi");


});

router.post('/signup',urlencodeParser, function(req, res, next) {
	
	/*var mail=request.params.mail;
	var name=request.params.user;
	var pass=request.params.pass;
	console.log("1.....fovno");
	console.log("jhvjz");
	console.log(request.params.mail);
	console.log(request.params.name);
	console.log(request.params.pass);
	var userDetails=new userModel({
		email:mail,
		username:name,
		password:pass,
	});
	console.log("2..second");
	userDetails.save((err,doc)=>{
	if(err) throw err;
 	res.render('index', { title: 'Woman-Empowerment',msg:'User Registered Succesfully' });
	
	
	});*/
		console.log("Hello");
		//const form = JSON.parse(JSON.stringify(req.body))
		var mail=req.body;
		console.log("hi");
		console.log(mail);
		console.log("hi");

});
/*

router.get('/signup', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/signup', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

/* After Login Welcome page*/
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Express' });
});
router.post('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Express' });
});



router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/upload', function(req, res, next) {
  res.render('upload', { title: 'Express' });
});



module.exports = router;
