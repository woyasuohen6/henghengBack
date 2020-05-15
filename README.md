![](https://github.com/woyasuohen6/henghengBack/blob/master/public/imgs/logo.png)  
## 哼哼养殖后端  
### 技术栈
- koa2
- mongodb 
- mongoose
- 使用 jwt 鉴权
- 使用七牛云开发者平台进行图片存储
### 启动方法
- 安装 `node.js`   
- 安装并配置 `mongodb`    
- 注册并配置七牛云账号   
- git clone git@github.com:woyasuohen6/henghengBack.git
- npm install  
- 在根目录中创建配置文件 `config.js`，并输入以下配置信息  
```js
serverConfig = {
   // mongodb 数据库连接字符串
   MONGODB_CONNECT_STR: '',
   // jwt 密钥，可随机生成
   SECRET: '',
   // 服务端口
   PORT: 8083,
}

qiniuConfig = {
   // 七牛云密钥
   ACCESS_KEY: '',
   SECRET_KEY: '',
   // 七牛云空间名称
   BUCKET: '',
   // 七牛云公开域名
   PUBLIC_BUCKET_DOMAIN: ''
}

module.exports = {
   serverConfig,
   qiniuConfig
}
```
- npm run start

## 接口文档
[postman](https://documenter.getpostman.com/view/11406584/SzmiXw5x?version=latest)  

### 接口信息返回格式
所有信息返回都符合一下格式
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
- 其他错误信息
#### data
表示响应的数据

