
<!-- watch方法 -->

<!-- 背景：计算属性监听数据的改变，同步没问题，异步不行，这里要处理异步的监听 -->

<template>
    <div>
        <input type="text" v-model="mytext">
        <select v-model="select">
            <option value="aaa">aaaa</option>
            <option value="bbb">bbbb</option>
            <option value="ccc">cccc</option>
        </select>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
    setup() {
        const mytext = ref('')
        const select = ref('aaa')
        //写法1
        // watch(mytext, (newvalue,oldvalue) => {        //监听mytext  newvalue：最新值    oldvalue：上一个值
        //     console.log('同步/异步', 'ajax',newvalue,oldvalue)
        // })

        //写法2
        // watch(()=>mytext.value, (newvalue,oldvalue) => {              //这种写法也是reactive定义的写法，mytext.value改成state.mytext
        //     console.log('同步/异步', 'ajax',newvalue,oldvalue)
        // })

        // watch([mytext,select], (newvalue,oldvalue) => {         //可监听多个，任一改变都会调用
        //     console.log('同步/异步', 'ajax',newvalue,oldvalue)
        // })

        watch([mytext,select], (newvalue,oldvalue) => {        
            console.log('同步/异步', 'ajax',newvalue,oldvalue)
        },{immediate:true})        //immediate：一进页面就立即触发一次
        //deep:true      深度监听

        return {
            mytext,
            select
        }
    }
}

</script>