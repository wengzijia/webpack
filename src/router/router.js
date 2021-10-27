import Vue from 'vue';

//导入NProgress进度条
import "../../node_modules/nprogress/nprogress.css";
import NProgress  from "nprogress";

//导入vue-router路由
import VueRouter from 'vue-router'

// 导入首页路由
import Index from "@/components/Index"

import Register from "@/components/Register.vue"
// import Login from "@/components/Login.vue"
import Yule from "@/components/Yule.vue"

import User from "@/components/User.vue"
import Service from "@/components/Service.vue"
import Indent from "@/components/Indent.vue"

Vue.use(VueRouter); // 必须安装到Vue框架中

let router = new VueRouter({
    routes:[
        {path:'/',component:Index},
        {
            path:'/login',
            // import路由懒加载   注释的是组件代码分割
            component:() => import(/* webpackChunkName: "mylogin" */ "@/components/Login")
        },
        {path:'/register',component:Register},
        {path:'/yule',component:Yule},
        {
            path:'/user',
            component:User,
            children:[
                {path:"service",component:Service},
                {path:"indent",component:Indent},
                {path:"",component:Service},
            ]
        }
    ]
})


// 全局（针对所有路由）前守卫
router.beforeEach((to,from,next)=>{
    console.log(NProgress);
    NProgress.set(0.2);
    next()  // 必须写，不然会挂起
})


// 全局（针对所有路由）后守卫
router.afterEach((to,from)=>{
    NProgress.done();
})



// 导出路由对象
export default router