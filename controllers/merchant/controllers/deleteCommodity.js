/**
 * 删除商品
 */
const Commodity = require('../../../models/commodity')

async function deleteCommodity(ctx, next) {
  const commodityId = ctx.request.query.commodityId || ''
  try {
    const result = await Commodity.deleteOne({
      _id: commodityId,
    })
    ctx.status = 200
    if (result.deletedCount === 0) {
      ctx.errMessage = '商品不存在！！'
      ctx.errCode = 5
    }
  } catch (err) {
    ctx.status = 200
    ctx.errMessage = '商品不存在！！'
    ctx.errCode = 5
  }
  next()
}

module.exports = deleteCommodity
