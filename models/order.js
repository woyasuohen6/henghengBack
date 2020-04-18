/**
 * 订单 model
 */
const mongoose = require('mongoose');
const {
   Schema,
   model
} = mongoose;

const orderSchema = new Schema({

   // 用户 id
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },

   // 商家 id
   merchantId: {
      type: Schema.Types.ObjectId,
      ref: 'Merchant',
      required: true
   },

   // 商品 id
   commodityId: {
      type: Schema.Types.ObjectId,
      ref: 'Commodity',
      required: true
   },

   // 订单支付时间
   orderTime: {
      type: String,
      default: new Date(),
      required: false,
   },

   // 进度
   progress: {
      type: Number,
      default: 0,
      required: false
   },

   // 数量
   count: {
      type: Number,
      required: true
   },

   // 付款金额
   pay: {
      type: Number,
      required: true
   },

   // 订单是否完成
   finish: {
      type: Boolean,
      default: false,
      required: false
   }
})

module.exports = model('Order', orderSchema);