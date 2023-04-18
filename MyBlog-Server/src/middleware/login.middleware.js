const jwt = require('jsonwebtoken')

const { isExistName } = require('../service/login.service')
const { getPassword } = require('../service/login.service')
const { PUBLIC_KEY } = require('../app/config')


// 验证登录
const verifyLogin = async (req, res, next) => {
  // 获取用户名
  const { name, password } = req.body
  // 根据用户名判断用户是否存在 
  if (await isExistName(name)) { // 这里调用isExistName返回的是promise，所以使用async和await简化返回结果（即true或false）
    if (password === await getPassword(name)) {
      return next()
    }
    res.json({
      data: {
        code: 1
      },
      meta: {
        message: "密码错误！",
        status: 200
      }
    })
    // 这里必须是return出去否则报错 Error [ERR_STREAM_WRITE_AFTER_END] write after end
    return next() // 存在则进行下一个中间件
  }
  res.json({
    meta: {
      message: "用户不存在！",
      status: 200
    }
  })
}

// 验证授权  （验证token）
const verifyAuth = async (req, res, next) => {
  // 1.获取token (这里假设前端通过data携带token)
  const token = req.headers.token
  // 2.验证token 返回的结果为token携带的数据，如payload中携带的name，passqord，以及过期时间等
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    next();
  } catch {
    res.json({
      meta: {
        message: "无效的token！",
        status: 401 // 未授权
      }
    })
  }
}

// test
const test = async (req, res, next) => {
  res.end("登录成功")
}




module.exports = {
  verifyLogin,
  verifyAuth,
  test
}