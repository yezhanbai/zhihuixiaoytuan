<template>
    <div>
        <button>返回</button>
        <span>{{ abc.navTitle }}</span>        <!-- 6.使用 -->     
        <button>首页</button>
    </div>
</template>

<script>
export default{
    inject:['navTitle','abc']       //2.注入，接收父的属性值，当注入了navTitle后，在上面的span里就可以直接使用了，先不用管abc
}
</script>

<style scoped>
    div{
        display: flex;
        width:100%;
        justify-content: space-between;
        height: 50px;
        line-height: 50px;
        background: gray;
    }
</style>