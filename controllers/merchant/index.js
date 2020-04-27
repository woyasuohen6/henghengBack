const register = require('./controllers/register');
const login = require('./controllers/login');
const deleteAccount = require('./controllers/deleteAccount');
const addImg = require('./controllers/addImg');
const modify = require('./controllers/modify');
const createCommodity = require('./controllers/createCommodity');
const getCommodityList = require('./controllers/getCommodityList');
const addCommodityImg = require('./controllers/addCommodityImg');


module.exports = {
   register,
   login,
   deleteAccount,
   addImg,
   modify,
   createCommodity,
   getCommodityList,
   addCommodityImg
};