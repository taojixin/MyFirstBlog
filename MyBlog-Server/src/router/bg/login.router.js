const express = require('express')
const loginRouter = express.Router()

const {
  login
} = require('../../controller/login.controller')
const {
  verifyLogin,
  verifyAuth,
  test
} = require('../../middleware/login.middleware')

loginRouter.post('/', verifyLogin, login)
loginRouter.post('/test', verifyAuth, test)

module.exports = loginRouter;