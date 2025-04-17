<!-- 
    没有惰性，页面首次加载就会执行，watch就不会
    只需要一个回调函数
    不能获取之前数据的值
    适合放异步操作

    与watch的区别：总结来说，选择watch还是watchEffect主要取决于你的具体需求：如果你需要精确控制监听哪些数据，或者想要一个非立即执行的监听器，那么watch可能是更好的选择；而如果你希望自动处理依赖关系并且不需要关心具体的监听目标，watchEffect则更加方便
-->

<template>
    <div>
        <select name="" v-model="select">
            <option value="kerwin">kerwin</option>
            <option value="tiechui">tiechui</option>
            <option value="gangdaner">gangdaner</option>
        </select>

        <ul>
            <li v-for="item in list"  :key=item.id>
                {{ item.content }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const select = ref('tiechui')       
        const list = ref([])

        watchEffect(()=>{
            axios.get(`http://localhost:3000/news?author=${select.value}`)      
            .then(res=>{
                console.log(res.data)
                list.value = res.data
            })
        })
        return {
            select,
            list
        }
    }

}
</script>