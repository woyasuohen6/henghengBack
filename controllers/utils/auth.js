const koa_jwt = require('koa-jwt');
const jwt = require('jsonwebtoken');

const {
   secret
} = require('../../config');

class Auth {
   auth = koa_jwt({
      secret,
      cookie: 'token'
   });

   // 获取请求 Cookie 中的 id
   async getId(ctx, next) {
      const token = ctx.cookies.get('token');
      const decoded = jwt.verify(token, secret);
      ctx.id = decoded._id;
      await next();
   }
   // 检查请求体中的商户 id 是否与 jwt 授权的商户 id 一致
   async checkMerchant(ctx, next) {
      const {
         merchantId
      } = ctx.request.body;
      if (ctx.id === merchantId) await next()
      else ctx.throw(402, '没有权限');
   }

   // 检查请求体中的用户 id 是否与 jwt 授权的用户 id 一致
   async checkUser(ctx, next) {
      const {
         userId
      } = ctx.request.body;
      if (ctx.id === userId) await next()
      else ctx.throw(402, '没有权限');
   }
}
module.exports = new Auth();