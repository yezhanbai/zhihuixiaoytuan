<template>
    <li @click="handleClick">
        {{ item }}
    </li>
</template>

<script>
    export default {
        props:['item'],
        inject:['navTitle','abc'],               
        methods:{
            handleClick(){  
                this.abc.navTitle = this.item        
            }
        }
    }
</script>