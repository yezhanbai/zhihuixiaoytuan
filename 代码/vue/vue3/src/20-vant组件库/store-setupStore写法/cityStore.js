/* pinia可以创建不止一个store */
import { defineStore } from 'pinia'     //定义defineStore方法
import {ref} from 'vue'

//唯一的storeID
const useCityStore = defineStore('city',()=>{        //tabbar这个名字对我们开发没有用，对于pinia有用，它需要表示，只要不重复就可以了
    //ref包装定义的就是 state
    const cityName = ref('北京')       //设定初始值
    const cityId = ref(110100)       

    const change = (name,id)=>{
        cityName.value = name
        cityId.value = id

    }
    return {
        cityName,
        cityId,
        change
    }
})


export default useCityStore

/* 
在Setup Store中
ref()  就是state属性
computed()   就是getters
function()   就是actions
*/

