<template>
    <div>
        <h1>客户服务组件</h1>
        <div>当前时间:{{date | dateFormat}}</div>
        <div>当前时间:{{time | unixFormat}}</div>
    </div>
</template>

<script>
    export default {
        name:'Service',
        data(){
            return {
                date:new Date(),
                time:parseInt(Date.now()/1000)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>