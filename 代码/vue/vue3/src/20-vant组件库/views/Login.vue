<template>
    <div>
        <h2>login页面</h2>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<!-- <script>
    export default {
        methods:{
            handleLogin(){
                localStorage.setItem('token','aaaaaa')
                this.$router.push('/')
            }
        }
    }
</script> -->

<!-- 改造 -->
<script setup>
import { useRouter } from 'vue-router'       //自定义hooks
//通义千问：useRouter 是 Vue Router 3.x 和 Vue Router 4.x 中提供的一个组合式 API 函数，用于在 Vue 组件中使用路由实例。它使得开发者可以在组合式 API（Composition API）风格的组件中轻松地访问当前的路由对象和导航方法

//const router = useRouter()，通过 router 实例，你可以访问所有与路由相关的功能，比如导航、监听路由变化等：
//导航到新路由：使用 router.push 方法来导航到不同的页面。
//后退或前进：使用 router.go(-1)、router.back()后退一页，或者 router.go(1) 前进一页。
//替换当前路由：使用 router.replace 方法来替换当前的路由而不添加新的历史记录条目。
//监听路由变化：使用 router.beforeEach 等全局守卫来监听路由的变化。
const router = useRouter()
const handleLogin = () => {           //定义好方法
    localStorage.setItem('token', 'aaaaaa')
    router.push('/')
}
</script>