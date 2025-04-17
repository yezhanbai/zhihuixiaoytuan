
import { defineStore } from 'pinia'
import axios from 'axios'


const useCinemaStore = defineStore('cinema',{
    //option store 写法
    state:()=>({
        cinemaList:[]
    }),
    //同步+异步
    actions:{
        async getCinemaList(){        //把数据缓存下来，减少服务器的请求
                console.log('ajax')
                var res = await axios({
                    url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6552801',
                    headers: {
                        'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"172483264511562563061940225","bc":"150200"}',
                        'X-host': 'mall.film-ticket.cinema.list'
                    }
                })
                console.log(res.data.data.cinemas)
    
                this.cinemaList = res.data.data.cinemas
            
        }
    },
    //类似计算属性
    getters:{
        filterCinemaList(state){
            return (type)=>{
                return state.cinemaList.filter(item=>item.eTicketFlag===type)
        }
    }
}
})

export default useCinemaStore