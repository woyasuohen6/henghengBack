/**
 * 商品 model
 */
const mongoose = require('mongoose');
const { qiniuConfig } = require('../config');

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
      type: String,
      required: true
   },

   // 商品描述
   description: {
      type: String,
      require: true
   },

   /**
    * 商品类别           
    * 1：农作物
    * 2：畜牧
    * 3：水果
    * 4：蔬菜
    */
   type: {
      type: Number,
      require: true
   },

   /**
    * 生长周期
    * 单位 天
    */
   predictTime: {
      type: Number,
      required: true
   },

   // 播种时间
   startTime: {
      type: Date,
      required: true
   },

   // 收获时间
   endTime: {
      type: Date,
      required: true
   },

   // 商品封面图片
   img_url: {
      type: String,
      required: false,
      default: qiniuConfig.PUBLIC_BUCKET_DOMAIN + '/imgs/logo.png'
   },

   // 商品介绍图片列表
   imgList: {
      type: [{
         type: String,
         required: false
      }],
      required: false
   },

   // 种植地址
   address: {
      type: String,
      required: true
   },

   /**
    * 成年体重
    * 该字段只有商品类别为 2 时才存在
    */
   weight: {
      type: Number,
      required: false
   },

   /**
    * 预计盈利
    */
   profit: {
      type: String,
      required: true
   }
})

module.exports = model('Commodity', commoditySchema);