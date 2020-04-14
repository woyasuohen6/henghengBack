const path = require('path')

// 上传图片的中间件，返回图片的相对地址
module.exports = (ctx, next) => {
   const file = ctx.request.files.file;
   const basename = path.basename(file.path);
   ctx.url = basename;
   next();
}