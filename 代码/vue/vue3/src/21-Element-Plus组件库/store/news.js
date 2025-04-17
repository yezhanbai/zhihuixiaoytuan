
import { defineStore } from 'pinia'     //定义defineStore方法
import {ref} from 'vue'

//唯一的storeID
const useNewsStore = defineStore('news',()=>{        
    //ref包装定义的就是 state
    const list = ref([])       //用ref定义将来所有的状态，可以定义n个状态

    const add = (value)=>{
        list.value.push({...value})        //展开，这样点击创建后新数据不会覆盖旧数据，注意中括号
    }
    return {
        list,
        add
    }
})


export default useNewsStore

/* 
在Setup Store中
ref()  就是state属性
computed()   就是getters
function()   就是actions
*/

