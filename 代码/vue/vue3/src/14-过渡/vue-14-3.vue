
<!-- 利用第三方库动画 -->

<template>
    <div>
        <button @click="isShow = !isShow">click</button>
        <!-- animate__animated：这个必写      animate__bounceIn：这个复制的第三方库的属性-->
        <Transition enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated animate__flash">      
            <div v-show="isShow">1111111</div>
        </Transition>
    </div>
</template>

<script>
import 'animate.css';
export default {
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style>
    div{
        text-align: center;
        margin: 30px;
    }
</style>