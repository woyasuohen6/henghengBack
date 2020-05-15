const Merchant = require('../../../models/merchant');

async function merchantSales(ctx, next) {
   const merchantList = await Merchant.find();
   ctx.status = 200;
   ctx.data = merchantList.map(item => ({
      name: item.name,
      count: Math.floor(Math.random() * (100 - 1)) + 1
   }));
   next();

}
module.exports = merchantSales;