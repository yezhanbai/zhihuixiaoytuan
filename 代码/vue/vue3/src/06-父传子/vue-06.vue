<template>
    <div>
        <!-- 1.父属性设置 -->
        <zi1 v-bind="propobj"></zi1> 

        <!-- 需求：控制“返回”，“打开”按钮的显示与隐藏 -->
        <zi2 v-bind="propobj" :leftshow="true"  :rightshow="true"></zi2>

        <!-- 透传，组件上的class会透传到各自的vue及他们的后代，点击事件也会透传到儿子的根节点身上 -->
        <zi3 class="jiejie"  @click="handleClick()"></zi3>
    </div>
</template>

<script>
/* 父传子，每次父状态改完都会自动流入孩子里面 */
import zi1 from './子/zi1.vue'
import zi2 from './子/zi2.vue'
import zi3 from './子/zi3.vue'
export default {
    data() {
        return {
            propobj: {
                'my-title': '首页',        //my-title为自定义的属性
                left: '返回',
                right: '打开'
            }
        }
    },
    methods:{
        handleClick(){
            console.log("click")
        }
    },
    components: {
        zi1,
        zi2,
        zi3
    }
}
</script>