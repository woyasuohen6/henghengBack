const Merchant = require('../models/merchant');
const jsonwebtoken = require('jsonwebtoken');

const {
   secret
} = require('../config')

class MerchantCtl {

   // 商家注册接口
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
         description: {
            type: 'string',
            require: true
         },
         address: {
            type: 'string',
            require: true
         }
      })

      const {
         name
      } = ctx.request.body
      const repeatedMerchant = await Merchant.findOne({
         name
      })
      if (repeatedMerchant) {
         ctx.errmsg = '该商家名已被注册！';
         ctx.errno = 402;
      } else {
         const merchant = await new Merchant(ctx.request.body).save();
         ctx.data = merchant;
      }
      next();
   }

   // 商家登录接口
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
      const merchant = await Merchant.findOne(ctx.request.body);
      if (!merchant) {
         ctx.errmsg = '商家名不存在或密码错误！';
         ctx.errno = 404;
      }
      const {
         _id,
         name
      } = merchant

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
      ctx.data = merchant;
      next();

   }

   
}

module.exports = new MerchantCtl()