const mysql = require('mysql2')
const config = require('./config')

const connections = mysql.createPool({
  host: config.MYSQL_HOST,
  // port: config.MYSQL_PORT,
  port: 3306,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASSWORD,
  // 用于解决返回数组的格式不对问题
  timezone: "SYSTEM"
})

connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log("连接失败：", err);
    } else {
      console.log("数据库连接成功");
    }
  })
})

module.exports = connections.promise();