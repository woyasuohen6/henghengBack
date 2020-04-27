const Koa = require('koa');
const mongoose = require('mongoose');
const koaStatic = require('koa-static');
const error = require('koa-json-error');
const path = require('path');
const koaBody = require('koa-body');
const parameter = require('koa-parameter');

const routing = require('./routes');
const app = new Koa();

// const cors = require('koa2-cors');
// 开发时设置跨域请求
// app.use(cors({
//    origin: 'http://3chuang.woyasuohen6.cn',
//    credentials: true
// }));


// 连接数据库
const {
   connectionStr,
   port
} = require('./config')
mongoose.connect(connectionStr, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: false
}, () => console.log('db connect successfully'));
mongoose.connection.on('error', console.error);


/**
 * 搭建静态资源服务器
 * /public 存放后端的资源
 * /webRoot 存放前端打包之后的代码
 */
app.use(koaStatic(path.join(__dirname, '/public')));
app.use(koaStatic(path.join(__dirname, '/webRoot')));

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
      errCode: err.status,
      errMessage: err.message,
   }
}

// 注册路由
routing(app);

// 使用错误处理中间件
app.use(error(formatError));

/**
 * 统一数据返回格式
 * {
 *    errCode: 0,
 *    errMessage: 'OK',
 *    data: {}
 * }
 */
app.use(ctx => {
   if (ctx.status !== 200) return;
   ctx.body = {
      errCode: ctx.errCode || 0,
      errMessage: ctx.errMessage || 'OK',
      data: ctx.data || {}
   }
})

app.listen(port, () => console.log('server is listening ' + port));