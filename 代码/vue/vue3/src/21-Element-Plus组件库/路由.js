/* 这个需要被main.js引入，并注册 */

//路由配置
import {createRouter,createWebHistory } from 'vue-router'

import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import AddNews from './views/AddNews.vue'
import NewsList from './views/NewsList.vue'


const routes = [
    {
        path:"/home",      
        component:Home
    },
    {
        path:"/news/addnews",      
        component:AddNews
    },
    {
        path:"/news/newslist",      
        component:NewsList
    },
    {
        path:"/",      
        redirect:"/home"
    },
    { 
        path: '/:pathMatch(.*)*',        
        component: NotFound 
    }
]

const router = createRouter({
    history: createWebHistory(),       
    routes,       //简写
})
export default router