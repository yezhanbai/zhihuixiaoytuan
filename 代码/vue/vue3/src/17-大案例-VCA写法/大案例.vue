<template>
    <div>
        <!-- 根组件地位最高，需要留插槽给其他组件显示，不然其他组件再怎么切换路由也不生效，只需要留下插槽就行，剩下交给路由，只要路径一改变，就会自动插入显示对应页面 -->
        <router-view></router-view><!-- 路由的插槽-路由容器 -->

        <Tabbar></Tabbar>     <!-- 底部导航栏组件 -->
    </div>
</template>

<script setup>
import Tabbar from '../17-大案例-VCA写法/components/Tabbar.vue'

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