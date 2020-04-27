const Router = require('koa-router');

const {
   auth,
   checkUser,
   getId
} = require('../controllers/utils/auth');

const {
   create,
   getOrder
} = require('../controllers/order')

const router = new Router({
   prefix: '/orders'
})

/**
 * 创建订单接口
 * POST /orders/create
 */
// router.post('/create', auth, getId, checkUser, create);

/**
 * 查询订单接口
 * GET /orders
 */
// router.get('/', auth, getId, getOrder);

module.exports = router;