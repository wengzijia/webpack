<template>
    <div class="login">
        <h1>登录组件</h1>
        <h6>{{title}}</h6>
        <span>闪亮</span>
        <hr />
        <div style="width:100px" class="text-ellipsisl1">单行省略号单行省略号单行省略号单行省略号</div>
        <div style="width:200px" class="text-ellipsisl2">双行省略号双行省略号双行省略号双行省略号双行省略号双行省略号双行省略号双行省略号双行省略号</div>
        <hr />
        <div style="background-color:red;width:200px;height:100px;" class="flex_c_c">水平垂直居中</div>
    </div>
</template>


<script>
    // 导入封装的私有mixin
    import commonMixin from "@/mixin/index"
    export default {
        data(){
            return {
                title:'学习使我强大'
            }
        },
        created(){
            console.log('login-created');
            this.hello(); //全局   这里是调用mixin内部的方法
            this.test(); // 私有  
        },
        //  同名方法,组件的方法会覆盖全局的mixin里面的方法
        methods: {
            hello(){
                console.log('我是来自于Login.vue',this.msg);
            }
        },
        // 导入私有mixin   只会影响当前组件
        mixins:[commonMixin] 
    }
</script>

<style lang="scss" scoped>
    // scoped:当前样式只能在当前组件生效(私有)
    // lang: 指定css预处理器,也就是css语言
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