<template>
    <div>
        <!-- vant组件 -->
        <van-nav-bar title="影院">
            <template #left>
                <div @click="handleChange">{{ cityStore.cityName }}</div>
                <van-icon name="arrow-down" color="black" />
            </template>
            <template #right>
                <van-icon name="search" size="22" color="black" />
            </template>
        </van-nav-bar>

        <select v-model="type">
            <option :value="0">前台兑换</option>
            <option :value="1">APP订票</option>
        </select>
        <ul>
            <li v-for="data in store.filterCinemaList(type)" :key="data.cinemaId">
                {{ data.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import useCinemaStore from '../store-setupStore写法/cinemaStore';
import useCityStore from '../store-setupStore写法/cityStore';

import { Icon as vanIcon, NavBar as vanNavBar } from 'vant';
import { useRouter } from 'vue-router';
const router = useRouter()
const cityStore = useCityStore()
const type = ref(1)
const store = useCinemaStore()
onMounted(() => {
    if (store.cinemaList.length === 0) {
        store.getCinemaList()
    } else {
        console.log('缓存')         //出现缓存，成功
    }
})

const handleChange = () => {
    router.push(`/city`)

    //因为缓存问题，切换城市后，数据不再请求，所以选择城市时顺便清空影院数据
    store.clearCinemaList()
}
</script>

<style scoped>
li {
    padding: 10px
}
</style>