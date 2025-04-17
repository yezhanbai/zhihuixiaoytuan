<!-- 知识点：一个页面切换到另一个页面，切换的页面走创建周期，原来的页面走删除周期，比如：http://localhost:5173/films/nowplaying切换到：http://localhost:5173/cinemas，如果是页面内部切换，走更新周期，比如：http://localhost:5173/detail/7229切换到：http://localhost:5173/detail/6789 -->

<template>
    <div>
        center
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>

<!-- <script>
//组件自己内部的拦截---组件内的守卫，作用和路由的全局拦截，局部拦截一样
export default {
    async beforeRouteEnter(to, from, next) {          //钩子1，在进入路由之前做一些操作 
        let isAuthenticated = await localStorage.getItem('token')

        if (isAuthenticated) {
            next()
        } else {
            next({ name: "Login" })
        }
    },

    beforeRouteLeave(){       //钩子3，在离开之前调用的声明周期，一般用来做一些二次确认
        const answer = window.confirm('你确定要离开吗')
        if(!answer) return false        //如果点击取消，answer为假，取反就为真，为真就走return
    }

}
</script> -->

<!-- 改造 -->
<script setup>
import { onBeforeRouteLeave } from 'vue-router'

import {Button as vanButton} from 'vant'     //引入vant组件，自己重命名

// console.log(onBeforeRouteEnter)         //没有onBeforeRouteEnter，没法进行setup改造，直接用路由守卫
onBeforeRouteLeave(() => {
    const answer = window.confirm('你确定要离开吗')
    if (!answer) return false
})
</script>

<!-- 合并写法，不推荐 -->
<!-- <script>
import { onBeforeRouteLeave } from 'vue-router'
export default {
    setup(){
        onBeforeRouteLeave(() => {
    const answer = window.confirm('你确定要离开吗')
    if (!answer) return false
        })
    },
    async beforeRouteEnter(to, from, next) {          //钩子1，在进入路由之前做一些操作 
        let isAuthenticated = await localStorage.getItem('token')

        if (isAuthenticated) {
            next()
        } else {
            next({ name: "Login" })
        }
    }
}
</script> -->