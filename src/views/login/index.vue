<template>
  <div class="big-box">
    <div class="login">
      <el-form
        ref="LoginRef"
        :model="loginForm"
        :rules="loginRules"
        status-icon
        label-width="70px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            class="input-with-select"
          >
            <template #append>
              <img :src="loginForm.imgs" alt="" @click="captchas" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="margin-left: 70px"
        @click="handleLoginSubmit(LoginRef)"
        >登录</el-button
      >
      <el-button>获取密码</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import user from '../../api/user'
import store from '../../store'
import router from '../../router'
const LoginRef = ref()
// 表单
const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: '',
  imgs: ''
})
const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    { required: true, message: '密码为必填项', trigger: 'blur' },
    { min: 7, max: 7, message: '请输入七位数密码', trigger: 'blur' }
  ],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

// 获取验证码
const captchas = async () => {
  const aa = await user.captcha()
  const captchaImg = aa.data.data.captchaImg
  loginForm.imgs = captchaImg
  loginForm.token = aa.data.data.token
  store.commit('setImg', captchaImg)
  store.commit('setToken', loginForm.token)
}
captchas()
// 点击登录按钮
const handleLoginSubmit = async (LoginRef) => {
  if (!LoginRef) return
  await LoginRef.validate(async (valid) => {
    if (valid) {
      const aa = await user.login(loginForm)
      const newHeader = aa.headers.authorization
      store.commit('newHeader', newHeader)
      if (aa.data.code === 200) router.push('/')
    } else {
      alert('验证错误')
    }
  })
}
</script>

<style lang="scss" scoped>
.big-box {
  height: 100%;
  background-color: #c0c0c0;
  overflow: hidden;
}
.login {
  background-color: rgb(255, 255, 255);
  width: 420px;
  padding: 20px 35px;
  position: relative;
  margin: 300px auto;
}
</style>
