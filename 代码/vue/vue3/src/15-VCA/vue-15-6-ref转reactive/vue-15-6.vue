<!-- ref转reactive，用reactive()包装 -->

<template>
    <div>
        {{ count }}---{{ title }}
    </div>
</template>

<script>
import { ref,reactive } from 'vue';
export default {
    setup() {
        // 使用 ref 定义的一些状态
        const count = ref(0);
        const title = ref('Hello');

        // 将 refs 包装进一个 reactive 对象
        const state = reactive({ count, title });

        console.log(state.count,state.title); // 相当于访问ref的.value
        return {
            count,
            title
        }
    }
}

</script>