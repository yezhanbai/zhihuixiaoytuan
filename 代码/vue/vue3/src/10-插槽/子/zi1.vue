<template>
    <div>
        <slot></slot> <!-- 2.设置一个插槽，用来接受父在孩子上写的代码，虽然接受父的代码，但是里面定义的内容只能作用域在父组件 -->
        <slot name="first"></slot>
        <slot name="left"></slot>
    </div>
</template>

<script>

</script>