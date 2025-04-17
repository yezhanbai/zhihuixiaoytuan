<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleClick">{{ data }}</li>
        </ul>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue'

const datalist = ref(['aaa', 'bbb', 'ccc', 'ddd', 'eee'])
const which2 = inject('which1')
const handleClick = () => {
    which2.value = false
}
</script>