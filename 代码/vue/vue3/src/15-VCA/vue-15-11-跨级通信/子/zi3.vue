<template>
    <div>
        zi3
    </div>
</template>

<!-- zi3：进入zi3后，让zi1隐藏 -->
<script>
import { inject, onMounted } from 'vue';        //onMounted等同于生命周期mounted
export default {
    setup() {
            const show2 = inject('show1')
            onMounted(()=>{           //为了判断zi3组件什么时候加载完，用生命周期
                show2.value = false
            }
            )
        } 
    }
</script>