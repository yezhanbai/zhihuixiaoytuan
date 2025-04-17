<template>
    <!-- 4.使用 -->
    <div>
        <button>{{ left }}</button>
        navbar--{{ computedTitle }}
        <button @click="handleRight">{{ right }}</button>
    </div>
</template>

<!-- 2.子接受属性 -->
<script>
export default {
        props:['myTitle','left','right'],     // 设置prop是单向数据流，只能父传子，不能子传父
        methods:{
            handleRight(){
                console.log(this.myTitle)
                // this.myTitle ='222222222'         //报错，不能改父
            }
        },
        /* 3.父给我们的属性，我们不是很满意怎么改---用计算属性 */
        computed:{
            computedTitle(){
                return this.myTitle + '3333333'
            }
        }
    }
</script>