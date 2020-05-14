const Router = require('koa-router');

const router = new Router({
   prefix: '/commoditys'
})

const {
   getCommodityDetail,
   getTypedCommodityList,
   getCommodityList
} = require('../controllers/commodity');

/**
 * 获取商品详细信息接口
 * 不需要登录权限
 */
router.get('/getCommodityDetail', getCommodityDetail);

/**
 *  按类别获取商品列表接口
 *  不需要登录权限
 */
router.get('/getTypedCommodityList', getTypedCommodityList);

/**
 *  获取商品列表接口
 *  不需要登录权限
 */
router.get('/getCommodityList', getCommodityList);
module.exports = router;