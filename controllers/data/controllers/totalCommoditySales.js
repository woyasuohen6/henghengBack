const Commodity = require('../../../models/commodity');

async function totalCommoditySales(ctx, next) {
   const commodityList = await Commodity.find()
   ctx.status = 200;
   ctx.data = commodityList.map(item => ({
      name: item.name,
      count: Math.floor(Math.random() * (100 - 1)) + 1
   }));
   next();

}
module.exports = totalCommoditySales;