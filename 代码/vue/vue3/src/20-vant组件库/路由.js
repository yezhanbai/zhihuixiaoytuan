/* 这个需要被main.js引入，并注册 */
/* 想做单页面应用开发，又不想自己window.，还是watch监听路径的改变，来切换组件，所以站在巨人的肩膀上来跳高来使用，从而学习路由 */

//路由配置
import { createRouter, createWebHistory } from 'vue-router'
import Films from './views/Films.vue'
// import Cinemas from '../16-大案例/views/Cinemas.vue'
// import Center from '../16-大案例/views/Center.vue'
import NotFound from './views/NotFound.vue'
import nowplaying from './views/films/nowplaying.vue'
import comingsoon from './views/films/comingsoon.vue'
import detail from './views/Detail.vue'
import Login from './views/Login.vue'
import City from './views/City.vue'


const routes = [
    // {
    //     path:"/",      //给'/'也加上组件，控制台就没有警告了
    //     component:Films
    // },
    {
        //将来路径是/films时，就加载Film组件
        path: "/films",         // 路径名字和组件名字务必关联，不然代码可读性差
        name: 'myfilms',        // 给路径匹配的组件起一个名字    命名路由
        alias: '/wode',            //别名，通过这个路径也可以找到Films组件
        component: Films,       // component：该路径加载哪一个组件
        children: [        //嵌套路由
            {
                path: '/films/nowplaying',
                component: nowplaying
            },
            {
                path: 'comingsoon',      //这个写法和上面写法功能是一样的
                component: comingsoon
            },
            {
                path: '/films',
                redirect: '/films/nowplaying'
            }
        ]
    },
    {
        path: "/cinemas",
        component: () => import('./views/Cinemas.vue')      //上面静态导入，注释掉改成动态导入，实现懒加载，避免用户打开首页时，全部加载导致首页显示过慢
    },
    {
        path: "/center",
        component: () => import('./views/Center.vue'),
        meta: {
            requireAuth: true         //名字自定义，设为true就是需要授权
        }
    },
    {
        path: '/',
        redirect:'/films',         // 重定向到films路径
        // redirect: {
        //     name: 'myfilms'         // 根据名字重定向
        // }
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        path: '/:pathMatch(.*)*',         //如果任意路径都没匹配到，就加载下面的组件        
        component: NotFound
    },
    {
        path:'/city',
        component:City
    },
    {
        path: '/detail/:myid',         //需要写成动态的，因为点击跳转是后面带着id跳转的，：是占位符，myid是随便起的名
        name: 'Detail',
        component: detail
    },
    

    //❤
    // {
    //     path:'/detail',
    //     component:Detail
    // }

]

//这里是官方文档的：调用 createRouter() 函数创建路由器实例
const router = createRouter({
    history: createWebHistory(),         //history：模式   例：/film   /center
    routes,       //上面内容的简写
})

// 全局拦截  -后台 系统     除了登录页面，其他页面都必须授权才能访问   支持异步
// router.beforeEach(async (to, from, next) => {         //在每一次路由跳转之前，都会经历这个回调函数    to：要跳到的路由对象，from：从哪个路由对象来的，next：不调用就不能继续执行，点击不好用
//     let isAuthenticated = await localStorage.getItem('token')     //登录成功就往你的本地存储一个token，如果没有就是false
//     console.log(to.fullPath)        //拿到path路径
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })  
//     else next()      
//     })
//     // to.name !== 'Login'：检查目标路由的名字是否不是 'Login'。         !isAuthenticated：检查用户是否未被认证（即没有登录）。     
//     // next({ name: 'Login' })：如果上述两个条件都满足，则重定向到名为 'Login' 的路由。         else next()：否则，放行。
//     //这意味着，如果用户尝试访问的不是登录页面，并且用户当前没有通过身份验证，那么他们将被重定向到登录页面。如果用户已经是认证状态或者试图访问的就是登录页面，那么导航将继续正常进行


//
//前置钩子：进入路由前，可以部分拦截  某些页面需要授权才能访问
router.beforeEach(async (to, from, next) => {         
    let isAuthenticated = await localStorage.getItem('token')     

    //方案一
    // var arr = ['/center','/card']      //需要跳转到登录页面的，设置在数组里
    // if (to.name !== 'Login' && !isAuthenticated  && to.fullPath ==='arr') next({ name: 'Login' })     
    // else next()   

    //方案二
    if (to.name !== 'Login' && !isAuthenticated  && to.meta.requireAuth) next({ name: 'Login' })       //检查跳转的路由对象有没有meta.requireAuth属性
        else next()
    })

    //后置钩子：进入路由后，做一些用户行为的分析，数据分析，和一些辅助作用，比如电影网站，收集客户点了哪些电影比较多，来判断哪些电影比较火   
    router.afterEach((to,from)=>{
        console.log('提交后端，当前使用人的一些行为信息')
    })


export default router