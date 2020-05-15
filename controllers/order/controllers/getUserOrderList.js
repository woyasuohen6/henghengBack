/**
 * 获取用户订单列表
 */


const Order = require('../../../models/order');

async function getUserOrderList(ctx, next) {
   const order = await Order.find({
      userId: ctx.id
   });
   ctx.status = 200;
   ctx.data = order;
   next();
}

module.exports = getUserOrderList;