<template>
    <div class="register">
        <h1>注册组件</h1>
        <h2>我的名字:{{name}}</h2>
        <button @click="name='WENG'">改名字</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:'weng'
            }
        }
    }

</script>
<style lang="scss" scoped>
    $color:red;
    $bgcolor:inset 5px 5px 28px rgb(237, 4, 245);
    h1{
        color: $color;
    }
    h2{
        box-shadow: $bgcolor;
    }
</style>