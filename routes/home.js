const Router = require('koa-router');
const uploads = require('../controllers/utils/upload');
const { index } = require('../controllers/home')
const router = new Router();

router.post('/upload', uploads, index);

module.exports = router;