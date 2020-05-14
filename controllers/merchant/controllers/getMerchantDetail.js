/**
 * 获取商家详细信息接口
 */
const Merchant = require('../../../models/merchant');

async function getMerchantDetail(ctx, next) {
   let merchant;
   try {
      merchant = await Merchant.findById(ctx.request.query.merchantId);
   } catch (e) {
      ctx.status = 200;
      ctx.errMessage = '商户不存在！';
      ctx.errCode = 3;
   }
   if (!merchant) {
      ctx.status = 200;
      ctx.errMessage = '商户不存在！';
      ctx.errCode = 3;
   } else {
      ctx.status = 200;
      ctx.data = merchant;
   }
   next();
}

module.exports = getMerchantDetail;