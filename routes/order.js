const Router = require('koa-router');
const {
   auth,
   getId
} = require('../controllers/utils/auth');
const {
   createOrder,
   getUserOrderList,
   getMerchantOrderList,
   modifyOrder,
   finishOrder
} = require('../controllers/order');

const router = new Router({
   prefix: '/orders'
})

/**
 * 创建订单模块
 */
router.post('/createOrder', auth, getId, createOrder);


/**
 * 获取商家订单列表模块
 */
router.get('/getMerchantOrderList', auth, getId, getMerchantOrderList);

/**
 * 获取用户订单列表模块
 */
router.get('/getUserOrderList', auth, getId, getUserOrderList);

/**
 * 修改订单状态信息
 */
router.post('/modifyOrder', auth, modifyOrder);


/**
 * 完成订单
 */
router.post('/finishOrder', auth, finishOrder);
module.exports = router;
