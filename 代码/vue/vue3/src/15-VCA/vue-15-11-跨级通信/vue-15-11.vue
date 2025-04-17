<!-- 最最实用，还是响应式的，完全替换前面所学的所有通信方式 ->
<!-- 补充：在 Vue 3 中，$refs，$parent 和 $root 基本不用，没有实用价值，所以略过 -->

<!-- 案例：navbar_导航栏，list_列表，detail_列表任意详情页 -->
<template>
    <div>
        <zi1 v-show="show"></zi1>   

        <component :is="which"></component>    <!-- 动态组件，它允许你按需切换想显示的组件 -->
    </div>
</template>

<script>
import zi1 from './子/zi1.vue'
import zi2 from './子/zi2.vue'
import zi3 from './子/zi3.vue'
import {provide, ref} from 'vue'
export default {
    components:{
        zi1,
        zi2,
        zi3
    },
    setup(){
        const which = ref('zi2')   //这里直接写组件名字
        const show = ref(true)
        provide('which1',which)          //1.提供   前面一个是起的任意名字
        provide('show1',show)       
        return{
            which,show
        }
    }
}
</script>