<template>
    <div>
        <h1>test组件</h1>
        <h2 ref="myh2">vue操作dom</h2>
        <button @click="alter">操作dom</button>
    </div>
</template>

<script>
    export default {
        methods:{
            alter(){
                this.$refs.myh2.innerHTML = '我操作了dom'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>