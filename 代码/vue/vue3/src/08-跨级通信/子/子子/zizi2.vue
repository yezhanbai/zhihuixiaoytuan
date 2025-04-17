<template>
    <li @click="handleClick">
        {{ item }}
    </li>
</template>

<script>
    export default {
        props:['item'],
        inject:['navTitle','abc'],               //2.注入
        methods:{
            handleClick(){
                // console.log(this.navTitle)
                // this.navTitle = this.item      //4.每次点击后，把item值赋值给提供的值，用来覆盖zi1中的span值，当前还不能生效，是断联的，此时还没有设置abc
                this.abc.navTitle = this.item        //6.使用

            }
        }
    }
</script>