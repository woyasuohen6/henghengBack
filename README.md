![](https://github.com/woyasuohen6/henghengBack/blob/master/public/logo.png)
## 哼哼养殖后端  
### 技术栈
- koa
- mongodb 
- mongoose

### 启动方法
- 请先安装 `node.js` 和 `mongodb`  
- git clone git@github.com:woyasuohen6/henghengBack.git
- npm install
- 在根目录中创建配置文件 `config.js`
```js
module.exports = {

   // mongodb 的连接字符串
   connectionStr: 'mongodb://username:password@host:port/database',

   // 生成 token 的密钥 
   secret: 'secret',

   // 服务器端口号
   port: xxxx
}
```
- npm run start
