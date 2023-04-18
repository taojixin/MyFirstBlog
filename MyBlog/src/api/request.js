// 对axios进行二次封装
import axios from 'axios'

const requests = axios.create({
  baseURL: '/api',
  // 请求超时事件
  timeout: 5000,
});
// 请求拦截器
requests.interceptors.request.use((config) => {
  // config: 配置对象，里面有一个熟悉很重要，headers请求头
  return config;
})
// 响应拦截器
requests.interceptors.response.use((res) => {
  return res.data;
},(error) => {
  // 响应失败的回调函数
  return Promise.reject(error)
})


export default requests;