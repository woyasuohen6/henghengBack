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
      type: Date,
      default: new Date(),
      required: false,
   },

   // 种植/养殖进度
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
   },

   /**
    * 订单状态信息
    */
   description: {
      type: String,
      required: false
   },

   /**
    * 订单更新时间
    */
   Updatetime: {
      type: Date,
      required: false,
      default: new Date()
   }
})

module.exports = model('Order', orderSchema);