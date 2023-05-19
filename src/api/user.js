import request from '@/utils/request'

/**
 * 登录接口
 * @param {*} data 登录所需参数
 * @returns
 */
export const loginApi = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function userInfo() {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

// export const getBaseUserInfoApi = (id) => {
//   return request({
//     url: `/sys/user/${id}`
//   })
// }
