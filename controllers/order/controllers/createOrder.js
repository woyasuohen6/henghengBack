/**
 * 创建订单模块
 */
const Order = require('../../../models/order');

async function createOrder(ctx, next) {
   ctx.verifyParams({
      merchantId: {
         type: 'string',
         required: true
      },
      commodityId: {
         type: 'string',
         required: true
      },
      count: {
         type: 'number',
         required: true
      },
      pay: {
         type: 'number',
         required: true
      }
   })


   const order = await new Order({
      ...ctx.request.body,
      userId: ctx.id
   }).save();
   ctx.status = 200;
   ctx.data = order;
   next();
}

module.exports = createOrder;