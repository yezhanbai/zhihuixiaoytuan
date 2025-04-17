<template>
    <div>
        zi1
    </div>
</template>

<script>
export default {
    mounted() {                 //父与字都有时，肯定是child的先执行
        window.onresize = () => {        //1.父点击销毁后，这里验证了window下面的dom依然生效
            console.log("resize依然生效")
        }
        console.log("child-mounted")
    },

    //点击销毁后，按顺序走下面两个生命周期，正常父点击按钮执行销毁不会销毁window下面的dom，比如定时器，需要手动在下面两个中写解绑代码，这也是他们存在的唯一意义
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
        window.onresize = null      //在这里面销毁才生效
    }
}
</script>