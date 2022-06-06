import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    pant: '/',
    name: 'home',
    component: HomeView,
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/me',
    name: 'me',
    component: () => import('../views/MeView.vue'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView'),
    meta: {
      showTabBar: false
    }
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/ArticleView'),
    meta: {
      showTabBar: false
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/MessageView'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('../views/ShoppingView'),
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      showTabBar: false
    },
    component: () => import('../views/SettingView')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
