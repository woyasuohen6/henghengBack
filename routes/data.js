const Router = require('koa-router');
const {
   typedSales,
   totalMonthlySales,
   monthlySales,
   commoditySales,
   totalCommoditySales,
   merchantSales
} = require('../controllers/data');
const {
   auth,
   getId
} = require('../controllers/utils/auth');
const router = new Router({
   prefix: '/datas'
})


/**
 * 按类别查询商品销量接口
 */
router.get('/typedSales', typedSales);

/**
 * 查询所有商品月销量接口
 */
router.get('/totalMonthlySales', totalMonthlySales);

/**
 * 查询某个商家的月销量
 */
router.get('/monthlySales', monthlySales);

/**
 * 查询某个商家的商品销量
 */
router.get('/commoditySales', auth, getId, commoditySales);

/**
 * 查询所有的商品销量
 */
router.get('/totalCommoditySales', auth, totalCommoditySales);

/**
 * 查询不同商家的销量
 */
router.get('/merchantSales', auth, merchantSales);

module.exports = router;