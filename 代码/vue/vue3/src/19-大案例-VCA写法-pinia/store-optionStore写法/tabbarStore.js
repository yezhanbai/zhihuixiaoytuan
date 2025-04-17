
/* pinia可以创建不止一个store，TabbarStore.js只是其中之一 */
import { defineStore } from 'pinia'      //定义defineStore方法


const useTabbarStore = defineStore('tabbar',{         //第一个参数：唯一的storeID
    //未来除了state，还有上面getters，actions，这就是option Store 写法
    state:() =>{
        return {          //对象不能去大括号来简写
            isTabbarShow:true
        }
    },
    //getters
    //actions

    //这里用actions做的同步
    actions:{
        //同步的演示，用于写法3
        change(value){
            this.isTabbarShow = value
        }
    }

})

export default useTabbarStore





