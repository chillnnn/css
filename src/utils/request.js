import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(function(config) {
  // Do something before request is sent
  config.headers.Authorization = `Bearer ${store.getters.token}`
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(function(response) {
  // 统一判断错误
  if (!response.data.success) {
    Message.error(response.data.message)
    return Promise.reject(response.data.message)
  }
  return response
}, function(error) {
  // Do something with response error
  // 400 500提示错误
  console.dir(error)
  if (error.response.status === 401) {
    store.dispatch('user/clearInfo')
    // Message.error(error.response.data.message)
    router.push('/login')
  }
  Message.error(error.message)
  return Promise.reject(error)
})

export default service
