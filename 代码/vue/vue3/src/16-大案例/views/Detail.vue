<template>
    <div>
        <button @click="handleBack">返回</button>
        detail

        <h3>猜你喜欢</h3>
        <ul>
            <li @click="handleClick">哈利波特魔法觉醒</li>
        </ul>
    </div>
</template>

<!-- 改造 -->
<!-- <script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
const route = useRoute()
const router = useRouter()
//通义千问：useRoute 是 Vue Router 4 中引入的一个组合式 API（Composition API）函数，它允许你在使用 Composition API 的 Vue 组件中访问当前的路由信息。与选项式 API 中的 this.$route 类似，useRoute 提供了对当前路由对象的访问，包括路径、参数、查询字符串等。
onMounted(() => {
    console.log('接收上一个页面传来的参数', route.params.myid, '带着id参数请求后端接口')
})

const handleBack = () => {
    router.back()
}

const handleClick = () => {
    router.push(`/detail/6789`)
}

onBeforeRouteUpdate((to, from) => {
    console.log('猜你喜欢传来的参数', to.params.myid, '带着id参数请求后端接口')
})
</script> -->

<script>
export default {
    mounted(){
        console.log('接收上一个页面传来的参数',this.$route.params.myid,'带着id参数请求后端接口')      //固定属性      this.$route:当前匹配到的路由对象    params：固定词语，myid：占位符的名字

        //❤
        // console.log('接收上一个页面传来的参数',this.$route.query.myid,'带着id参数请求后端接口')      
    },
    methods:{
        handleBack(){
            this.$router.back()      //返回
            // this.$router.go(-1)     //其他写法

            // this.$router.forward()     //前进
            // this.$router.go(1)      
        },
        handleClick(){
            this.$router.push(`/detail/6789`)
        }
    },

    // watch:{         //点击猜你喜欢的电影后，虽然改了路径，但页面不会刷新，需要监听，这一段放在组件周期中了
    //     '$route.params':function(){         //$route.params：被监听对象
    //         console.log('猜你喜欢传来的参数',this.$route.params.myid,'带着id参数请求后端接口')
    //     }
    // },

    beforeRouteUpdate(to,from){             //钩子2，用组件声明周期，取代上面watch监听功能
        console.log('猜你喜欢传来的参数',to.params.myid,'带着id参数请求后端接口')
    },

}
</script>