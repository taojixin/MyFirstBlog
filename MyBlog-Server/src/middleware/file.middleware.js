
// Multer 是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。
const Multer = require('multer')
const demoImgUpload = Multer({
  dest: './uploads/demoimg'
})

const demoImgHandle = demoImgUpload.single('avatar')


module.exports = {
  demoImgHandle
}