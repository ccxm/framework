/**
 * 注册Vue插件
 */
// 插件引入
import './modules/utils' // 注入工具函数
import Filters from '@/filters'
import Element from '@/plugins/modules/element'
import Tips from '@/plugins/modules/tips'
import Api from '@/plugins/modules/api'
import Bus from '@/plugins/modules/bus'
import ErrorHandler from '@/plugins/modules/errorHandler'
// 插件注册
const InstallPlugins = {
    install(Vue) {
        Vue.use(Filters)
        Vue.use(Element)
        Vue.use(Tips)
        Vue.use(Api)
        Vue.use(Bus)
        Vue.use(ErrorHandler)
    }
}

export default InstallPlugins
