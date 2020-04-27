/**
 * 商家修改信息接口
 */
const Merchant = require('../../../models/merchant');

async function modify(ctx, next) {
   ctx.verifyParams({
      name: {
         type: 'string',
         required: false
      },
      password: {
         type: 'string',
         required: false
      },
      description: {
         type: 'string',
         required: false
      },
      address: {
         type: 'string',
         required: false
      }
   })

   const updatedMerchant = await Merchant.findOneAndUpdate({
      _id: ctx.id
   }, ctx.request.body);
   ctx.status = 200;
   ctx.data = updatedMerchant;
   next();
}

module.exports = modify;