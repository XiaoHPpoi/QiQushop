import axios from 'axios'
const req = axios.create({
    baseURL:'https://api.muxiaoguo.cn/api'
})
// 请求拦截器
req.interceptors.request.use(config=>{
return config
})
// 响应拦截器
req.interceptors.response.use(res=>{
return res.data
},err=>{
return Promise.reject(new Error(err))
})



// 暴露req
export default req