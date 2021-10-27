// 过滤器模块
import Vue from "vue";
import * as Tool from "@util/tool";


// 循环注册过滤器
for (let key in Tool){
    Vue.filter(key,Tool[key])  // 通过[key]拿到value
    console.log(Tool[key]);
}