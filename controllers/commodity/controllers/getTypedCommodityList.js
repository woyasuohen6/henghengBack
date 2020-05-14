/**
 * 按类别获取商品列表接口
 */
const Commodity = require('../../../models/commodity');

async function getCommodity(ctx, next) {
   const commodityList = await Commodity.find({
      type: ctx.request.query.typeId
   });
   ctx.status = 200;
   ctx.data = {
      goodsList: commodityList
   }
   next();
}

module.exports = getCommodity;