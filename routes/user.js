const Router = require('koa-router');
const {
   login,
   register,
   verify,
   getHomeData
} = require('../controllers/user');

const router = new Router({
   prefix: '/users'
})

/**
 * 用户登录接口
 * POST /users/login
 */
router.post('/login', login);

/**
 * 用户注册接口
 * POST /users/register
 */
router.post('/register', register);

/**
 * 验证用户是否登录
 * GET /users/verify
 */
router.get('/verify', verify);

/**
 * 获取首页信息
 */
router.get('/getHomeData', getHomeData);

module.exports = router;