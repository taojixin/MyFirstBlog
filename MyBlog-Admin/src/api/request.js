// 二次封装axios
import axios from 'axios'

const requests = axios.create({
  baseURL: '/admin',
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use(config => {
  if (localStorage.getItem('adminToken')) {
    config.headers.token = localStorage.getItem("adminToken")
  }
  // config: 配置对象，里面有一个熟悉很重要，headers请求头
  return config
})

// 响应拦截器
requests.interceptors.response.use(res => {
  return res.data
}, error => {
  return Promise.reject(error)
})

export default requests;