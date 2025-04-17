<template>
    <div>
        <ul>
            <zizi2 v-for="data in datalist" :key="data" :item="data"></zizi2>    
        </ul>
    </div>
</template>

<script>
import zizi2 from './子子/zizi2.vue'
export default {
    data(){
        return{
            datalist:['首页','列表','我的']
        }
    },
    components:{
        zizi2
    }
}
</script>

<style scoped>
    ul{
        display:flex;
        position:fixed;
        bottom:0;
        width:100%;
        height: 50px;
        line-height: 50px;
    }
    li{
        flex:1;
        text-align: center;
    }
</style>