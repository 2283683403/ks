<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item index="/">
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu
        :index="item.path + ''"
        v-for="(item, index) in store.state.nav"
        :key="index"
      >
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="(items, ind) in item.children"
          :key="ind"
          :index="items.path + ''"
          >{{ items.title }}</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import user from '../api/user'
import store from '../store/index'
const navList = async () => {
  const navs = await user.nav()
  store.commit('setNav', navs.data.data.nav)
}
navList()
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
