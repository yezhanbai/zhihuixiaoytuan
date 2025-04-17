<template>
    <div>
        app
        {{ obj.myname }}
        {{ computedName }}
    </div>
</template>

<script>
import { reactive, computed } from 'vue'         /* 导入computed */
export default {
    setup() {
        const obj = reactive({
            myname: 'kerwin'
        })
        const computedName = computed(() => obj.myname.substring(0, 1).toUpperCase() + obj.myname.substring(1))    //把箭头函数的返回值做成计算属性的结果，在控制台的vue中演示
        return {
            obj,
            computedName
        }
    }

}
</script>
