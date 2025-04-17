
<template>
    <div>
        <Transition :name="myname">         <!-- 3.动态绑定父传来的自定义属性，这一步是复用的关键 -->
            <slot></slot>
        </Transition>

    </div>
</template>

<script>

export default {
    props:['myname']       //2.接收父的自定义属性
}
</script>

<style>
.ltor-enter-active {
    animation: kerwinimate 1s;
}

.ltor-leave-active {
    animation: kerwinimate 1s reverse;
}

@keyframes kerwinimate {
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}


.rtol-enter-active {
    animation: kerwinimate2 1s;
}

.rtol-leave-active {
    animation: kerwinimate2 1s reverse;
}

@keyframes kerwinimate2 {
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