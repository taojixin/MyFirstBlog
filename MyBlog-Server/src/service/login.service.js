const connections = require('../app/database')
class LoginService {
  // 判断用户是否在数据库中
  async isExistName(name) {
    const statement = `SELECT * FROM users WHERE NAME = ?;`
    const result = await connections.execute(statement, [name])
    // @ts-ignore
    if (result[0].length == 0) {
      return false
    }
    return true
  }
  // 获取用户密码
  async getPassword(name) {
    const statement = `SELECT * FROM users WHERE NAME = ?;`
    const [result] = await connections.execute(statement, [name])
    return result[0].password
  }
}


module.exports = new LoginService();