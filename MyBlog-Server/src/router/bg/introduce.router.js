const express = require('express')
const introduceRouter = express.Router()

const {
  getIntroduce,
  updateIntroduce,
  updateAll
} = require('../../controller/introduce.controller')

// 查询个人信息
introduceRouter.post('/getintroduce', getIntroduce)
// 修改某项个人信息
introduceRouter.post('/updateintroduce',updateIntroduce)
// 更新所有个人信息
introduceRouter.post('/updateallintro', updateAll)



module.exports = introduceRouter;