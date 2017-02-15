const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');

let session = {};

const app = express();

app.use(bodyParser());

app.get('/login',(req,res)=>{
	res.sendFile('./files/index.html',{root,__dirname});
});

app.post('/login',(req,res)=>{
	res.end(JSON.stringify(req.body));
	if(req.body.username == 'admin' && req.body.password =='admin'){
		session.id=req.body.username;
	}
});

app.listen(8080,()=>{
	console.log('监听8080端口...')
})