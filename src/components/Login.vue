<template>
    <div class="login">
        <h1>登录组件</h1>
        <h6>{{title}}</h6>
        <span>闪亮</span>
    </div>
</template>


<script>
    export default {
        data(){
            return {
                title:'学习使我强大'
            }
        }
    }
</script>

<style lang="scss" scoped>
    $width:200px;
    $height:100px;
    $color:purple;
    $color2:rgb(252, 4, 119);
    h1{
        color:$color;
    }
    h2{
        color: $color2;
    }
    span{
        width: $width;
        height: $height;
        background-color: $color;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>