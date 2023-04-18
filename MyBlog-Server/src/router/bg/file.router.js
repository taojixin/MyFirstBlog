const express = require('express')
const fileRouter = express.Router()


const {
  demoImgHandle
} = require('../../middleware/file.middleware')
const {
  saveDemoImgInfo,
  demoImgInfo
} = require('../../controller/file.controller')

// 上传图片
fileRouter.post('/demoimg', demoImgHandle, saveDemoImgInfo)
// 获取图片
fileRouter.get('/getdemoimg', demoImgInfo)



module.exports = fileRouter;