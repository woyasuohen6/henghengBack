const login = require('./controllers/login');
const register = require('./controllers/register');
const verify = require('./controllers/verify');
const getHomeData = require('./controllers/homeData');

module.exports = {
   login,
   register,
   verify,
   getHomeData
};