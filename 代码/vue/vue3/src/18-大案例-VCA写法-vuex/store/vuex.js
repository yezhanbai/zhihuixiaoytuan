/* 
状态统一管理    这里都是全局的
1.页面中有多个需要共享的状态，引用vuex，便于维护（实现非父子通信）
2.缓存部分异步数据，减少后端服务的访问，增加用户体验
3.有点类似于把组件架空成了视图组件，组件里面的同步异步操作统一拿出来放在vuex中处理
4.关于87的知识，mutations和actions折射出来的是方法，getters和state折射出来的是计算属性，后者使用时不用加this
5.VCA写法不支持map辅助函数，从而引发了Pinia 的出现

*/

import { createStore } from 'vuex'           //vuex存在自己电脑内存，即缓存之中，一刷新页面就会消失
import TabbarModule from './module/TabbarModule'
import CinemaModule from './module/CinemaModule'
//相当于定义了个全局状态
const store = createStore({
    modules: {
        TabbarModule,
        CinemaModule
    }
}
)

export default store