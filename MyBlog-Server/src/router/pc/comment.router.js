const express = require('express')
const commentRouter = express.Router()

const {
  create,
  giveLike,
  getAllComments
} = require('../../controller/comment.controller')

// 发表评论
commentRouter.post('/create', create)
// 点赞
commentRouter.post('/givelike', giveLike)
// 获取全部评论信息
commentRouter.get('/getcomments', getAllComments)


module.exports = commentRouter;