const Merchant = require('../../../models/merchant');
const jsonwebtoken = require('jsonwebtoken');
const {
   serverConfig
} = require('../../../config');

// 商家登录接口
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
   const merchant = await Merchant.findOne(ctx.request.body);
   if (!merchant) {
      ctx.status = 200;
      ctx.errCode = 3;
      ctx.errMessage = '商家名不存在或密码错误！';
   } else {
      const {
         _id,
         name
      } = merchant

      const token = jsonwebtoken.sign({
         _id,
         name
      }, serverConfig.SECRET, {
         expiresIn: '1d'
      });

      ctx.cookies.set('token', token, {
         maxAge: 60 * 60 * 3 * 1000, // cookie 有效时长 3h
         httpOnly: false, // 是否只用于 http 请求中获取
         overwrite: false // 是否允许重写
      });
      ctx.status = 200;
      ctx.data = merchant;
   }
   next();
}

module.exports = login;