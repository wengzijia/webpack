// 导入axios的请求实例
import axios from "./index";


// 命名导出请求娱乐接口
export function fetchPastime(){
    return axios.get("http://127.0.0.1:8800/pastime")
}


// 命名导出带id参数的娱乐详情内容
export function fetchPastimeDetail(id) {
    return axios.get(`https://api.apiopen.top/getSingleJoke?sid=${id}`)
}