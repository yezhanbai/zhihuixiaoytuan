<template>
    <div>
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
import useCinemaStore from '../store-optionStore写法/cinemaStore';
const type = ref(1)
const store = useCinemaStore()
onMounted(() => {
    if (store.cinemaList.length === 0) {
        store.getCinemaList()

    } else {
        console.log('缓存')         //出现缓存，成功
    }
})

</script>

<style scoped>
li {
    padding: 10px
}
</style>