async function typedSales(ctx, next) {
   ctx.status = 200;
   ctx.data = {
      '1': Math.floor(Math.random() * (100 - 1)) + 1,
      '2': Math.floor(Math.random() * (100 - 1)) + 1,
      '3': Math.floor(Math.random() * (100 - 1)) + 1,
      '4': Math.floor(Math.random() * (100 - 1)) + 1
   }
   next()
}

module.exports = typedSales;