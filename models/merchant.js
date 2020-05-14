/**
 * 商家信息的 Model
 */

const mongoose = require('mongoose');
const { qiniuConfig } = require('../config');

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
      select: false
   },

   // 商家封面图片
   img_url: {
      type: String,
      required: false,
      default: qiniuConfig.PUBLIC_BUCKET_DOMAIN + '/imgs/logo.png'
   }
})

module.exports = model('Merchant', merchantSchema);