
//延伸：如果每个请求都需要显示'加载中...'，那就统一使用下面这个方法

// Interceptors    axios拦截器
import axios from 'axios'
import { showLoadingToast, closeToast } from 'vant'
// Add a request interceptor     添加一个请求发出去之前的拦截器  
axios.interceptors.request.use(function (config) {
    // Do something before request is sent      在请求被发送之前执行某些操作
    showLoadingToast({
        message: '加载中...',
        forbidClick: true,
    });
    return config;
}, function (error) {
    // Do something with request error       拦截HTTP请求的错误响应
    return Promise.reject(error);
});

// Add a response interceptor       //添加一个响应得到我们数据之前的拦截器    
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data   
    closeToast()
    return response;
}, function (error) {
    closeToast()
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

//不需要导出，直接在main.js导入使用