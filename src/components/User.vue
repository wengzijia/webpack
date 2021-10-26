<template>
    <div>
         <h1>用户组件</h1>
        <router-link to="/user/service">客户服务</router-link>
        <router-link :to="{path:'/user/indent'}">用户订单</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'User'
    }
</script>

<style lang="scss" scoped>

</style>