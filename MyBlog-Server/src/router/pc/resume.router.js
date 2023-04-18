const express = require('express')
const resumeRouter = express.Router()

const {
  getResume,
} = require('../../controller/resume.controller')

// 获取简历接口
resumeRouter.get('/getresume', getResume)




module.exports = resumeRouter;