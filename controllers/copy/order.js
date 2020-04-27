const Order = require('../models/order');
const Commodity = require('../models/commodity');

class OrderCtl {

   // 创建订单接口
   async create(ctx, next) {
      ctx.verifyParams({
         userId: {
            type: 'string',
            require: true
         },
         merchantId: {
            type: 'string',
            require: true
         },
         commodityId: {
            type: 'string',
            require: true
         },
         count: {
            type: 'string',
            require: true
         },
      })
      const { count, commodityId } = ctx.request.body;
      const commodity = await Commodity.findById(commodityId);
      ctx.request.body.pay = count * commodity.price;
      const order = await new Order(ctx.request.body).save();
      const orderDetail = await Order.findById(order._id).populate('merchantId userId commodityId');
      ctx.data = orderDetail;
      next();
   }

   // 获取订单列表
   async getOrder(ctx, next) {
      ctx.data = await Order.find({
         userId: ctx.id
      }).populate('userId commodityId merchantId')
      next();
   }
}

module.exports = new OrderCtl()