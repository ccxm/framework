/**
 *  正则表达式验证
 */

// 验证邮箱
export const validEmail = (email) => {
    const reg = /[\w]+(\.[\w]+)*@[\w]+(\.[\w])+/
    return reg.test(email)
}

// 验证密码
export const validPassword = (password) => {
    const reg = /^(\w){6,20}$/
    return reg.test(password)
}

// 验证验证码
export const validVerifyCode = (verifyCode) => {
    const reg = /^[0-9]{6}$/
    return reg.test(verifyCode)
}

