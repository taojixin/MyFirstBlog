// var webpack=require('webpack')
module.exports = {
  publicPath: '/blogadmin/',
  // 代理跨域
  devServer: {
    proxy: {
      '/admin': {
        // 远程服务器
        target: 'http://120.79.177.24:8881',
        // 本地服务器
        // target: 'http://localhost:8881',
        // changeOrigin: true
      }
    }
  },
  // 打包不生成map文件
  productionSourceMap: false
}