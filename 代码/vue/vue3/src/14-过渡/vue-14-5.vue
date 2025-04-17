<!-- 可复用过渡 -->

<template>
    <div>
        <button @click="isShow=!isShow">click</button>
        <zi1 myname="ltor">     <!-- 1.自定义属性，传给孩子，获取想要的样式 -->                   
            <div v-if="isShow">1111111</div>
        </zi1>

        <zi1 myname="rtol">     <!-- 4.再次复用 -->                   
            <div v-if="isShow">1111111</div>
        </zi1>
    </div>
</template>

<script>
import zi1 from './子/zi1.vue'
export default {
    data(){
        return {
            isShow:true
        }
    },components:{
        zi1 
    }
}
</script>