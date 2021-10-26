// 这里只负责导入，不做任何逻辑
// 导入Vue 
// 导入的实质是vue.runtime.common（运行版本）版本，是没有模板编译器。
// 运行版： 仅能通过render来渲染模板
// 正式版： template + render
import Vue from "vue";

// 导入App根组件
import App from "./App.vue";

// 创建app根组件
new Vue({
    data:{
        title:"hello"
    },
    render(h){
        // App组件替换#app的内容
        return h(App)
    }
}).$mount('#app')