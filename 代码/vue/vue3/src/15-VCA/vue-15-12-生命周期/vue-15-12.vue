<template>
    <div>
        app-{{ a }}
        <button @click="handleClick">click</button>
        <zi1 v-if="iscreated"/>
    </div>
</template>

<script>
import {onBeforeMount,onBeforeUpdate,onMounted, onUpdated,ref,nextTick} from 'vue'
import zi1 from './子/zi1.vue'
export default {
    components:{
        zi1
    },

    setup(){
        const a = ref('11111')
        const iscreated = ref(true)
        // const b = ref('')
        onBeforeMount(()=>{
            console.log('dom创建之前调用')
        })

        onMounted(()=>{
            console.log('订阅,ajax,dom创建后,swiper,echart初始化')
        })

        onBeforeUpdate(()=>{
            console.log('更新之前调用')
        })

        onUpdated(()=>{
            console.log('更新之后调用')
        })

        const handleClick = () =>{
            a.value = '22222',
            iscreated.value = false

            nextTick(()=>{         //同样为了防止任意属性值改变，整体改变情况
                console.log('nexttick')
            })

        }
        return {
            a,
            handleClick,
            iscreated
        }

    }
}
</script>