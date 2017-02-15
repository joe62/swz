// https://github.com/sequelize/sequelize/blob/master/docs/docs/models-definition.md

const Sequelize = require('sequelize');
//var sequelize = new Sequelize('post1', 'root', 'Videocomm1');
const sequelize = new Sequelize('mysql://root:Videocomm1@127.0.0.1:3306/post');

const Project = sequelize.define('project', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
});

const Task = sequelize.define('task', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  deadline: Sequelize.DATE
});

// 定义枚举
const Model = sequelize.define('model',{
	states:{
		type: Sequelize.ENUM, 
		values: ['active','pending','deleted']}
});

const Employee = sequelize.define('employee',{
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		get: function(){
			const title = this.getDataValue('title');
			return this.getDataValue('name')+'('+title+')';
		},
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		set: function(val){
			this.setDataValue('title', val.toUpperCase());
		}
	}
});

const Foo = sequelize.define('foo',{
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING
},{
	getterMethods:　{
		fullName: function(){
			return this.firstname+' '+this.lastname;
		}
	},
	setterMethods: {
		fullName: function(value){
			let names = value.split(' ');
			this.setDataValue('firstname',names.slice(0,-1).join(' '));
			this.setDataValue('lastname',names.slice(-1).join(' '));
		}
	}
})

Foo.create({
	fullName: 'Joe zheng'
}).then(foo=>{
	console.log(foo.get('firstname'));
	console.log(foo.get('lastname'))
})

//sequelize.sync();

// Employee
// 	.create({name: 'John Doe1',title: 'senior engineer1'})
// 	.then(employee=>{
// 		console.log(employee.get('name'));
// 		console.log(employee.get('title'));
// 	})


// sequelize.sync().then(()=>{
//   return Employee
// 	.create({name: 'John Doe',title: 'senior engineer'})
// 	.then(employee=>{
// 		console.log(employee.get('name'));
// 		console.log(employee.get('title'));
// 	})
// });


// var Foo = sequelize.define('foo',{
// 	//如果没有设置，实例化会自动将标志设置为true
// 	flag: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
// 	// dates的默认值=>当前时间
// 	myDate: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
// 	// 将allowNull设置为false将向列添加NOT NULL，这意味着如果列为空，
// 	// 则在执行查询时将从数据库抛出错误。 如果要在查询DB之前检查值不为null，
// 	// 请查看下面的验证部分。
// 	title: {type: Sequelize.STRING, allowNull: false},
// 	// 创建具有相同值的两个对象将抛出一个错误。 unique属性可以是布尔值，
// 	// 也可以是字符串。 如果为多个列提供相同的字符串，则它们将形成复合唯一键。
// 	someUnique: {type: Sequelize.STRING,unique: true},
// 	uniqueOne: {type: Sequelize.STRING, unique: 'compositeIndex'},
// 	uniqueTwo: {type: Sequelize.STRING, unique: 'compositeIndex'},
// 	//唯一属性只是创建唯一索引的简写。
// 	someUnique: {type: Sequelize.STRING,unique: true},
// 	//它与在模型的选项中创建索引完全相同。
//   {someUnique: {type: Sequelize.STRING}},
//   {indexes: [{unique: true, fields: ['someUnique']}]},
// 	//继续阅读有关主键的更多信息
//   identifier: { type: Sequelize.STRING, primaryKey: true},
//   // autoIncrement可用于创建auto_incrementing整数列
// 	incrementMe: { type: Sequelize.INTEGER, autoIncrement: true },
//   //可以为MySQL和PG的每个字段指定注释
//   hasComment: { type: Sequelize.INTEGER, comment: "评论!" },
//   //您可以通过“field”属性指定自定义字段名称：
//   fieldWithUnderscores: { type: Sequelize.STRING, field: "field_with_underscores" },
// 	//可以创建外键：
// 	bar_id: {
//    type: Sequelize.INTEGER,
//    references: {
//      // 这是对另一个模型的引用
//      model: Bar,

//      // 这是引用模型的列名称
//      key: 'id',

//      // 这声明了何时检查外键约束。 仅PostgreSQL。
//      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
//    }
//  }

// })
