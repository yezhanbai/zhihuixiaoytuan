<!-- reactive函数使用案例，可以和ref案例一起看 -->

<template>
    <div>
        <input type="text" v-model="state.mytext">
        <button @click="handleClick">add</button>
        <ul>
            <li v-for="(data, index) in state.datalist" :key="data">
                {{ data }}
                <button @click=handleDel(index)>del</button> <!-- 一点击按钮，把当前的索引值传进去 -->
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup() {
        const state = reactive({
            mytext: "",
            datalist: ['111', '222', '333']
        })

        const handleClick = () => {
            state.datalist.push(state.mytext)
            state.mytext = ''       //清空
        }
        const handleDel = (index) => {
            state.datalist.splice(index, 1)
        }
        return {
            state,
            handleClick,
            handleDel
        }
    }
}
</script>