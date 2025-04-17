
<!-- 自己写的关键帧动画 -->

<template>
    <div>
        <button @click="isShow = !isShow">click</button>
        <!-- 使用条件：包在有变化的节点中：v-if，v-show -->
        <Transition name="kerwin" appear mode="out-in"> <!-- 提供name属性，变成唯一性 -->   <!-- appear：刷新页面时，也能生效 -->    <!-- mode="in-out"：先进再出   mode="out-in"：先出再进 -->

            <!--  Transition不支持两个div并行，但是支持两个套在一个div里 -->
            <!--        
                <div  v-show="isShow">
                <div>1111111</div>
                <div>2222222</div>          
            </div> 
            -->

            <!-- Transition又支持两个div并行了，但是局限一个生效 -->
            <div v-if="isShow">1111111</div>
            <div v-else>2222222</div>
        </Transition>
    </div>
</template>

<script>

export default {
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style>
.kerwin-enter-active {
    animation: kerwinimate 1s;
    /* animation：关键帧动画，kerwinimate：自定义的关键帧 */
}

.kerwin-leave-active {
    animation: kerwinimate 1s reverse;
    /* reverse：反方向 */
}

@keyframes kerwinimate {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}
</style>