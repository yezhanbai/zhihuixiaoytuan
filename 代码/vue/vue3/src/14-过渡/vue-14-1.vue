<template>
    <div>
        <button @click="isShow = !isShow">click</button>
        <!-- 使用条件：包在有变化的节点中：v-if，v-show -->
        <Transition name="kerwin">       <!-- 提供name属性，变成唯一性 -->
            <div v-show="isShow">1111111</div>
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
.v-enter-active,          /* 进入的动画 */
.v-leave-active {         /* 离开的动画 */
    transition: all 0.5s ease;
}

.v-enter-from,            /* 开始的最终样式 */
.v-leave-to {             /* 结束的最终样式 */
    transform: translateX(100px);
    opacity: 0;      /* 设置元素的透明度 */
}

/* 对应改成kerwin */
.kerwin-enter-active,        
.kerwin-leave-active {        
    transition: all 2s ease;
}

.kerwin-enter-from,            
.kerwin-leave-to {            
    transform: translateX(300px);
    opacity: 0;
}
html,body{
    overflow-x:hidden
}
</style>