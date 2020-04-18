const Router = require('koa-router');
const {
   auth,
   checkMerchant,
   getId
} = require('../controllers/utils/auth');

const {
   create,
   getCommodity,
} = require('../controllers/commodity')

const router = new Router({
   prefix: '/commoditys'
})


// 创建商品
router.post('/create', auth, getId, checkMerchant, create);

// 获取商品列表
router.get('/:MerchantId', auth, getCommodity);


module.exports = router;