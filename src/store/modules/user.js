import { userInfo, loginApi } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import store from '@/store'
// import { userSetter } from 'core-js/fn/symbol'

const state = {
  token: getToken() || '',
  // 获取数据
  userInfo: {}
}

const mutations = {
  setToken(state, newToken) {
    state.token = newToken
    setToken(newToken)
  },
  // 设置数据
  setUserInfo(state, newUserInfo) {
    state.userInfo = newUserInfo
  },
  removeToken(state) {
    state.token = ''
    removeToken()
  },
  removeuser(state) {
    state.userInfo = {}
  }
}

const getters = {}

const actions = {
  async login({ commit }, data) {
    const res = await loginApi(data)
    // console.log(res)
    const token = res.data.data
    commit('setToken', token)
    return res
  },
  userInfoA(store) {
    userInfo().then(res => {
      // console.log(res)
      store.commit('setUserInfo', res.data.data)
    })
  },
  clearInfo({ commit }) {
    commit('removeToken')
    commit('removeuser')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
