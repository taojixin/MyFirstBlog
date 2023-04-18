// var webpack=require('webpack')
module.exports = {
  publicPath: '/blog/',
  // 代理跨域
  devServer: {
    proxy: {
      '/api': {
        // 远程服务器
        target: 'http://120.79.177.24:8881',
        // 本地服务器
        // target: 'http://localhost:8881',
      },
      '/admin': {
        // target: 'http://localhost:8881',
        target: 'http://120.79.177.24:8881',
      }
    }
  },
  // 打包不生成map文件
  productionSourceMap: false,
  // 引入第三方DNS资源
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axiox': 'axios'
    }
  }
}