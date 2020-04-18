const User = require('../models/user');
const jsonwebtoken = require('jsonwebtoken');
const {
   secret
} = require('../config');

class UsersCtl {

   // 用户注册
   async register(ctx, next) {
      ctx.verifyParams({
         name: {
            type: 'string',
            require: true
         },
         password: {
            type: 'string',
            require: true
         },
         phone: {
            type: 'string',
            require: true
         }
      })

      const {
         name
      } = ctx.request.body;
      const repeatedUser = await User.findOne({
         name
      })
      if (repeatedUser) {
         ctx.errmsg = '该用户名已被占用';
         ctx.errno = 402;
      } else {
         const user = await new User(ctx.request.body).save();
         ctx.data = user;
      }
      next();
   }

   // 用户登录
   async login(ctx, next) {
      ctx.verifyParams({
         name: {
            type: 'string',
            require: true
         },
         password: {
            type: 'string',
            require: true
         }
      })
      const user = await User.findOne(ctx.request.body);
      if (!user) {
         ctx.errmsg = '用户名不存在或密码错误';
         ctx.errno = 404;
      } else {
         const {
            _id,
            name
         } = user
         const token = jsonwebtoken.sign({
            _id,
            name
         }, secret, {
            expiresIn: '1d'
         });
         ctx.cookies.set('token', token, {
            maxAge: 60 * 60 * 12, // cookie 有效时长
            httpOnly: false, // 是否只用于 http 请求中获取
            overwrite: false // 是否允许重写
         });
         ctx.status = 200;
         ctx.data = user;
      }
      next();
   }
}

module.exports = new UsersCtl()