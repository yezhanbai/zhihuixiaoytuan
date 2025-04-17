<template>
    <div>
        app
        <div v-kerwin="'red'">111111</div>     <!-- 属性 -->
        <div v-kerwin="'yellow'">222222</div>
        <div v-kerwin="whichColor">33333</div>   <!-- 状态 -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            whichColor:"blue"
        }
    },
    /* 全局定义：在main.js中定义   app.directives('kerwin',{
        mounted(el){
            console.log('当前节点插入到父节点得时候调用,el')
        }
    }) */

    //局部定义    只能活在当前vue中，孩子也没法用
    directives: {
        // kerwin: {
        //     mounted(el,binding) {       //1.只有在创建的时候会触发一次
        //         console.log('当前节点插入到父节点的时候调用', binding)
        //         el.style.background = binding.value
        //     },
        //     updated(el,binding) {       //2.用生命周期中的更新钩子
        //         console.log('当前节点插入到父节点的时候调用', binding)
        //         el.style.background = binding.value
        //     }
        // }

        //简写方式：函数形式
        kerwin(el,binding){
            console.log(el,binding)        //(dom节点，指令方法)
            el.style.background = binding.value
        }
    }

}
</script>