/**
 * 商家注册接口
 */
const Merchant = require('../../../models/merchant');

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
      description: {
         type: 'string',
         required: true
      },
      address: {
         type: 'string',
         required: true
      }
   })

   const {
      name
   } = ctx.request.body
   const repeatedMerchant = await Merchant.findOne({
      name
   })
   if (repeatedMerchant) {
      ctx.status = 200;
      ctx.errCode = 4;
      ctx.errMessage = '该商家名已被注册！';
   } else {
      const merchant = await new Merchant(ctx.request.body).save();
      ctx.status = 200;
      ctx.data = merchant;
   }
   next();
}

module.exports = register;