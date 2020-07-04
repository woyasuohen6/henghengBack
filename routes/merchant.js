const Router = require('koa-router')
const { auth, getId, checkadmin } = require('../controllers/utils/auth')

const {
  login,
  register,
  deleteAccount,
  addImg,
  modifyMerchant,
  modifyCommodity,
  createCommodity,
  addCommodityImg,
  getMerchantDetail,
  addCommodityImgList,
  deleteCommodity,
} = require('../controllers/merchant')

const uploadImg = require('../controllers/utils/uploadImg')

const router = new Router({
  prefix: '/merchants',
})

/**
 * 商家登录接口
 */
router.post('/login', login)

/**
 * 商家注册接口
 */
router.post('/register', register)

/**
 * 商家账号删除接口
 * 必须是超级管理员才行
 */
router.delete('/deleteAccount', checkadmin, deleteAccount)

/**
 *  商品删除
 */
router.delete('/deleteCommodity', auth, deleteCommodity)
/**
 * 商家上传图片接口
 */
router.post('/addImg', auth, getId, uploadImg, addImg)

/**
 * 商家修改信息接口
 */
router.put('/modifyMerchant', auth, getId, modifyMerchant)

/**
 * 商家创建商品接口
 */
router.post('/createCommodity', auth, getId, createCommodity)

/**
 * 商品信息修改接口
 */
router.put('/modifyCommodity', auth, modifyCommodity)

/**
 *  获取商家详细信息接口
 *  不需要登录权限
 */
router.get('/getMerchantDetail', getMerchantDetail)

/**
 * 上传商品封面图片
 */
router.post('/addCommodityImg/:commodityId', auth, getId, uploadImg, addCommodityImg)

/**
 * 上传商品图片列表
 */
router.post('/addCommodityImgList/:commodityId', auth, getId, uploadImg, addCommodityImgList)
module.exports = router
