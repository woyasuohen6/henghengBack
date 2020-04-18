/**
 * 商家信息的 Model
 */

const mongoose = require('mongoose');

const {
   Schema,
   model
} = mongoose;

const merchantSchema = new Schema({

   // 商家名称
   name: {
      type: String,
      required: true,
   },

   // 商家地址
   address: {
      type: String,
      required: true
   },

   // 商家描述信息
   description: {
      type: String,
      require: true
   },

   // 商家登录密码
   password: {
      type: String,
      required: true,
      select: true
   },

   // 商家图片列表
   imgList: {
      type: [{
         type: String,
      }],
      required: false
   },
})

module.exports = model('Merchant', merchantSchema);