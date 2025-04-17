<template>
    <div>
        <button v-bind="$attrs">zi3</button>        <!-- 允许透传时，它带有class="jiejie" 和 handleClick()点击事件，加上v-bind="$attrs"，又允许被透传 -->
    </div>
</template>

<script>
export default{
    inheritAttrs:false         //设置是否允许透传
}
</script>