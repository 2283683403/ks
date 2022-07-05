import request from '../utils/request'
// 获取验证码
const captcha = () => {
  return request({ url: 'captcha', method: 'GET' })
}

// 登录
const login = (data) => {
  return request({
    url: `login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'post'
  })
}
// 路由表
const nav = () => {
  return request({ url: 'sys/menu/nav', method: 'get' })
}
// 用户信息
const userInfo = () => {
  return request({ url: 'sys/userInfo', method: 'GET' })
}

export default {
  login,
  captcha,
  nav,
  userInfo
}
