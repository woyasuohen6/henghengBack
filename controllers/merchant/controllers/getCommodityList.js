/**
 * 获取商品列表接口
 */
const {
   splicingUrlList
} = require('../../utils/url');
const Commodity = require('../../../models/commodity');

async function getCommodity(ctx, next) {
   const commodity = await Commodity.find({
      merchantId: ctx.request.query.merchantId
   });
   splicingUrlList(ctx, commodity);
   ctx.status = 200;
   ctx.data = {
      goodsList: commodity
   }
   next();
}

module.exports = getCommodity;