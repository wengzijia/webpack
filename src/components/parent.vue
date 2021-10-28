
<template>
    <div>
         <h1>我是parent组件</h1>
         <child :message="name" @getSonmsg="hadle"></child>
        <h3>儿子的消息:{{msg}}</h3>
    </div>
</template>


<script>
    import child from "./child.vue"
    export default {
        name:"parent",
        data(){
            return {
                name:'翁',
                msg:""
            }
        },
        components:{
            child
        },
        methods: {
            hadle(msg){
                this.msg = msg
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>