<!-- 有时你需要确保所有属性都以相同的方式访问，比如在一个对象中混合使用 ref 和 reactive 创建的属性时。为了简化逻辑和保持一致性，你可以将所有的 ref 转换为 reactive 对象的一部分，或者反之 -->

<!-- reactive转ref，用toRefs()解构 -->

<!-- 为了风格统一ref支持简单和复杂类型，所以一般建议都用ref，而且支持解构 -->

<template>
    <div>
        {{ count }}---{{ title }}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    setup() {
        const state = reactive({
            count: 0,
            title: 'Hello'
        });

        // 使用 toRefs 来解构并保持响应性
        const { count, title } = toRefs(state);      // toRefs可以将整个state这种reactive对象，完全转化成ref对象格式，是全部属性的转换

        console.log(count.value,title.value);       // 仍然可以通过 .value 访问

        return{
            count, 
            title
        }
    }
}

</script>