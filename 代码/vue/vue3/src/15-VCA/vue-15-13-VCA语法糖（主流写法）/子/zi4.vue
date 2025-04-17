<template>
    <div>
        detail
    </div>
</template>

<script setup>
import { inject, onMounted } from 'vue';

const show2 = inject('show1')
onMounted(() => {
    show2.value = false
}
)

</script>