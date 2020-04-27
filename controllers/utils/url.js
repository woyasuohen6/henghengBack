function splicingUrlList(ctx, ...args) {
   args.forEach(item => {
      item.forEach(element => {
         element.img_url = ctx.origin + element.img_url;
      })
   })
}

function splicingUrl(ctx, imgUrl) {
   return imgUrl + ctx.origin;
}

module.exports = {
   splicingUrl,
   splicingUrlList
}