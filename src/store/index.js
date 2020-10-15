import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    getters: {
        userInfo: state => {
            return state.userInfo
        }
    },
    mutations: {
      saveUserInfo(state, userInfo) {
          state.userInfo = userInfo
      }
    },
    actions: {
        saveUserInfo(context, userInfo) {
            context.commit('saveUserInfo', userInfo)
        }
    }
})
