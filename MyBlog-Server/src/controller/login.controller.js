const { getPassword } = require('../service/login.service')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
class LoginController {
  // 登录 颁发token
  async login(req, res, next) {
    const { name, password } = req.body
    if (password === await getPassword(name)) {
      // 生成token
      const token = jwt.sign({ name, password }, PRIVATE_KEY, {
        expiresIn: 60 * 60 * 24, // 一天
        algorithm: "RS256" // 这里必须写RS256(非对象加密)，因为默认为HS256(对称加密)
      })
      return res.json({
        data: {
          code: 0,
          token: token
        },
        meta: {
          message: "登录成功！",
          status: 200
        }
      })
    }

  }
}

module.exports = new LoginController();