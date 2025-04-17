<template>
    <div>
        <!-- 子传父，每次状态改完不会自动传给父 -->
        <zi1 @kerwinevent.once="handleEvent($event)" @kerwinevent1="handleEvent1" /> <!-- 1.支持自定义多个属性，且支持修饰符 -->

        <!-- 子拿父：$parent和$root -->
        <zi2></zi2>
    </div>
</template>


<script>
import zi1 from './子/zi1.vue'
import zi2 from './子/zi2.vue'
export default {
    data() {
        return {
            title: 'vue-07-11111'
        }
    },
    components: {
        zi1,
        zi2
    },
    methods: {
        handleEvent(data) {          //3.设置形参，接收孩子的状态属性
            console.log('app-event', data)
        },
        handleEvent1(data) {
            console.log('app-event2', data)
        }
    }
}
</script>