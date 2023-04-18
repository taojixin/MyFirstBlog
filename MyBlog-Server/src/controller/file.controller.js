const fs = require('fs')
const service = require('../service/file.service')

class FileController {
  // 上传图片
  async saveDemoImgInfo(req, res, next) {
    // 1.获取图片相关信息
    const { filename, mimetype, size } = req.file
    const demo_id = req.body.demo_id
    // 根据demo_id查询该demo是否已有图片信息
    const isExist = await service.getDemoMes(demo_id)
    if (isExist === 0) {
      // 该demo没有图片信息
      service.saveDemoImgInfo(filename, mimetype, size, demo_id).then(resolve => {
        res.json({
          state: 200,
          message: "上传成功！"
        })
      }, error => {
        res.end("上传失败！")
      })
    } else {
      // 该图片已经存在相关图片信息，进行删除后重新添加
      // 更新数据库图片信息
      service.updateDemoImg(filename, mimetype, size, demo_id)
      // 删除图片
      fs.unlink(__dirname.substring(0, 52) + 'uploads\\demoimg\\' + isExist.filename, async err => {
        if (err) {
          throw err
        } else {
          res.json({
            state: 200,
            message: "更新成功！"
          })
        }
      })

    }
  }

  // 获取图片
  async demoImgInfo(req, res, next) {
    const { demo_id } = req.query
    const isExist = await service.getDemoMes(demo_id)
    if (isExist === 0) {
      res.json({
        state: 200,
        message: '该demo没有图片'
      })
    } else {
      const img = fs.createReadStream(__dirname.substring(0, 52) + 'uploads\\demoimg\\' + isExist.filename)
      img.pipe(res)
    }


  }
}

module.exports = new FileController();