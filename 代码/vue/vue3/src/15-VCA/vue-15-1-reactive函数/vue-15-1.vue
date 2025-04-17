<!--  vue3两种写法都兼容
    VOA：向下兼容vue2的写法，kerwin之前所讲的都是这种写法，
    VCA：函数式写法，也叫组合式API，万物皆函数，主流写法，比VOA更加容易提取公共复用的逻辑，比如VOA写法：两个组件有一段共用的js逻辑，如果要复用需要传大量的参数
-->

<template>
    <div>
        <div>{{ obj.myname }}</div>

        <button @click="handeleClick">click</button>
    </div>
</template>

<script>
import { reactive } from 'vue'
export default {
    setup(){         //未来代码都在这里面      这里面this相关都没法用
        console.log('setup')

        const obj = reactive({         //经过reactive包装，得到了响应式的数据对象，通过 reactive 创建的对象会自动与组件的状态绑定，当对象中的属性发生变化时，Vue 的响应式系统会自动检测到这些变化，并更新相关的视图            
            myname:'kerwin',
            myage:18
        })
        
        const handeleClick = () =>{     //方法也可以定义
            console.log('小小飞')
            obj.myname = 'xiaoming'
            obj.myage = 100
            console.log(obj)
        }

        return {           //obj只是个临时变量，必须return出去才可以用       方法也需要return出去     简单理解就是：const什么，就return出去什么
            // obj:obj
            obj,
            handeleClick
        }
    }
}
</script>