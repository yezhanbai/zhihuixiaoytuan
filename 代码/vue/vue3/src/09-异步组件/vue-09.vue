<!-- 在大型项目中，如果不异步加载，就会一下子把组件全部加载完毕，导致首屏显示过慢，异步加载可以让组件在需要显示的时候再加载，后续在路由处用路由懒加载来达到相应的效果 -->
<template>
    <div>
        <zi1/>
        <zi2/>
    </div>
</template>

<script>
    import zi1 from './子/zi1.vue'
    import zi2 from './子/zi2.vue'
    import { defineAsyncComponent } from 'vue'
    export default {
        data(){
            return{
                navTitle:'首页1234'
            }
        },
        provide(){       
            return{         
                navTitle:this.navTitle,      
                abc:this             
            } 
        },
        components:{
            zi1,
            zi2,
            zizizi2:defineAsyncComponent(() => import('./子/子子/子子子/zizizi2.vue'))    //改成异步加载的方式，变成需要显示的时候才会显示
        }
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none
}
</style>