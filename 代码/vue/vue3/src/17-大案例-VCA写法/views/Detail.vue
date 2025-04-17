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
<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';
const route = useRoute()
const router = useRouter()
//通义千问：useRoute和useRouter区别
//useRouter 主要用于获取一个路由器实例，通过这个实例可以调用与导航相关的所有方法，即作用为使用方法
//useRoute 用来访问当前路由的信息。它返回的是一个包含当前路由信息的对象（通常是只读的），包括参数、查询字符串、名称等，即作用为查询数据
//route.params：获取动态路径参数
//route.query：获取 URL 查询参数
//route.name：获取当前路由的名字
//route.path：获取当前路径
//route.fullPath：获取完整的路径，包括查询参数
//route.meta：获取路由元信息
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
</script>

<!-- <script>
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
</script> -->