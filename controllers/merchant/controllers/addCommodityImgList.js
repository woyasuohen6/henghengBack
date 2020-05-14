/**
 * 上传商品介绍图片中间件
 */
const Commodity = require('../../../models/commodity');

async function addCommodityImgList(ctx, next) {
   const commodity = await Commodity.findOne({
      _id: ctx.params.commodityId,
      merchantId: ctx.id
   });
   commodity.imgList.push(ctx.url);
   await Commodity.findByIdAndUpdate(ctx.params.commodityId, commodity);
   ctx.status = 200;
   ctx.data = await Commodity.findById(ctx.params.commodityId);
   next();
}

module.exports = addCommodityImgList;