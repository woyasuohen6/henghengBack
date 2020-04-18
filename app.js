const Koa = require('koa');
const mongoose = require('mongoose');
const koaStatic = require('koa-static');
const error = require('koa-json-error');
const path = require('path');
const koaBody = require('koa-body');
const parameter = require('koa-parameter');
const cors = require('koa2-cors');

const routing = require('./routes');
const app = new Koa();


// 开发时设置跨域请求
app.use(cors({
   origin: 'http://localhost:3000',
   credentials: true
}));


// 连接数据库
const {
   connectionStr,
   port
} = require('./config')
mongoose.connect(connectionStr, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}, () => console.log('db connect successfully'));
mongoose.connection.on('error', console.error);


// 搭建静态资源服务器
app.use(koaStatic(path.join(__dirname, '/public')));



// 解析请求体，并保存上传的图片
app.use(koaBody({
   multipart: true,
   formidable: {
      uploadDir: path.join(__dirname, '/public/imgs'),
      keepExtensions: true,
      maxFieldsSize: 20 * 1024 * 1024
   }
}));

// 参数校验
app.use(parameter(app));


// 错误处理
function formatError(err) {
   return {
      errno: err.status,
      errmsg: err.message
   }
}

// 使用错误处理中间件
app.use(error(formatError));

// 注册路由
routing(app);

// 统一数据返回格式
app.use(ctx => {
   ctx.body = {
      errno: ctx.errno || 200,
      errmsg: ctx.errmsg || '',
      data: ctx.data
   }
})

app.listen(port, () => console.log('server is listening ' + port));