<template>
    <div>
        <button>返回</button>
        <span>{{ abc.navTitle }}</span>        
        <button>首页</button>
    </div>
</template>

<script>
export default{
    inject:['navTitle','abc']       
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