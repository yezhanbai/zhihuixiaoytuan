<!-- ref函数使用案例，可以和reactive案例一起看 -->

<template>
    <div>
        <input type="text" v-model="mytext">
        <button @click="handleClick">add</button>
        <ul>
            <li v-for="(data, index) in datalist" :key="data">
                {{ data }}
                <button @click=handleDel(index)>del</button> <!-- 一点击按钮，把当前的索引值传进去 -->
            </li>
        </ul>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const mytext = ref('')
        const datalist = ref(['111', '222', '333'])

        const handleClick = () => {
            datalist.value.push(mytext.value)
            mytext.value = ''        //清空
        }
        const handleDel = (index) => {
            datalist.value.splice(index, 1)
        }
        return {
            mytext,
            datalist,
            handleClick,
            handleDel
        }
    }
}
</script>