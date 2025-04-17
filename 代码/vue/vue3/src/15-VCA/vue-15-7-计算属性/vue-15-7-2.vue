
<!-- 自定义hooks，模糊查询案例 -->
<!-- 平时开发中，一个组件可能比较复杂，有多套逻辑，这时候可以把每个逻辑再单独封装，引用 -->

<template>
    <div>
        <input type="text" v-model="mytext">

        <ul>
            <li v-for="data in computedList" :key="data">    <!-- 6.渲染在页面上 -->
                {{ data }}       <!-- 7.有个疑问：data是for循环的computedList，computedList是每次过滤后的结果，一开始时mytext.value是空，按理说过滤出包含空，应该一个值都不显示 -->
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from 'vue';
import useSearch from './search';       //4.导入useSearch方法   

export default {
    setup() {
        const state = reactive({
            datalist: []
        })

        setTimeout(()=>{          //1.模拟真实场景，datalist数据异步取到，因为是异步，所以一开始还没执行setTimeout时，mytext和computedList都被赋为空，又因为整体代码都是响应式的，等2秒后数据到了，会再次走useSearch(state)
            state.datalist = ['aaa', 'aab', 'abc', 'bbc', 'bcd', 'aef', 'bdf', 'cde']
        },2000)


        return {      
            state,   
            ...useSearch(state)       //5.获得search.js中return出来的mytext，computedList
        }
    }
}
</script>