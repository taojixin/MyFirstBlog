const express = require('express')
const demoRouter = express.Router()

const {
  getDemo
} = require('../../controller/demo.controller')


// 获取demo信息,传入getId为0时代表获取全部demo信息
demoRouter.post('/getalldemo', getDemo)


module.exports = demoRouter;