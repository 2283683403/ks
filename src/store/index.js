import { createStore } from 'vuex'

export default createStore({
  state: {
    captchaImg: localStorage.getItem('captchaImg') || {},
    token: localStorage.getItem('token') || {},
    nav: JSON.parse(localStorage.getItem('nav')) || {},
    tagsView: JSON.parse(localStorage.getItem('tagsview')) || [],
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    newHeader: JSON.parse(localStorage.getItem('newHeader')) || {}
  },
  getters: {},
  mutations: {
    setImg(state, img) {
      state.captchaImg = img
      localStorage.setItem('captchaImg', state.captchaImg)
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', state.token)
    },
    setNav(state, nav) {
      state.nav = nav
      localStorage.setItem('nav', JSON.stringify(state.nav))
    },
    setTagsView(state, tags) {
      const newTagsView = state.tagsView.find((item) => item.path === tags.path)
      if (!newTagsView) {
        state.tagsView.push(tags)
        localStorage.setItem('tagsview', JSON.stringify(state.tagsView))
      }
    },
    removeTagsView(state, index) {
      state.tagsView.splice(index, 1)
      localStorage.setItem('tagsview', JSON.stringify(state.tagsView))
    },
    setUserInfo(state, obj) {
      state.userInfo = obj
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    userOut(state) {
      state.newHeader = ''
      localStorage.removeItem('newHeader')
    },
    newHeader(state, header) {
      state.newHeader = header
      localStorage.setItem('newHeader', JSON.stringify(state.newHeader))
    }
  },
  actions: {},
  modules: {}
})
