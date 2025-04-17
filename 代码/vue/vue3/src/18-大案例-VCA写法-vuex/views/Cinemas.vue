<template>
    <div>
        <select v-model="type">
            <option :value="0">前台兑换</option>
            <option :value="1">APP订票</option>
        </select>
        <ul>
            <!-- 
            结合getters，单独看$store.getters.filterCinemaList，返回的是()=>{
                return state.cinemaList.filter(item=>item.eTicketFlag===0)
                }这个函数， 
                这时候传了type，就放到了把这个函数return出去的参数里了，相当于函数里调用函数，type参数传给了第二个函数
            -->
            <li v-for="data in store.getters['CinemaModule/filterCinemaList'](type)" :key="data.cinemaId">       
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'    
import { useStore } from 'vuex/dist/vuex.cjs.js';
    const type = ref(1)
    const store = useStore()
    onMounted(()=>{
        console.log(store.getters)
        if(store.state.CinemaModule.cinemaList.length===0){                   //判断store中,影院数组.length===0，则请求数据
            store.dispatch('CinemaModule/getCinemaList','参数演示')      //store.dispatch：用于触发状态更新，可以传参数，这里没有必要，仅演示
            // this.getCinemaList('参数演示')
        }else{
            console.log('缓存')        //出现缓存，成功
        }
    })

</script>

<style scoped>
    li{
        padding:10px
    }
</style>