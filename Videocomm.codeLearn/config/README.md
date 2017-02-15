Node.js配置文件
===============


## 开发环境

config/development.js

```js
module.exports = {
    port: 3000,
    mysql: {
        user: 'root'
    }
}
```

## 生产环境

config/production.js

```js
module.exports = {
  port: 80,
  mysql: {
    user: 'myapp',
    password: '2zbonsjzl305vkh3'
  }
};

```
## 导入配置

config/index.js

```js
var path = require('path');

// 通过NODE_ENV来设置环境变量，如果没有指定则默认为生产环境
var env = process.env.NODE_ENV || 'production';
env = env.toLowerCase();

// 载入配置文件
var file = path.resolve(__dirname, env);
try {
  var config = module.exports = require(file);
  console.log('Load config: [%s] %s', env, file);
} catch (err) {
  console.error('Cannot load config: [%s] %s', env, file);
  throw err;
}

```

入口文件app.js

```js
var config = require('./config');
console.log('listen on port %s',config.port);
```

测试

console in Linux or Mac

    export NODE_ENV=development

console in Windows

    SET  NODE_ENV=development


set in your js file

    process.env.NODE_ENV = 'production';


```
λ SET NODE_ENV=development  // 或 export NODE_ENV=development
λ node app
Load config: [development] D:\SVN2017\swz\Videocomm.codeLearn\config\development
listen on port 3001


```



参考

- [一种简单的生产环境部署Node.js程序方法](https://cnodejs.org/topic/53fec0d97c1e2284788983d6)
- [How to set NODE_ENV to production/development in OS X
](http://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x)