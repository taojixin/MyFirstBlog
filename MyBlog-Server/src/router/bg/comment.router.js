const express = require('express')
const commentRouter = express.Router()

const {
  getSomeComments,
  getCommentTotal,
  delSomeComment
} = require('../../controller/comment.controller')

// 按页和数量获取留言
commentRouter.post('/getsomecomments', getSomeComments)
// 获取评论总数
commentRouter.get('/getcommenttotal', getCommentTotal)
// 删除某条评论
commentRouter.delete('/delsomecomment', delSomeComment)



module.exports = commentRouter;