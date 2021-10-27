<template>  
    <div class="AppVessel">
        <h1>App根组件</h1>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/yule">娱乐</router-link>
        <router-link to="/user">用户</router-link>

        <keep-alive>
             <!-- 路由匹配的内容显示在这个容器 -->
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>

    export default {
       name:"App"
    }
</script>

<style lang="scss">
// app.vue一般定义公共样式
// 当前路由高亮显示：
.router-link-active {
    border-bottom: 2px solid rgb(0, 119, 255);
}

// 导入scss公共样式
@import "./assets/scss/common.scss";

</style>
