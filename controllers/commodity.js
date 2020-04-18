const Commodity = require('../models/commodity');
const Merchant = require('../models/merchant');

class CommodityCtl {

   // 创建商品接口
   async create(ctx, next) {
      ctx.verifyParams({
         merchantId: {
            type: 'string',
            require: true
         },
         name: {
            type: 'string',
            require: true
         },
         price: {
            type: 'number',
            require: true
         },
         description: {
            type: 'string',
            require: true
         },
         predictTime: {
            type: 'string',
            require: true
         }
      })

      const {
         name,
         merchant
      } = ctx.request.body
      const repeatedCommodity = await Merchant.findOne({
         name,
         merchant
      })
      if (repeatedCommodity) {
         ctx.errmsg = '该商品已经存在！！！';
         ctx.errno = 402;
      } else {
         const commodity = await new Commodity(ctx.request.body).save();
         ctx.data = commodity;
      }
      next();
   }

   // 获取商品列表
   async getCommodity(ctx, next) {
      ctx.data = await Commodity.find({
         merchantId: ctx.params.MerchantId
      })
      next();
   }
}

module.exports = new CommodityCtl()