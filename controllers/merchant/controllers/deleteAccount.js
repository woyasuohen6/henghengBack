/**
 * 商家账号删除接口
 */
const Merchant = require('../../../models/merchant');

async function deleteAccount(ctx, next) {
   const merchantId = ctx.request.query.merchantId || '';
   try{
      const result = await Merchant.deleteOne({
         _id: merchantId
      })
      ctx.status = 200;
      if(result.deletedCount === 0) {
         ctx.errMessage = '商家不存在！！';
         ctx.errCode = 5;
      }
   } catch(err) {
      ctx.status = 200;
      ctx.errMessage = '商家不存在！！';
      ctx.errCode = 5;
   }
   next();
}

module.exports = deleteAccount;