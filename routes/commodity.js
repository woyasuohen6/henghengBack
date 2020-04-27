const Router = require('koa-router');
// const {
//    auth,
//    checkMerchant,
//    getId
// } = require('../controllers/utils/auth');

// const {
//    create,
//    getCommodity,
//    addImg,
//    getDetail
// } = require('../controllers/commodity')

const router = new Router({
   prefix: '/commoditys'
})

// const upload = require('../controllers/utils/upload');

/**
 * 创建商品接口
 */
// router.post('/create', auth, getId, create);

// // 获取商品列表
// router.get('/getCommodityList', getCommodity);

// /**
//  * 商品上传图片接口
//  */
// router.post('/addImg/:CommodityId', auth, getId, upload, addImg);


// /**
//  * 获取详细信息
//  */
// router.get('/getDetail', getDetail);

module.exports = router;