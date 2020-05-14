/**
 * 用户登录中间件
 */
const User = require('../../../models/user');
const jsonwebtoken = require('jsonwebtoken');
const {
   serverConfig
} = require('../../../config');

async function login(ctx, next) {
   ctx.verifyParams({
      name: {
         type: 'string',
         required: true
      },
      password: {
         type: 'string',
         required: true
      }
   })
   const user = await User.findOne(ctx.request.body);
   if (!user) {
      ctx.status = 200;
      ctx.errCode = 3;
      ctx.errMessage = '用户名不存在或密码错误！';
   } else {
      const {
         _id,
         name
      } = user
      const token = jsonwebtoken.sign({
         _id,
         name
      }, serverConfig.SECRET, {
         expiresIn: '1d'
      });

      ctx.cookies.set('token', token, {
         maxAge: 1000 * 60 * 60 * 3, // cookie 有效时长 3h
         httpOnly: false, // 是否只用于 http 请求中获取
         overwrite: false // 是否允许重写
      });

      ctx.status = 200;
      ctx.data = user;
   }
   next();
}

module.exports = login;