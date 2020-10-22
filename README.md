# 前端基础框架说明

```js
    ├── public                     // 今天资源
    │   └── vendor                 // dll打包的文件夹
    ├── src                        // 源代码
    │   ├── api                    // 请求文件夹
    │   │   ├── user               // 具体某一类请求的文件夹
    │   │   │  └── index.js        // 请求函数
    │   │   │  └── params.js       // 请求参数
    │   │   └── index.js           // 汇总请求，请求的入口文件
    │   ├── assets                 // 主题 字体等静态资源
    │   ├── components             // 全局公用组件
    │   ├── config                 // 全局配置文件
    │   │   ├── constant.js        // 全局静态变量定义文件
    │   │   └── index.js           // 设置文件，如服务器接口的定义等信息
    │   ├── filtres                // 全局 filters
    │   │   ├── filters.js         // 具体的filters
    │   │   └── index.js           // filters的入口文件，在此注册
    │   ├── mixins                 // 混入文件夹
    │   ├── pages                  // 页面文件
    │   │   └── hello              // 具体页面文件夹
    │   │       └── components     // 页面所用到的组件
    │   │       └── index.vue      // 页面的入口文件
    │   ├── plugins                // 插件注册
    │   │   ├── modules            // 插件模块
    │   │   │    └── tip           // 具体某一插件文件夹
    │   │   │        └── tips.js   // 插件的逻辑
    │   │   │        └── index.js  // 插件的注册文件
    │   │   └── index.js           // 插件入口文件
    │   ├── router                 // 路由
    │   ├── store                  // 全局 store管理
    │   ├── style                  // 全局样式
    │   │   ├── animation.scss     // 全局动画
    │   │   ├── global.scss        // 全局样式
    │   │   ├── index.scss         // 全局样式的入口文件
    │   │   └── variables.scss     // 变量定义文件
    │   ├── utils                  // 全局公用方法
    │   │   ├── auth.js            // 鉴权，保存token
    │   │   ├── extend-prorotype.js// 扩展原型链
    │   │   ├── resize.js          // 监听屏幕的变化
    │   │   └── validate.js        // 正则表达式检验文件
    │   ├── App.vue                // 入口页面
    │   ├── main.js                // 入口 加载组件 初始化等，此文件不需要再更改！！！
    ├── .env.development           // dev环境变量
    ├── .env.production            // prod环境变量
    ├── .babelrc                   // babel-loader 配置
    ├── eslintrc.js                // eslint 配置项
    ├── .gitignore                 // git 忽略项
    ├── favicon.ico                // favicon图标
    ├── vue.config.js              // vue的配置文件
    ├── webpack.config.js          // webpack的的配置文件
    ├── webpack.dll.config.js      // dll打包加速文件，在项目run之前，先进行npm run dll命令
    └── package.json               // package.json

```

## 部分文件说明
`api/index.js`

```js
// 注册所有的api，按模块注册，注册后倒出
import * as user from './user'

const api = {
    user
}

export default api
// 导出后调用为 this.$api.user.login
```

`api/user/index.js`

```js
import { post } from '@/plugins/modules/request'

export const login = params => post('/user/login', params, {
    showTip: true,
    tipMsg: '登录成功'
})

export const register = params => post('/user/register', params, {
    showTip: true,
    tipMsg: '注册成功，请重新登录'
})
```

`api/user/params.js`

```js
// 接口请求的参数文件夹，用来增强与约束传参
export const pLogin = () => {
    return {
        email: '',
        password: '',
        account: ''
    }
}

export const pRegister = () => {
    return {
        email: '',
        password: '',
        verifyCode: ''
    }
}
```

`调用请求示例`
```js
const params = pLogin()
params.email = '1532917281@qq.com'
params.password = '123456'
this.$api.user.login(params).then(({ userId, token, userInfo }) => {
    auth.saveToken(token)
    this.$store.dispatch('saveUserInfo', userInfo)
})
```

`plugins/index.js`
```js
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
// 所有插件在此注册，不再在main.js中注册
```

`config/constant.js`
```js
/**
 * 基础常量，存放一行的常量
 */

export const example = 'hello-world'

/**
 * 对象常量，存放多行的常量
 */
export const exampleObj = {
    hello: 'world'
}
```

`config/index.js`
```js
module.exports = {
    // 服务器根路径
    BASE_URL: 'https://mall.cxmmao.com/api-mall',
    // 图片服务器路径
    IMAGE_BASE_URL: 'https://mall.cxmmao.com/cat-mall-images/',
    // 成功的状态码
    SUCCESS_CODE: 10000,
    // 未知错误
    FAIL_CODE: 40999,
    // 参数不合法
    INVALID_PARAM_CODE: 40099,
    // 请求参数不能为空
    EMPTY_PARAM_CODE: 40009,
    // 请求超时时间
    TIMEOUT: 10 * 1000
}
```

## 代码规范
> * 每个函数最大行数不超过25行

## 项目初始化
```
npm install
```

## dll打包，优化打包速度，打包前需要在public文件下新建vendor文件夹
```
npm run dll
```

### 运行项目
```
npm run serve
```


