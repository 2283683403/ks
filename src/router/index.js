import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index/index.vue'),
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/',
    name: 'sys',
    component: HomeView,
    children: [
      {
        path: '/sys/users',
        name: 'users',
        component: () => import('../views/xtgl/users.vue'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/sys/roles',
        name: 'roles',
        component: () => import('../views/xtgl/roles.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/sys/menus',
        component: () => import('../views/xtgl/menus.vue'),
        meta: {
          title: '菜单管理'
        }
      },
      {
        path: '/sys/dicts',
        component: () => import('../views/xtgl/dicts.vue'),
        meta: {
          title: '数字字典'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
