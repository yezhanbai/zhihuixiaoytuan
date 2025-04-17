
<!-- 包含跨级通信 -->

<template>
    <div>
        <zi2 v-show="show" v-kerwin></zi2>     <!-- 配合main.js使用 -->

        <component :is="which?zi3:zi4"></component>        <!-- 动态组件，直接把定义的组件名，放在里面 -->
    </div>
</template>

<script setup>
import zi2 from './子/zi2.vue'
import zi3 from './子/zi3.vue'
import zi4 from './子/zi4.vue'
import { provide, ref } from 'vue'

const which = ref(true)
const show = ref(true)
provide('which1', which)
provide('show1', show)

//局部指令写法    创建，更新时都会执行
const vKerwin = (el)=>{      //如果写成vKerwinDir    引用时就要写成 v-Kerwin-dir
    console.log(el)          //拿到原生dom节点
    el.style.background='yellow'
}

</script>