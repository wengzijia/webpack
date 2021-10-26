<template>  
    <div class="AppVessel">
        <h1>App根组件</h1>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
        <router-link to="/yule">娱乐</router-link>
        <router-link to="/user">用户</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
       name:"App"
    }
</script>

<style>

</style>
