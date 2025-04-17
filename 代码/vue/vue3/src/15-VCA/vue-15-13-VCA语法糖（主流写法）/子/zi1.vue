<template>
    <div>
        <!-- child-{{ title }}                
        <div>{{ props.title }}</div>     -->

        <button>返回</button>
        {{ title }}
        <button @click="handleHome">首页</button>

    </div>
</template>

<script setup>
// import { defineProps,defineEmits } from 'vue';      //这似乎不引入也能正常用了

const props = defineProps({          //属性验证，相关父传子写法，如果只是页面中使用这个属性，‘const props =’ 都不需要写，写这个是用来方便二次操作的
    title:{
        type:String,
        default:'000000'
    }
})

const emit = defineEmits(['right'])        //相关子传父写法，接受父的监听
const handleHome = () => {
    emit('right','来自孩子的问候')
}

console.log(props.title)


</script>