<template>
    <div>
        <zi1 title="首页" :left="true" @leftevent="handleLeft"></zi1> <!-- true和false是字符串，要动态绑定，控制显示或隐藏 -->
        <zi1 title="影院" :left="false"></zi1>     
    </div>
</template>

<script>
import zi1 from './子/zi1.vue'
export default {
    components: {
        zi1
    },
    setup() {
        const handleLeft = (aaa) => {          //放形参，接收孩子的问候
            console.log('left button',aaa)        
        }
        return {
            handleLeft
        }
    }
}
</script>