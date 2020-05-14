/**
 * 上传商品封面图片中间件
 */
const Commodity = require('../../../models/commodity');

async function addCommodityImg(ctx, next) {
   const commodity = await Commodity.findOne({
      _id: ctx.params.commodityId,
      merchantId: ctx.id
   });
   commodity.img_url = ctx.url;
   await Commodity.findByIdAndUpdate(ctx.params.commodityId, commodity);
   ctx.status = 200;
   ctx.data = await Commodity.findById(ctx.params.commodityId);
   next();
}

module.exports = addCommodityImg;