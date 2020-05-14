/**
 * 获取商品详细信息中间件
 */
const Commodity = require('../../../models/commodity');

async function getCommodityDetail(ctx, next) {
   const commodity = await Commodity.findById(ctx.request.query.commodityId);
   ctx.status = 200;
   ctx.data = commodity
   next();
}

module.exports = getCommodityDetail;