export const pLogin = () => {
    return Object.seal({
        email: '',
        password: '',
        account: ''
    })
}

export const pRegister = () => {
    return Object.seal({
        email: '',
        password: '',
        verifyCode: ''
    })
}

