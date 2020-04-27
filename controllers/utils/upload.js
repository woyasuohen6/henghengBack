/**
 * 上传图片的中间件
 * 返回图片的相对地址
 */
const path = require('path');

module.exports = async (ctx, next) => {
   // console.log(ctx.request.files)
   const file = ctx.request.files.file;
   const basename = '/imgs/' + path.basename(file.path);
   ctx.url = basename;
   await next();
}