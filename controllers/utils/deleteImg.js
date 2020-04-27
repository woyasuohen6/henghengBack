const fs = require('fs');

function deleteImg(url) {
   fs.unlink(process.cwd() + '\\public' + url, console.log);
}

module.exports = {
   deleteImg
};