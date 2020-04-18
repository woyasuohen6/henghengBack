/**
 * 商品 model
 */
const mongoose = require('mongoose');

const {
   Schema,
   model
} = mongoose;

const commoditySchema = new Schema({

   // 商家 id
   merchantId: {
      type: Schema.Types.ObjectId,
      ref: 'Merchant',
      required: true
   },

   // 商品名称
   name: {
      type: String,
      required: true,
   },

   // 商品价格
   price: {
      type: Number,
      required: true
   },

   // 商品描述
   description: {
      type: String,
      require: true
   },

   // 生长时间
   predictTime: {
      type: String,
      required: true
   },

   // 商品图片列表
   imgList: {
      type: [{
         type: String,
      }],
      required: false
   }
})

module.exports = model('Commodity', commoditySchema);