/**
 * 创建商品接口
 */
const Commodity = require('../../../models/commodity');

async function create(ctx, next) {
   ctx.verifyParams({
      name: {
         type: 'string',
         required: true
      },
      price: {
         type: 'string',
         required: true
      },
      description: {
         type: 'string',
         required: true
      },
      type: {
         type: 'number',
         required: true
      },
      predictTime: {
         type: 'number',
         required: true
      },
      startTime: {
         type: 'date',
         required: true
      },
      endTime: {
         type: 'date',
         required: true
      },
      address: {
         type: 'string',
         requiredd: true
      },
      weight: {
         type: 'string',
         required: false
      },
      profit: {
         type: 'string',
         required: true
      }
   })

   const {
      name
   } = ctx.request.body
   const repeatedCommodity = await Commodity.findOne({
      name,
      merchantId: ctx.id
   })
   if (repeatedCommodity) {
      ctx.status = 200;
      ctx.errMessage = '该商品已经存在！！！';
      ctx.errCode = 4;
   } else {
      const commodity = await new Commodity({
         ...ctx.request.body,
         merchantId: ctx.id
      }).save();
      ctx.data = commodity;
   }
   next();
}

module.exports = create;