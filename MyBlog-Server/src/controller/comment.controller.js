const service = require('../service/comment.service')

class CommentController {
  // 发表评论
  create(req, res, next) {
    const nameComment = req.body.name
    const createTime = req.body.createTime
    const note = req.body.note
    service.create(nameComment, createTime, note).then(resolve => {
      return res.json({
        meta: {
          message: "留言成功！",
          status: 200
        }
      })
    }).catch(err => {
      return res.json({
        meta: {
          message: "留言失败！",
          status: 500
        }
      })
    })
  }
  // 点赞
  giveLike(req, res, next) {
    // 获取是点赞还是取消点赞的信息，true为点赞， false为取消点赞
    let ifLike = req.body.ifTrue
    let commentId = req.body.commentId
    service.giveLike(commentId, ifLike)
    res.json({
      meta: {
        message: `${ifLike ? '点赞成功' : '取消点赞'}`,
        status: 200
      }
    })

  }
  // 获取最新的10条评论信息
  async getAllComments(req, res, next) {
    // 注意这里返回的是一个promise，所以使用async与await
    const result = await service.getAllComments()
    // 以json格式返回查询信息
    res.json({
      data: result,
      meta: {
        message: "获取了前10条评论！",
        status: 200
      }
    })
  }
  // 按页和数量获取留言
  async getSomeComments(req, res, next) {
    const {page,num} = req.body
    const data = await service.getSomeComments(page,num)
    res.json(data)
  }
  // 获取评论总数
  async getCommentTotal(req, res, next) {
    const data = await service.getCommentTotal()
    res.json(data)
  }
  // 删除某条评论
  delSomeComment(req, res ,next) {
    const delId = req.body.delId
    service.delSomeComment(delId)
    res.json("删除成功！")
  }
}

module.exports = new CommentController();