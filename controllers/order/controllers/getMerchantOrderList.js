/**
 * 获取商家订单列表
 */


const Order = require('../../../models/order');

async function getMerchantOrderList(ctx, next) {
   const order = await Order.find({
      merchantId: ctx.id
   });
   ctx.status = 200;
   ctx.data = order;
   next();
}

module.exports = getMerchantOrderList;