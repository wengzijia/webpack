<template>  
    <div class="AppVessel">
        <h1>App根组件</h1>
        <Register></Register>
        <Login></Login>
        <Yule></Yule>
    </div>
</template>

<script>
   import Register from "@/components/Register.vue";
   import Login from "@/components/Login.vue";
   import Yule from "@/components/Yule.vue";
    export default {
        // 注册私有组件
        components:{
            Register,
            Login,
            Yule
        }
    }
</script>

<style>

</style>
