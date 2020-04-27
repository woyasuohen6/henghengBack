/**
 * 用户注册中间件
 */
const User = require('../../../models/user');

async function register(ctx, next) {
   ctx.verifyParams({
      name: {
         type: 'string',
         required: true
      },
      password: {
         type: 'string',
         required: true
      },
      phone: {
         type: 'string',
         required: true
      }
   })

   const {
      name
   } = ctx.request.body;
   const repeatedUser = await User.findOne({
      name
   })
   if (repeatedUser) {
      ctx.status = 200;
      ctx.errMessage = '该用户名已被占用！';
      ctx.errCode = 4;
   } else {
      const user = await new User(ctx.request.body).save();
      ctx.status = 200;
      ctx.data = user;
   }
   next();
}

module.exports = register;