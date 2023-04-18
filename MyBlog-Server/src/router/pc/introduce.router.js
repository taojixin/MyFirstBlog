const express = require('express')
const introduceRouter = express.Router()

const {
  getIntroduce,
} = require('../../controller/introduce.controller')

// 查询个人信息
introduceRouter.post('/getintroduce', getIntroduce)



module.exports = introduceRouter;