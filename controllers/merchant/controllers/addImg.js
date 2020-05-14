/**
 * 商家上传图片接口
 */

const Merchant = require('../../../models/merchant');

async function addImg(ctx, next) {
   const merchant = await Merchant.findById(ctx.id);
   merchant.img_url = ctx.url;
   const newMerchant = await Merchant.findByIdAndUpdate(ctx.id, merchant);
   ctx.status = 200;
   ctx.data = newMerchant;
   next();
}

module.exports = addImg;