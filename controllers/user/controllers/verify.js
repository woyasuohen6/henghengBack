/**
 * 用户验证中间件
 */
const jwt = require('jsonwebtoken');
const {
   serverConfig
} = require('../../../config');

async function verify(ctx, next) {
   const token = ctx.cookies.get('token');
   try {
      jwt.verify(token, serverConfig.SECRET);
   } catch (e) {
      ctx.errMessage = '用户未登录，请重新登录！';
      ctx.errCode = 2;
   }
   ctx.status = 200;   
   await next();
}

module.exports = verify;