<template>
    <div>
        <h2>login页面</h2>
        <button @click="handleLogin">登录</button>
    </div>
</template>

<script>
    export default {
        methods:{
            handleLogin(){
                localStorage.setItem('token','aaaaaa')
                this.$router.push('/')
            }
        }
    }
</script>

<!-- 改造 -->
<!-- <script setup>     
import {useRouter} from 'vue-router'       //自定义hooks
//通义千问：useRouter 是 Next.js 中的一个 Hook，用于在 React 组件中使用 Next.js 的路由器功能。它提供了对当前路由状态的访问以及导航的能力。你可以使用 useRouter 来读取查询参数、路径名、或者执行页面之间的跳转等
const router = useRouter()     
    const handleLogin = () =>{           //定义好方法
        localStorage.setItem('token','aaaaaa')
        router.push('/')
    }
</script> -->