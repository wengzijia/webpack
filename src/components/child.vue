<template>
    <div>
         <h1>我是child组件</h1>
         <h2>父亲的名字:{{message}}</h2>
         <button @click="tell">告诉父亲</button>
    </div>
</template>

<script>
    export default {
        name:"child",
        props:['message'],
        data(){
            return {
                title:'我要好好学习'
            }
            
        },
        methods: {
            tell(){
                this.$emit('getSonmsg',this.title)
            }
            
        }
    }
</script>

<style lang="scss" scoped>

</style>