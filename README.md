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

### 接口信息返回格式
所以的信息返回都符合一下格式
```json
{
   "errCode": 0,
   "errMessage": "OK",
   "data": {}
}
```
#### errCode 
表示本次请求的错误码
- 0: 请求成功
- 1: 参数校验失败
- 2: 用户未登录
- 3: 用户名不存在或密码错误
- 4: 用户名被占用
- 5：操作失败
- 6: 没有权限
- 404: not found
#### errMessage
表示本次请求的错误信息
- 'OK': 请求成功
#### data
表示响应的数据