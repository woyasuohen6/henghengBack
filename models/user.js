/**
 * 用户 model
 */
const mongoose = require('mongoose');
const {
   Schema,
   model
} = mongoose;

const userSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true,
      select: false,
   },
   phone: {
      type: String,
      required: true,
   }
})

module.exports = model('User', userSchema);