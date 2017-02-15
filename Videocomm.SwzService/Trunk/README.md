Swz服务
=======

> 通过GraphQL发布所有服务

## 安装

```
yarn add express mysql2 sequelize sequelize-cli sequelize-auto mysql2
yarn add graphql graphql-relay sequelize-relay
yarn add body-parser morgan
λ yarn add -D nodemon
```


## Express Setup

app.js

```
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
```

.\bin\www

```
// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app'); // The express app we just created

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
```

package.json
```
"start:dev": "nodemon ./bin/www",
```

    yarn start

http://localhost:8080/

## [Sequelize Setup][1]


```
λ .\node_modules\.bin\sequelize init

Sequelize [Node: 6.9.4, CLI: 2.5.1, ORM: 3.30.2]

Created "config\config.json"
Successfully created migrations folder at "D:\SVN2017\swz\Videocomm.SwzService\Trunk\migrations".
Successfully created seeders folder at "D:\SVN2017\swz\Videocomm.SwzService\Trunk\seeders".
Successfully created models folder at "D:\SVN2017\swz\Videocomm.SwzService\Trunk\models".
Loaded configuration file "config\config.json".
Using environment "development".
```

.sequelize

```
const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};
```

## Generating Models

```
sequelize model:create --name Todo --attributes title:string
sequelize model:create --name TodoItem --attributes content:string,complete:boolean
```

models/todo.js 多对多关系
```
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: {
      DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.hasMany(models.TodoItem,{
          foreignKey: 'todoId',
          as: 'todoItems'
        })
      }
    }
  });
  return Todo;
};
```



参考

- [getting-started-with-node-express-and-postgres-using-sequelize][1]
- [better-node-with-es6-pt-i](https://scotch.io/tutorials/better-node-with-es6-pt-i)
- [better-javascript-with-es6-pt-ii-a-deep-dive-into-classes](https://scotch.io/tutorials/better-javascript-with-es6-pt-ii-a-deep-dive-into-classes)
- [better-javascript-with-es6-pt-iii-cool-collections-slicker-strings](https://scotch.io/tutorials/better-javascript-with-es6-pt-iii-cool-collections-slicker-strings)

[1]: https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize