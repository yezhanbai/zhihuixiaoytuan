
import { defineStore } from 'pinia'
import axios from 'axios'
import { computed,ref } from 'vue'
// import { showLoadingToast,closeToast } from 'vant';

import useCityStore from './cityStore'
//在一个store中引入另一个store，pinia作用体现了，直接导入就行
const cityStore = useCityStore()

const useCinemaStore = defineStore('cinema', () => {
    const cinemaList = ref([])



    const getCinemaList = async () => {
        // showLoadingToast({              //显示加载框
        //     message: '加载中...',
        //     forbidClick: true,
        // });

        var res = await axios({
            url: `https://m.maizuo.com/gateway?cityId=${cityStore.cityId}&ticketFlag=1&k=6552801`,
            headers: {
                'X-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"172483264511562563061940225","bc":"150200"}',
                'X-host': 'mall.film-ticket.cinema.list'
            }
        })
        cinemaList.value = res.data.data.cinemas

        // closeToast()        //隐藏加载框
    }

    //optionStore写法的getters其实就是计算属性的写法代替
    const filterCinemaList = computed(() =>
        (type) => {
            return cinemaList.value.filter(item => item.eTicketFlag === type)
        })

    const clearCinemaList = () => [
        cinemaList.value = []
    ]

    return {
        cinemaList,
        getCinemaList,
        filterCinemaList,
        clearCinemaList
    }
})

export default useCinemaStore