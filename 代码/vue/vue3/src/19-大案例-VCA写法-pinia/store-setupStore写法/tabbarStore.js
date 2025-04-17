/* pinia可以创建不止一个store */
/* pinia是做状态管理的，一刷新页面就丢了 */
import { defineStore } from 'pinia'     //定义defineStore方法
import {ref} from 'vue'

//唯一的storeID
const useTabbarStore = defineStore('tabbar',()=>{        //tabbar这个名字对我们开发没有用，对于pinia有用，它需要表示，只要不重复就可以了
    //ref包装定义的就是 state
    const isTabbarShow = ref(true)       //用ref定义将来所有的状态，可以定义n个状态

    const change = (value)=>{
        isTabbarShow.value = value
    }
    return {
        isTabbarShow,
        change
    }
})


export default useTabbarStore

/* 
在Setup Store中
ref()  就是state属性
computed()   就是getters
function()   就是actions
*/







