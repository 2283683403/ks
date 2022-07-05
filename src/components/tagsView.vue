<template>
  <div class="tags">
    <span
      class="sp"
      v-for="(item, index) in store.state.tagsView"
      :key="index"
      @click="goTags(item.path)"
      >{{ item.title }}
      <el-icon
        v-if="$route.path !== item.path"
        @click.stop="delTags(item, index)"
        ><CloseBold
      /></el-icon>
    </span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
watch(
  () => router.currentRoute.value.path,
  () => {
    if (route.meta && route.meta.title && route.path) {
      const tags = {
        title: route.meta.title,
        path: route.path
      }
      store.commit('setTagsView', tags)
    }
  },
  { immediate: true, deep: true }
)

// 跳转
const goTags = (path) => {
  router.push(path)
}
// 删除
const delTags = (item, index) => {
  if (item.path !== '/index') {
    store.commit('removeTagsView', index)
  }
}
</script>

<style lang="scss" scoped>
.tags {
  width: 100%;
  height: 34px;
  border-bottom: 1px solid #ccc;
}
.sp {
  margin-left: 18px;
  display: inline-block;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  line-height: 32px;
  color: rgb(48, 134, 205);
  font-size: 14px;
  cursor: pointer;
}
</style>
