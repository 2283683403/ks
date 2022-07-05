<template>
  <div class="common-layout">
    <el-container>
      <asides class="el-aside">Aside</asides>
      <el-container>
        <el-header>
          <img style="width: 60px" :src="store.state.userInfo.userImg" alt="" />
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              {{ store.state.userInfo.userName }}
              <el-icon class="el-icon--right"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="tc">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <tagsView></tagsView>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import tagsView from '../components/tagsView.vue'
import asides from '../components/asides.vue'
import { useStore } from 'vuex'
import user from '../api/user'
import router from '../router'
const store = useStore()

const userInfo = async () => {
  const aa = await user.userInfo()
  const userImg = aa.data.data.avatar
  const userName = aa.data.data.username
  const obj = { userImg: userImg, userName: userName }
  store.commit('setUserInfo', obj)
}
userInfo()

// 退出
const tc = () => {
  store.commit('userOut')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: rgb(29, 189, 176);
}
.el-aside {
  width: 200px;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
</style>
