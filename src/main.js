import Vue from 'vue'
import App from './App.vue'
import InstallPlugins from './plugins'
import router from './router'
import store from './store'
import Filters from './filters'

Vue.config.productionTip = false
Vue.use(InstallPlugins) // 注册插件
Vue.use(Filters) // 注册过滤器

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue
