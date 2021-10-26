import Vue from 'vue'
//导入vue-router路由
import VueRouter from 'vue-router'

// 导入首页路由
import Index from "@/components/Index.vue"

import Register from "@/components/Register.vue"
import Login from "@/components/Login.vue"
import Yule from "@/components/Yule.vue"

import User from "@/components/User.vue"
import Service from "@/components/Service.vue"
import Indent from "@/components/Indent.vue"

Vue.use(VueRouter); // 必须安装到Vue框架中

let router = new VueRouter({
    routes:[
        {path:'/',component:Index},
        {path:'/login',component:Login},
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



export default router