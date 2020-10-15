import { post } from '@/plugins/modules/request'

export const login = params => post('/user/login', params, {
    showTip: true,
    tipMsg: '登录成功'
})

export const register = params => post('/user/register', params, {
    showTip: true,
    tipMsg: '注册成功，请重新登录'
})

