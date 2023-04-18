const service = require('../service/demo.service')
const Conver = require('../utils/convert')
const md = require('markdown-it')()
class DemoController {
  // 获取demo相关信息
  async getDemo(req, res,next) {
    const getId = req.body.getId
    const data = await service.getDemo(getId)
    // @ts-ignore
    const newData = data.map((value) => {
      const markdown = Conver(value.demo_code+'')
      value.demo_code = markdown
      return value
    })
    res.json(newData)
  }
  // 添加demo
  async addDemo(req, res, next) {
    const addMessage = req.body.addMessage
    await service.addDemo(addMessage)
    res.json("添加成功！")
  }
  // 删除demo
  deleteDemo(req, res, next) {
    const demoId = req.body.demoId
    service.deleteDemo(demoId)
    res.json("删除成功！")
  }
  // 修改demo
  modifyDemo(req, res, next) {
    const {demoId,demo_describe,demo_knowledge,demo_code,path} = req.body
    console.log(req.body);
    service.modifyDemo(demoId,demo_describe,demo_knowledge,demo_code,path)
    res.json("修改成功！")
  }
}


module.exports = new DemoController();