<!-- 多看文档对比效果 -->
<template>
    <!-- Container 布局容器 -->
    <el-container class="layout-container-demo" style="height: 100vh">
        <!-- 100vh 是 CSS 中的一个单位，代表视窗高度（viewport height）的 100% -->
        <el-aside width="200px">
            <el-scrollbar> <!-- 超过父盒子会出现滚动条，且优化过样式 -->
                <el-menu :router="true" :default-active="route.fullPath">
                    <!-- :router：是否开启点击跳转，default-active：页面加载时默认激活菜单的index，高亮显示 -->
                    <!-- el-menu-item：不可展开的样式，el-sub-menu：可展开的样式 -->
                    <el-menu-item index="/home"> <!-- index：唯一标识，可以放要跳转的路由 --> <!-- 不可展开 -->
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>

                    <el-sub-menu index="/news"> <!-- 可展开 -->
                        <template #title>
                            <el-icon>
                                <message />
                            </el-icon>新闻管理
                        </template>
                        <el-menu-item index="/news/addnews">
                            <span>创建新闻</span>
                        </el-menu-item>
                        <el-menu-item index="/news/newslist">
                            <span>新闻列表</span>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>


        <el-container>
            <el-header> <!-- 自带class属性 -->
                <div>新闻管理系统</div>
                <div>欢迎kerwin回来</div>
                {{ console.log(route.fullPath) }} <!-- 拿到的路由路径 -->
            </el-header>

            <el-main> <!-- 自带滚动条 -->
                <el-scrollbar>
                    <router-view></router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { Message, HomeFilled } from '@element-plus/icons-vue'      //引入图标组件，虽然element-plus全局引入了，唯独图标组件还需要单独引入
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.el-header {
    background: lightblue;
    display: flex;
    justify-content: space-between;
    align-items: center
}
</style>
