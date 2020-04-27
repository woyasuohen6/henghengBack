/**
 * 上传商品封面图片中间件
 */
const Commodity = require('../../../models/commodity');
const { deleteImg } = require('../../utils/deleteImg');

async function addCommodityImg(ctx, next) {
   const commodity = await Commodity.findOne({
      _id: ctx.params.commodityId,
      merchantId: ctx.id
   });
   deleteImg(commodity.img_url);
   commodity.img_url = ctx.url;
   const newCommodity = await Commodity.findByIdAndUpdate(ctx.params.commodityId, commodity);
   ctx.status = 200;
   ctx.data = newCommodity;
   next();
}

module.exports = addCommodityImg;