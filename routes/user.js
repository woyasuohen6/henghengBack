const Router = require('koa-router');
const {
   login,
   register
} = require('../controllers/user')

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

module.exports = router;