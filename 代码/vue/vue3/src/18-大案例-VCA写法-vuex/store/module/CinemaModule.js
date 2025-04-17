
import axios from 'axios'
const CinemaModule = {
    namespaced:true,       //开启命名空间，这样才能在辅助函数中带上
    state() {
        return {
            cinemaList: []
        }
    },
    //唯一修改状态的位置，属于同步，能被记录下来，方便后期调试
    mutations: {      
        changeCinaemaList(state,payload){        //2_接收
            state.cinemaList = payload
        }
    },
    //同步+异步
    actions: {
        async getCinemaList(store,payload) {         //在这里面做异步工作      目的：把数据缓存下来，减少服务器的请求
            console.log('ajax',payload)
            var res = await axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6552801',
                headers: {
                    'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"172483264511562563061940225","bc":"150200"}',
                    'X-host': 'mall.film-ticket.cinema.list'
                }
            })
            console.log(res.data.data.cinemas)
            //提交mutation
            store.commit('changeCinaemaList',res.data.data.cinemas)        // 1_提交    
        }
    },
    
    // getter 相当于store的计算属性，主要是之前好不容易获得的changeCinaemaList，不符合使用条件，所以来进行二次处理
    getters:{
        filterCinemaList(state){
            return (type)=>{
                return state.cinemaList.filter(item=>item.eTicketFlag===type)
                  }      //state.cinemaList   它一开始也是个空数组，等取回了数据，这里也会重新计算，从而渲染    eTicketFlag是后端返回的属性之一
        }
    }
}

export default CinemaModule