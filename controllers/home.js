// const path = require('path');
class HomeCtl {
   index(ctx) {
      console.log(333)
      ctx.body = {
         url: `${ctx.origin}/imgs/${ctx.url}`,
         status: "success"
      }
   }
}

module.exports = new HomeCtl();