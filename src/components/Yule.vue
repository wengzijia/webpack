<template>
    <div class="yule">
        <h1>娱乐组件</h1>
        <h6>{{title}}</h6>
        <div>
            名字:{{pastimeData.name}}
            内容:{{pastimeData.text}}
        </div>
        <hr/>
        <button @click="getData">get请求(不触发拦截器)</button>
        <p>
            {{content}}
        </p>
    </div>
</template>

<script>
    import {fetchPastime,fetchPastimeDetail} from "@/api/pastime.js"
    export default {
        data(){
            return {
                pastimeData:{},
                title:'',
                content:''
            }
        },

        created(){
            this.loadData(),
            this.loadPastime()
        },
        methods:{
            async loadData(){
                let data = await fetchPastime();
                this.title = data.title
            },
            async loadPastime(){
                let data = await fetchPastimeDetail(28654780);
                
                this.pastimeData = data.result

            },
            async getData(){
                let {data} = await this.$reqGet('http://127.0.0.1:8800/military');
                this.content = data.title
            }
        }
    }
</script>

<style lang="scss" >
    $color:blue;
    $bgcolor:inset 5px 5px 28px rgb(4, 100, 245);
    h6{
        color: $color;
    }
    p{
        box-shadow: $bgcolor;
    }
    
</style>