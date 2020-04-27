const Router = require('koa-router');
const {
   auth,
   getId,
   checkadmin
} = require('../controllers/utils/auth');
const {
   login,
   register,
   deleteAccount,
   addImg,
   modify,
   createCommodity,
   getCommodityList,
   addCommodityImg
} = require('../controllers/merchant');

const upload = require('../controllers/utils/upload');

const router = new Router({
   prefix: '/merchants'
})

/** 
 * 商家登录接口
 */
router.post('/login', login);

/**
 * 商家注册接口
 */
router.post('/register', register);

/**
 * 商家账号删除接口
 * 必须是超级管理员才行
 */
router.delete('/deleteAccount', checkadmin, deleteAccount);

/**
 * 商家上传图片接口
 */
router.post('/addImg', auth, getId, upload, addImg);

/**
 * 商家修改信息接口
 */
router.put('/modify', auth, getId, modify);

/**
 * 商家创建商品接口
 */
router.post('/createCommodity', auth, getId, createCommodity);

/**
 *  获取商品列表接口
 *  不需要登录权限
 */
router.get('/getCommodityList', getCommodityList);

/**
 * 上传商品封面图片
 */
router.post('/addCommodityImg/:commodityId', auth, getId, upload, addCommodityImg);

module.exports = router;