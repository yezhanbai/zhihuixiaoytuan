
<!-- 先申明，这个需要好好整理出来，主流写法 -->
<!-- 包含父子通信 -->

<template>
    <div>
        app-{{ msg }}
        <button @click="handleClick">click</button>
        <div>
            {{ myname }} -- {{ myage }}
        </div>
        <div>
            {{ computedName }}
        </div>

        <!-- <zi1 title="11111"></zi1> -->
        <zi1 title="电影" @right="handleright"></zi1>
    </div>
</template>

<script setup>      //不用再return    setup中写的可以直接在模版中访问
import {ref,reactive, toRefs, computed} from 'vue'
import zi1 from './子/zi1.vue'       //不需要再components
let msg = ref('hello world')

const state = reactive({
    myname:'kerwin',
    myage:100
})

// const {myname,myage} = {...toRefs(state)}      //相关的解构写法
const {myname,myage} = toRefs(state)      //相关的解构写法

const handleClick = () => {
    console.log(msg)
    msg.value = 'xiaoming'
    myname.value = 'xiaoming'
}

//计算属性
const computedName = computed(()=>myname.value.substring(0,1).toUpperCase()+myname.value.substring(1))

const handleright = (value) => {
    console.log('app',value)
}
</script>