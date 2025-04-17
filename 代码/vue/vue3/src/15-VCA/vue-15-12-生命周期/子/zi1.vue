<template>
    <div>
        zi1
    </div>
</template>

<script>
import {onBeforeUnmount, onMounted, onUnmounted} from 'vue'
export default {
    setup(){
        var cleared
        onMounted(()=>{    
            cleared = setInterval(()=>{              //定时器是异步的，所以需要手动清掉
                console.log(12345)
            },2000)
        })

        onBeforeUnmount(()=>{
            console.log('删除之前调用')
        })

        onUnmounted(()=>{
            console.log('删除时调用')
            clearInterval(cleared)      //没有这一步，孩子组件去除后，定时器依然在生效
        })
    }
}
</script>