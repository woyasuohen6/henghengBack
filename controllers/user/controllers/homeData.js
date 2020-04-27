const Merchant = require('../../../models/merchant');
const Commodity = require('../../../models/commodity');
const {
   splicingUrl,
   splicingUrlList
} = require('../../utils/url');

async function getHomeData(ctx, next) {
   let brandList = await Merchant.find();
   let newGoodsList = await Commodity.find();
   splicingUrlList(ctx, brandList, newGoodsList);
   ctx.status = 200;
   const channel = [{
      "id": 1,
      "name": "农场",
      "icon_url": `${ctx.origin}/icon/agriculture.png`,
   }, {
      "id": 2,
      "name": "牧场",
      "icon_url": `${ctx.origin}/icon/animal.png`,
   }, {
      "id": 3,
      "name": "果园",
      "icon_url": `${ctx.origin}/icon/apple.png`,
   }, {
      "id": 4,
      "name": "菜园",
      "icon_url": `${ctx.origin}/icon/vegetables.png`,
   }];
   const banner = [{
      "id": 1,
      "image_url": `${ctx.origin}/bar/58857cd1b2f25.jpg`,
   }, {
      "id": 2,
      "image_url": `${ctx.origin}/bar/unnamed.jpg`,
   }, {
      "id": 3,
      "image_url": `${ctx.origin}/bar/479cacc2dad949f2b14da0821a62f225.jfif`,
   }];

   ctx.data = {
      banner,
      channel,
      newGoodsList,
      brandList,
   }
   next();
}


module.exports = getHomeData;