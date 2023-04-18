const connections = require('../app/database')

class fileService {
  // 保存图片信息
  async saveDemoImgInfo(filename, mimetype, size, demo_id) {
    const statement = `INSERT INTO demoimg(filename,mimetype,size,demo_id) VALUE(?,?,?,?);`
    const data = await connections.execute(statement, [filename, mimetype, size, demo_id])
    return data
  }
  // 根据demo_id查询图片信息
  async getDemoMes(demo_id) {
    const statement = `SELECT * FROM demoimg WHERE demo_id=?;`
    const data = await connections.execute(statement, [demo_id])
    if (JSON.stringify(data[0]) === '[]') {
      // 不存在返回0
      return 0
    } else {
      // 存在返回相关信息
      return data[0][0]
    }
  }
  // 删除文件信息
  async deleteDemoImg(demo_id) {
    const statement = `DELETE FROM demoimg WHERE demo_id=?;`
    const data = await connections.execute(statement, [demo_id])
    return data
  }
  // 修改图片信息
  async updateDemoImg(filename, mimetype, size, demo_id) {
    const statement = `UPDATE demoimg SET filename=?,mimetype=?,size=? WHERE demo_id=?;`
    const data = await connections.execute(statement, [filename, mimetype, size, demo_id])
    return data
  }
  
}

module.exports = new fileService();