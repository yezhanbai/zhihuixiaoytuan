<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleClick">{{ data }}</li>
        </ul>
    </div>
</template>

<!-- zi2：列表显示 -->
<script>
import {inject, ref} from 'vue'
export default{
    setup(){
        const datalist = ref(['aaa','bbb','ccc','ddd','eee'])
        const which2 = inject('which1')         //2.注入     
        const handleClick = () =>{
            which2.value = 'zi3'    //直接写组件名字
        }
        return {
            datalist,
            handleClick
        }
    }
}
</script>