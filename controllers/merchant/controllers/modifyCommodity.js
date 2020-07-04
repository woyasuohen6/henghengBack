/**
 * 商家修改信息接口
 */
const Commodity = require('../../../models/commodity')

async function modifyCommodity(ctx, next) {
  ctx.verifyParams({
    name: {
      type: 'string',
      required: false,
    },
    price: {
      type: 'string',
      required: false,
    },
    description: {
      type: 'string',
      required: false,
    },
    type: {
      type: 'number',
      required: false,
    },
    predictTime: {
      type: 'number',
      required: false,
    },
    startTime: {
      type: 'date',
      required: false,
    },
    endTime: {
      type: 'date',
      required: false,
    },
    address: {
      type: 'string',
      required: false,
    },
    profit: {
      type: 'string',
      required: false,
    },
  })

  await Commodity.findOneAndUpdate(
    {
      _id: ctx.request.query.commodityId,
    },
    ctx.request.body
  )
  ctx.status = 200
  ctx.data = await Commodity.findById(ctx.request.query.commodityId)
  next()
}

module.exports = modifyCommodity
