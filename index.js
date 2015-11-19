var express = require("express");
var multer = require('multer');
var fs = require('fs');

var app = express();
	
app.use(multer({ dest: './uploads/',
	rename: function (fieldname, filename) {
		return filename;
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to ' + file.path)
	}
}));

app.get('/',function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(__dirname + '/'));

app.post('/upload', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get('/api/list', function (req, res) {
    res.send(fs.readdirSync('./uploads'));
});

app.listen(3000,function(){
    console.log("Working on port 3000");
});
