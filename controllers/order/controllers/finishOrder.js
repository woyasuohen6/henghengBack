/**
 * 完成订单
 */

const Order = require('../../../models/order');

async function finishOrder(ctx, next) {
   ctx.verifyParams({
      description: {
         type: 'string',
         required: false
      }

   })

   await Order.findOneAndUpdate({
      _id: ctx.request.query.orderId
   }, {
      ...ctx.request.body,
      Updatetime: new Date(),
      progress: 100,
      finish: true
   });
   ctx.status = 200;
   ctx.data = await Order.findById(ctx.request.query.orderId);
   next();
}

module.exports = finishOrder;