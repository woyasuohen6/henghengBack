async function totalMonthlySales(ctx, next) {
   ctx.status = 200;
   ctx.data = [];
   for (let i = 1; i < 13; i++) {
      ctx.data.push({
         '月份': i,
         '销量': Math.floor(Math.random() * (100 - 1)) + 1
      })

   }
   next()

}
module.exports = totalMonthlySales;