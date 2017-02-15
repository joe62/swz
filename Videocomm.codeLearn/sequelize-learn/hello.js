const Sequelize = require('sequelize');
//var sequelize = new Sequelize('post1', 'root', 'Videocomm1');
const sequelize = new Sequelize('mysql://root:Videocomm1@127.0.0.1:3306/post1');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(()=>{
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then((jane)=>{
  console.log(jane.get({
    plain: true
  }));
});