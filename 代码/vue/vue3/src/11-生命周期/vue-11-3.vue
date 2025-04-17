
<!-- 销毁阶段，复习时，zi1和zi2只放一个出来看 -->

<template>
    <div>
        app-<button @click="isCreated=!isCreated">click</button>     <!-- 点击后正常走销毁周期 -->
        <!-- <zi1 v-if="isCreated"></zi1> -->
        <zi2 v-if="isCreated"></zi2>
    </div>
</template>

<script>
import zi1 from './子/zi1.vue'
import zi2 from './子/zi2.vue'
export default {
    components:{
        zi1,
        zi2
    },
    mounted(){       
        console.log("app-mounted")
    },
    data(){
        return{
            isCreated:true
        }
    }
}
</script>