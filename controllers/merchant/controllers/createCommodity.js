/**
 * 创建商品中间件
 */
const Commodity = require('../../../models/commodity')

async function createCommodity(ctx, next) {
  ctx.verifyParams({
    name: {
      type: 'string',
      required: true,
    },
    price: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'number',
      required: true,
    },
    predictTime: {
      type: 'number',
      required: true,
    },
    endTime: {
      type: 'date',
      required: true,
    },
    startTime: {
      type: 'date',
      required: true,
    },
    address: {
      type: 'string',
      required: true,
    },
    weight: {
      type: 'number',
      required: false,
    },
    profit: {
      type: 'string',
      required: true,
    },
  })

  const { name } = ctx.request.body
  const repeatedCommodity = await Commodity.findOne({
    name,
    merchantId: ctx.id,
  })
  if (repeatedCommodity) {
    ctx.status = 200
    ctx.errMessage = '该商品已经存在!'
    ctx.errCode = 4
  } else {
    const commodity = await new Commodity({
      ...ctx.request.body,
      merchantId: ctx.id,
    }).save()
    ctx.status = 200
    ctx.data = commodity
  }
  next()
}

module.exports = createCommodity
