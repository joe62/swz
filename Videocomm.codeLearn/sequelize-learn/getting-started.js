const Sequelize = require('sequelize');

const sequelize = new Sequelize('post','root','Videocomm1',{
	localhost: 'localhost',
	dialect: 'mysql',
	pool:　{
		max: 5,
		min: 0,
		idle: 10000
	}
});

// const User = sequelize.define('user',{
// 	firstName: {
// 		type:　Sequelize.STRING,
// 	},
// 	lastName: {
// 		type: Sequelize.STRING
// 	}
// });

// User.sync({force: true}).then(()=>{
// 	return User.create({
// 		firstName: 'John',
// 		lastName: 'Hancock'
// 	});
// });

// User.findAll().then(users=>console.log(users))

const Article = sequelize.define('Article',{
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

// sequelize.sync().then(()=>{
// 	Article.create({
// 		title: 'demo title',
// 		body: 'Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these introductory videos.'
// 	})
// })

sequelize.sync().then(()=>{
	// Article.findById(1).then((article)=>{
	// 	console.log(article.dataValues);
	// });

	Article.findAll().then(articles=>{
		console.log(articles.length)
	});
})