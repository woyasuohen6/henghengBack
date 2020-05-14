/**
 * 上传图片的中间件
 */
const {
   qiniuConfig
} = require('../../config');
const qiniu = require("qiniu");
const fs = require('fs');
const path = require('path');

function uploadImg(fileName) {
   /**
    *  一系列初始化操作
    */
   // 生成凭证
   const mac = new qiniu.auth.digest.Mac(qiniuConfig.ACCESS_KEY, qiniuConfig.SECRET_KEY);
   const options = {
      scope: qiniuConfig.BUCKET,
   };
   const putPolicy = new qiniu.rs.PutPolicy(options);
   const uploadToken = putPolicy.uploadToken(mac);

   // 生成 config 对象
   const config = new qiniu.conf.Config();
   // 空间对应的机房：华南
   config.zone = qiniu.zone.Zone_z0;
   // 上传是否使用cdn加速
   config.useCdnDomain = true;

   // 生成本地图片的具体路径
   const filePath = process.cwd() + '\\public\\imgs\\' + fileName;

   // 上传图片的外链
   let resultLink;
   /**
    * 文件上传
    */
   var formUploader = new qiniu.form_up.FormUploader(config);
   var putExtra = new qiniu.form_up.PutExtra();

   return new Promise((resolve, reject) => {
      formUploader.putFile(uploadToken, fileName, filePath, putExtra, function (respErr,
         respBody, respInfo) {
         if (respErr) {
            console.log(1212);
            throw respErr;
         }
         if (respInfo.statusCode == 200) {
            // 图片上传成功, 生成图片外链
            var bucketManager = new qiniu.rs.BucketManager(mac, config);
            var publicDownloadUrl = bucketManager.publicDownloadUrl(qiniuConfig.PUBLIC_BUCKET_DOMAIN, fileName);

            // 上传完毕之后删除改图片
            fs.unlink(filePath, console.log);
            resolve(publicDownloadUrl);
         } else {
            reject(respBody);
         }
      });
   })

}

module.exports = async (ctx, next) => {
   let file;
   try {
      file = ctx.request.files.file;
      ctx.url = await uploadImg(path.basename(file.path));
      await next();
   } catch(err) {
      console.log(err);
      ctx.body = {
         errCode: 1,
         errMessage: '请求参数校验失败',
         data: {
            deatail: err.toString()
         }
      }
   }
}