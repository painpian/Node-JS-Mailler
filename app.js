/*node js - node mailer
*created by pian maulana
*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var hbs = require('hbs');

//create server
app.listen(3000, function(){
	console.log('server is runing');
});

//body parse
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//setup mailer
var mail = nodemailer.createTransport({
				service : 'gmail',
				auth : {
					user: 'your email',
					pass: 'your password'
				}
			});

//setup view engine
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

//static file
app.use(express.static(__dirname + '/public'));

//register helper
hbs.registerHelper('extend', function(name, context){
	var block = blocks[name];
	if (!block) {
		block = blocks[name] = [];
	}

	block.push(context.fn(this));
});

hbs.registerHelper('block', function(name){
	var val = (blocks[name] || []).join('\n');

	blocks[name] = [];
	return val;
});

//partials
hbs.registerPartials(__dirname + '/views/partials');

//test mail function
app.get('/', function(req, res, next){
	res.render('mail', {
		layout : 'layout/main'
	});
});

app.post('/sendMail', function(req, res, next){
	var mailContent = {
		from : 'your email',
		to : req.body.recipients,
		subject: req.body.subject,
		text: req.body.content
	}

	mail.sendMail(mailContent, function(error, info){
		if(error) throw error;

		var data = {
		  'status': 200,
		  'values': 'Message sent'
		};
		res.json(data);
		res.end();
	});
});