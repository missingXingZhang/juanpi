// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 引入router
// 引入Toast
// 添加请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config
  // 判断method是不是post，看data是不是一个对象
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  alert(error)
  // 中断消息
  return new Promise(() => { })
})

// 向外暴露
export default axios