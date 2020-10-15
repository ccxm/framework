/**
 *  token操作工具
 */

// 保存token
export const saveToken = token => {
  localStorage.setItem('token', token)
}

// 删除token
export const deleteToken = () => {
  localStorage.removeItem('token')
}

// 保存token
export const getToken = () => {
  return localStorage.getItem('token')
}
