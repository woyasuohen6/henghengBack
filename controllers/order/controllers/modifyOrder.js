/**
 * 修改订单状态信息
 */
const Order = require('../../../models/order');

async function modifyOrder(ctx, next) {
   ctx.verifyParams({
      progress: {
         type: 'number',
         required: false
      },
      description: {
         type: 'string',
         required: false
      }

   })

   await Order.findOneAndUpdate({
      _id: ctx.request.query.orderId
   }, {
      ...ctx.request.body,
      Updatetime: new Date()
   });
   ctx.status = 200;
   ctx.data = await Order.findById(ctx.request.query.orderId);
   next();
}

module.exports = modifyOrder;