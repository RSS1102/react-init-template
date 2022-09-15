import axios from "axios";
// 实例化axios 
//加载环境变量，地址
const __ENV__ = import.meta.env
const http = axios.create({
    baseURL: __ENV__.VITE_URL,
    timeout: 5000,
    // 携带凭证
    withCredentials: false
})

// 添加请求拦截器
http.interceptors.request.use(config => {
    // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
}, error => {
    return Promise.reject(error);
})
// 添加响应拦截器
http.interceptors.response.use(response => {
    //对于AxiosResponse<any, any> 
    //https://github.com/axios/axios/issues/1510
    return response;
}, error => {
    return Promise.reject(error);
})
export default http;
