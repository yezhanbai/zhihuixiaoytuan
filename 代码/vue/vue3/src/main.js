
import { createApp } from 'vue'
import './style.css'
import App from './15-VCA/vue-15-13-VCA语法糖（主流写法）/vue-15-13-1.vue'
import router from './21-Element-Plus组件库/路由'
// import store from './18-大案例-VCA写法-vuex/store/vuex'

//全局引入，所有组件都全局使用
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { createPinia } from 'pinia'
const pinia = createPinia()

import 'vant/lib/index.css';    //引入vant组件样式

//导入axio拦截器配置文件
import './20-vant组件库/util/config'

var app = createApp(App)
app.use(router)        //注册路由插件
// app.use(store)         //注册vuex状态管理插件
app.use(pinia)        //注册pinia状态管理插件
app.use(ElementPlus)    //注册ElementPlus组件
app.mount('#app')
