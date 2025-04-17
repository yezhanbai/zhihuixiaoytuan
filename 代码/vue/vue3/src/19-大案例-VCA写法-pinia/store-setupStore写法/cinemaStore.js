
import { defineStore } from 'pinia'
import axios from 'axios'
import { computed } from 'vue'
import {ref} from 'vue'


const useCinemaStore = defineStore('cinema', () => {
    const cinemaList = ref([])     
    const getCinemaList = async () => {
        var res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=6552801',
            headers: {
                'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"172483264511562563061940225","bc":"150200"}',
                'X-host': 'mall.film-ticket.cinema.list'
            }
        })
        cinemaList.value = res.data.data.cinemas
    }

    //optionStore写法的getters其实就是计算属性的写法代替
    const filterCinemaList = computed(()=>
        (type)=>{
            return cinemaList.value.filter(item=>item.eTicketFlag===type)
    })
    return {
        cinemaList,
        getCinemaList,
        filterCinemaList
    }
})

export default useCinemaStore