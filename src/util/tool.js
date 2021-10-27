import axios from "axios"
import moment from "moment"


// 日期时间格式处理
export function dateFormat(date,format = "YYYY-MM-DD HH:mm:ss"){
    return moment(date).format(format)
}


// 时间戳格式处理
export function unixFormat(unix,format = "YYYY-MM-DD HH:mm:ss"){
    return  moment.unix(unix).format('LLLL')
}


// 自己封装的   不会触发axios拦截器
export function reqGet(url){
    return axios.get(url)
}


export function reqPost(url){
    return axios.post(url)
}