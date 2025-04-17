<!-- 根组件 -->
<template>
    <div>
        <dingbu></dingbu>
        <cebian></cebian>
    </div>
</template>

<script>
import dingbu from './子/dingbu.vue'
import cebian from './子/cebian.vue'
export default {
    components:{
        dingbu,
        cebian
    }
}
</script>