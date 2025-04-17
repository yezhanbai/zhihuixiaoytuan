<template>
    <div>
        <button v-show="left" @click="handleClick">返回</button>
        {{ computedTitle }}
        <button v-show="left">首页</button>
    </div>
</template>

<script>
import {computed} from 'vue'
export default {
    props:{
        title:String,
        left:Boolean
    },
    // setup(props){         //props：所有传过来的属性的集合
    //     console.log(props)
    //     const computedTitle = computed(()=>props.title+'-11111') 
    // }   
    setup({title},{emit}){         //解构写法，只需要相应的属性
        const computedTitle = computed(()=>title+'-11111')
        const handleClick = () => {
            console.log('click')
            emit('leftevent','来自孩子的问候')
        }
        return {
            computedTitle,
            handleClick
        }
    }
}
</script>