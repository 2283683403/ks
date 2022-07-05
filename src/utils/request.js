import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java/',
  timeout: 3000
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjU3MDAyMjIxLCJleHAiOjE2NTc2MDcwMjF9.KmOXxjmGl8hqbE_PxFNPktQy_5qDvuyqzRi-KiwHDx_XJaizHUZi1r4nhIgeJn30hXL0oGBADt9LIWldk8GeNw'
    // 在发送请求之前做些什么
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
// 传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return instance(options)
}

export default request
