<template>
    <div>
        <zi1/>
        <zi2/>
    </div>
</template>

<!-- provide和inject不是响应式的，所以后面可能还是会被取代 -->
<script>
    import zi1 from './子/zi1.vue'
    import zi2 from './子/zi2.vue'
    export default {
        data(){
            return{
                navTitle:'首页1234'
            }
        },
        provide(){       
            return{         
                navTitle:this.navTitle,       //1.向外面提供一个navTitle，值是当前组件所定义的值   
                abc:this                //5.将整个组件赋值给abc贡献出去
            } 
        },
        components:{
            zi1,
            zi2
        }
    }
</script>

<style>
*{
    margin:0;
    padding: 0;
}
ul{
    list-style:none
}
</style>