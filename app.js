const Koa = require('koa');
const mongoose = require('mongoose');
const koaStatic = require('koa-static');
const error = require('koa-json-error');
const routing = require('./routes');
const path = require('path');
const koaBody = require('koa-body');  

const app = new Koa();
// 连接数据库
const {
   connectionStr
} = require('./config')
mongoose.connect(connectionStr, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, () => console.log('db connect successfully'));
mongoose.connection.on('error', console.error);

// 搭建静态资源服务器
app.use(koaStatic(path.join(__dirname, '/public')));

// 使用错误处理中间件
app.use(error());  

// 解析请求体，并保存上传的图片
app.use(koaBody({
   multipart: true,
   formidable: {
      uploadDir: path.join(__dirname, '/public/imgs'),
      keepExtensions: true,
      maxFieldsSize: 20 * 1024 * 1024
   }
}));

// 注册路由
routing(app);
app.listen(8083, () => console.log('server is listening 8083'));