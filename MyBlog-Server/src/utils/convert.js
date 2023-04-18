const fs = require('fs')
const path = require('path')
const md = require('markdown-it')();

// 通过路径获取文件进行转换
module.exports = function convert(data) {
  return md.render(data)
}
