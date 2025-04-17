
/* 把每个模块的状态各自写在一起，最后再整合在store里 */

import { CHANGE_TABBAR } from '../type'

const TabbarModule = {
    namespaced:true,
    state() {
        return {
            isTabbarShow: true
        }
    },

    mutations: {      
        // showTabbar(state){              //注意传形参
        //     state.isTabbarShow = true
        // },
        // hideTabbar(state){
        //     state.isTabbarShow = false
        // }

        //为了传参
        // changeTabbar(state,payload){
        //     state.isTabbarShow = payload       //参数赋值给state
        // }

        [CHANGE_TABBAR](state, payload) {        //用中括号表示变量，拿到的还是小写字母
            state.isTabbarShow = payload
        }
    }
}

export default TabbarModule