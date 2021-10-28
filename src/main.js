// 这里只负责导入，不做任何逻辑
// 导入Vue 
// 导入的实质是vue.runtime.common（运行版本）版本，是没有模板编译器。
// 运行版： 仅能通过render来渲染模板
// 正式版： template + render
import Vue from "vue";

// 导入App根组件
import App from "./App.vue";

// 导入路由
import router from "@/router/router.js"

// 导入过滤器
import "@/filter/index"


// 导入axios封装的get和post请求,不会触发拦截器
import { reqGet,reqPost } from "./util/tool";


// 导入axios
import axios from "@/api/index"

// mixin作用：用于抽离组件中公共的属性和方法，提高代码复用性。

// 每个组件都会触发mixin,先触发全局的created，在触发组件里面的created
// 创建mixin  data 必须是一个函数 返回一个对象
Vue.mixin({   // 这里是全局的mixin,会影响全部组件
    data() {
        return {
            msg: "from mixin msg"
        }
    },
    created: function () {
        console.log("mixin-created")
    },
    // 这里的方法已经注入到mixin内部了,组件里面的方法(methods)会覆盖这里的方法(methods)
    methods: {
        hello() {
            console.log('我是来自于mixin')
        }
    }
})



// 挂载到Vue的原型中，所有的vue组件都可以通过 this.$属性名 来进行调用
// 触发请求和响应拦截器
Vue.prototype.$axios = axios; 
// 不触发请求和响应拦截器
Vue.prototype.$reqGet = reqGet; 
// 不触发请求和响应拦截器
Vue.prototype.$reqPost = reqPost; 


// 创建app根组件
new Vue({
    router,
    // App组件替换#app的内容
    render:(h) => h(App)
}).$mount('#app')