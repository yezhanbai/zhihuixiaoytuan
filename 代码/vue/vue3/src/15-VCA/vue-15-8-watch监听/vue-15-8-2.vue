
<!-- watch案例 -->

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
import { ref,watch } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const select = ref('kerwin')          // ref里面放默认值
        const list = ref([])

        //监听异步
        watch(select,(value)=>{
            console.log(value)
            axios.get(`http://localhost:3000/news?author=${value}`)      //axios是基于promise封装的，后面可以接.then，因为是promise对象
            .then(res=>{
                console.log(res.data)
                list.value = res.data
            })
        },{immediate:true})
        return {
            select,
            list
        }
    }
}
</script>