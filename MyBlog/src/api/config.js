// 通过dotenv统一管理环境变量
const dotenv = require('dotenv').config();

const {
  SERVE_URL
} = process.env;

module.exports = {
  SERVE_URL
}