import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //1.axios的拦截器
  //1.1 请求拦截的作用
  // instance.interceptors.request.use(config => {
  //   console.log(config)
  //   //1.比如config的一些信息不符合服务器的要求

  //   //2.比如每次发送网络请求时， 都有一个显示的图标

  //   //3.某些网络请求（例如：token），必须携带特殊信息

  //   //被拦截之后就收不到数据了，所以我们要返回
  //   return config
  // }, err => {
  //   console.log(err)
  // })


  //1.2响应拦截的作用
//   instance.interceptors.response.use(res => {
//     console.log(res)
//     return res.data
//   },err => {
//     console.log(err)
//   })

  //发送真正的网络请求
  return instance(config)
}



