import axios from "axios"
import nprogress from "nprogress";

//request就是axios,只是稍微配置下
const requests=axios.create({

    baseURL:"/api",
    //5s超时
    timeout:5000
})

//请求之前拦截
requests.interceptors.request.use((config)=>{
//配置对象，配置header
return config;
})

//响应拦截器,成功和失败的回调
requests.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    //响应失败回调
    return Promise.reject(new Error("fail"))
})

export default axios;