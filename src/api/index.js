import axios from 'axios';

const instance = axios.create();


// 设置请求基准路径
// instance.defaults.baseURL = 'http://127.0.0.1:3000';


// post请求头的设置
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    console.log('请求拦截器')
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log('响应拦截器')
    return response.data;
}, function (error) {

    // 对错误状态码进行统一处理，给用户响应的提示

    let {
        status
    } = error.response;
    // 超出 2xx 范围的状态码都会触发该函数。
    switch (status) {
        case 401:
            alert('token失效，重新登录');
            break;
        case 500:
            alert('500-服务器异常，请稍后再试');
            break;
        default:
            alert('服务器异常，请稍后再试');
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default instance;