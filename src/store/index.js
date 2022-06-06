import { createStore } from 'vuex'
import api from '@/api/index'

export default createStore({
  state: {
    userId: 0,
    userInfo: {
      imgUrl: 'https://imgheybox.max-c.com/avatar/2022/02/13/fbe9a2b2b694de7acafd6114d64d98af.jpeg',
      nickname: '31901124',
      username: 'ZRH',
      sign: '暂无',
      follow: 4,
      fans: 3,
      collection: 10,
      works: 0
    },
    userSteamInfo: {
      imgUrl: 'https://imgheybox.max-c.com/avatar/2022/04/19/68d34e5d3dabe8b4dbf7a68d87e49639.jpeg',
      nickname: 'Leo',
      accountValue: 4175,
      gameDuration: 5484,
      gameCount: 80
    },
    hotSearchList: ['apex', 'epic', '无主之地3', '命运2', '战地', '永劫无间', '生化奇兵合集', '古墓丽影'],
    hotArgueList: ['#Epic喜加一#', '#2022msi#', '#epic特卖推荐#', '#日常#', '#steam游戏#', '电竞杂谈', '游戏推荐', 'pc游戏']
  },
  getters: {
  },
  mutations: {
    setUserId: function (state, value) {
      state.userId = value
    },
    setUserInfo: function (state, value) {
      state.userInfo = value
    }
  },
  actions: {
    async updateInfo (content, id) {
      const result = await api.getUserInfo(id)
      content.commit('setUserInfo', result)
    }
  },
  modules: {
  }
})
