
1. [Example usage](http://docs.sequelizejs.com/en/v3/)
=======================================================

```js
var Sequelize = require('sequelize');
var sequelize = new Sequelize('post', 'root', 'Videocomm1');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});
```


```js
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
```

## 测试

```
λ node sequelize-getting_started\hello.js
Executing (default): INSERT INTO `users` (`id`,`username`,`birthday`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'janedoe','1980-07-19 16:00:00','2017-02-15 02:30:04','2017-02-15 02:30:04');
{ id: 3,
  username: 'janedoe',
  birthday: 1980-07-19T16:00:00.000Z,
  updatedAt: 2017-02-15T02:30:04.000Z,
  createdAt: 2017-02-15T02:30:04.000Z }
```

## SQL

```sql

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'janedoe', '1980-07-19 16:00:00', '2017-02-15 02:33:52', '2017-02-15 02:33:52');

```

2. Getting Started
===================

``` js
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

```

测试连接

```js
sequelize
  .authenticate()
  .then(err=>console.log('connection ok'))
  .catch(err=>console.log('connect err: ',err));
```

定义模型 

```js
const User = sequelize.define('user',{
  firstName: {
    type:　Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.sync({force: true}).then(()=>{
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
```

查询

  User.findAll().then(users=>console.log(users))

  User.findOne().then(user=>console.log(user));

## 多对多

![](many2many.png)

ProductCategory.belongsTo(Product);
ProductCategory.belongsTo(Category);
Product.hasMany(ProductCategory);


many2many.js

```js
const Sequelize = require('sequelize');
const db = new Sequelize('mysql://root:Videocomm1@127.0.0.1:3306/post');

const Product = db.define('product',{
    name: db.Sequelize.STRING
});

const Category = db.define('category',{
    name: db.Sequelize.STRING
});

const ProductCategory = db.define('product_category',{});

ProductCategory.belongsTo(Product);
ProductCategory.belongsTo(Category);
Product.hasMany(ProductCategory);

const seed = ()=> {
    return sync()
        .then(()=>{
            return Promise.all([
                Product.create({name: 'Tennis Raguet'}),
                Category.create({name: 'Sports'}),
                Category.create({name: 'Exercise'}),
                Product.create({name: 'Baseball Bat'}),
            ]);
        })
        .then( result => {
            //console.log(result[0].get());
            const tennisRqguet = result[0];
            const sports = result[1];
            const exercise = result[2];
            const baseballBat = result[3];
            return Promise.all([
                ProductCategory.create({productId: tennisRqguet.id,categoryId: sports.id}),
                ProductCategory.create({productId: tennisRqguet.id,categoryId: exercise.id}),
                ProductCategory.create({productId: baseballBat.id,categoryId: sports.id}),
            ])
        })
}

const sync = ()=>{
    return db.sync({force: true});
};

seed()
 .then(()=>console.log('synched'))
 .then(()=>{
     return Product.findAll({
         include:[{
             model: ProductCategory,
             include: [{
                 model: Category,
                 where: {name: 'Sports'}
             }]
         }]
     });
 })
 .then(products=>{
     products.forEach(product=>{
         console.log(product.name);
         product.product_categories.forEach(productCategory=>{
             console.log(productCategory.category.get())
         });

    });
 })
 .catch(e=>console.log(e));


```

