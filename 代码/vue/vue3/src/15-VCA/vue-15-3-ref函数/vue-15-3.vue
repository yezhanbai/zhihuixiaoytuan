
<!-- ref函数的使用 -->

<template>
    <div>
        app
        {{ myname }}
        <input type="text" ref="myinput">
        <button @click=handleClick>click</button>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {      //setup中，this用法都失效
        //ref(基本类型)   与 reactive() 不同的是，ref() 主要用于基本数据类型（如数字、字符串、布尔值）和原始值的响应式追踪，但也可以用于对象，只不过要多点一层value
        const myname = ref("kerwin")      //kerwin字符串变成了响应式的    底层代码逻辑：new Proxy({value:'kerwin'})    kerwin其实是对象的一个value值

        const myinput = ref(null)
        const handleClick = () => {
            console.log(myname.value)       //获取值
            myname.value = 'xiaoming'

            console.log(myinput)                //数据对象
            console.log(myinput.value)          //获取到dom节点    不管基本类型或者复杂类型，都要.value，才能拿到基本类型、绑定的dom节点、绑定的组件对象
            console.log(myinput.value.value)     //获取到值

        }
        return {
            myname,
            handleClick,
            myinput
        }
    }
}
</script>