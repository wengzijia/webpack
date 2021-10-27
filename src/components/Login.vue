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
    // 导入mixin
    import commonMixin from "@/mixin/index"
    export default {
        data(){
            return {
                title:'学习使我强大'
            }
        },
        created(){
            this.test();
        },
        // 导入私有mixin
        mixins:[commonMixin]
    }
</script>

<style lang="scss" scoped>
    // scoped:当前样式只能在当前组件生效(私有)
    // lang: 指定css预处理器
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