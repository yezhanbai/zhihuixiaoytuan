<template>
    <div>
        <!-- 根组件地位最高，需要留插槽给其他组件显示，不然其他组件再怎么切换路由也不生效，只需要留下插槽就行，剩下交给路由，只要路径一改变，就会自动插入显示对应页面 -->
        <router-view></router-view><!-- 路由的插槽-路由容器 -->

        <Tabbar v-show="store.isTabbarShow"></Tabbar>       <!-- 底部导航栏组件 -->
    </div>
</template>

<script setup>
import Tabbar from './components/Tabbar.vue'
import useTabbarStore from './store-setupStore写法/tabbarStore'
// import {storeToRefs} from 'pinia'       
const store = useTabbarStore()
// const {isTabbarShow} = useTabbarStore()       //store是一个reactive包装的对象，解构后会拿到值，但是会失去响应式
// const {isTabbarShow} = storeToRefs(store)     //想要恢复响应式可以这样写，但不推荐
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}
</style>