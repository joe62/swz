var Sequelize = require('sequelize');
// var User= require('./models/post/users');
// var Task = require('./models/post/tasks');
// var Project = require('./models/post/projects');
var sequelize = new Sequelize('post','root','Videocomm1',{
	host: 'localhost',
	dialect: 'mysql',//|'sqlite'|'mssql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});

var User = sequelize.import(__dirname+"/models/post/users");

// sequelize
// 	.authenticate()
// 	.then((err)=>{
// 		console.log('成功连接到数据库！');
// 	})
// 	.catch((err)=>{
// 		console.log('连接不到数据库：', err);
// 	});
	
// Users.findAll().then(function(users) {
//   console.log(users)
// });

User.findOne().then(user=>{
	console.log(user.get('username'))
})