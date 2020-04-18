const Router = require('koa-router');
const { auth } = require('../controllers/utils/auth');

const {
   login,
   register
} = require('../controllers/merchant')

const router = new Router({
   prefix: '/merchants'
})

router.post('/login', login);
router.post('/register', register);

module.exports = router;