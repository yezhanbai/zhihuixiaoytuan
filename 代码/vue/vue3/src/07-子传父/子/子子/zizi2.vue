<template>
    <div>
        zizi2-<button @click="handleclick">点击</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleclick() {
            console.log(this.$parent.title)      //拿到zi2的title
            console.log(this.$root.title)        //拿到vue-07的title
        }
    }

}
</script>