const register = require('./controllers/register');
const login = require('./controllers/login');
const deleteAccount = require('./controllers/deleteAccount');
const addImg = require('./controllers/addImg');
const modify = require('./controllers/modify');
const createCommodity = require('./controllers/createCommodity');
const addCommodityImg = require('./controllers/addCommodityImg');
const getMerchantDetail = require('./controllers/getMerchantDetail');
const addCommodityImgList = require('./controllers/addCommodityImgList');



module.exports = {
   register,
   login,
   deleteAccount,
   addImg,
   modify,
   createCommodity,
   addCommodityImg,
   getMerchantDetail,
   addCommodityImgList
};