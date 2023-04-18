const {getIntroduce, updateData,updataAll} = require('../service/introduce.service')
class IntroduceController {
  // 获取个人介绍接口
  async getIntroduce(req, res, next) {
    const queryKey = req.body.queryKey
    const data = await getIntroduce(queryKey)
    res.json(data)
  }
  // 修改个人信息接口
  async updateIntroduce(req, res, next) {
    const queryKey = req.body.queryKey
    const data = req.body.updateData
    await updateData(queryKey, data)
    res.json('修改成功！')
  }
  // 修改所有个人信息接口
  updateAll(req, res, next) {
    const personalForm = req.body.personalForm
    updataAll(personalForm).then(res => {
      res.end("修改成功")
    }).catch(err => {
      res.end("修改失败")
    })
  }
}

module.exports = new IntroduceController();