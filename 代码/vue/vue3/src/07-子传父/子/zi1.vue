<template>
    <div>
        <button @click="$emit('kerwinevent', childtitle)">click</button> <!-- 2.通过emit来传达给父组件，从而父组件触发功能 -->
        <!-- 比喻：父给了孩子一个手机：kerwinevent，孩子有时给父打电话：$emit，并把想说的话：childtitle传达给父 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            childtitle: 'child-1111111'
        }
    }
}
</script>

<style scoped>                
div {
    background: yellow;
}
</style>
