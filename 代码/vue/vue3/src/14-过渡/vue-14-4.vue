<!-- 列表过渡案例 -->

<template>
    <div>
        <input type="text" v-model="mytest">
        <button @click="handleAdd">add</button>

        <!-- <ul> -->
        <!-- 这里for循环后其实是有多个li节点，而Transition子元素或子组件数量严格为1，这时候需要改成TransitionGroup，它专门针对项目列表、网格等的元素动画 -->
        <TransitionGroup tag="ul" name="kerwin"> <!-- tag：可以实例化成某一个具体的节点元素显示出来，这里直接实例化取代外面的ul -->
            <li v-for="(item, index) in datalist" :key="item">{{ item }}
                <!-- key值必须加，不能用index做key值，因为删除元素时，它永远会默认少的是最后一个元素 -->
                <button @click="handleDel(index)">del</button>
            </li>
        </TransitionGroup>
        <!-- </ul> -->
    </div>

</template>

<script>
export default {
    data() {
        return {
            mytest: "",
            datalist: ['11', '22', '33'],
        }
    },
    methods: {
        handleAdd() {
            console.log('add', this.mytest)
            this.datalist.push(this.mytest)
            this.mytest = ''      //清空输入框
        },
        handleDel(index) {
            console.log('del', index)
            this.datalist.splice(index, 1)      //每次变更，都会重新循环改变item,index的值
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none
}
</style>

<style>
.kerwin-enter-active {
    animation: kerwinimate 1s;
    /* animation：关键帧动画，kerwinimate：自定义的关键帧 */
}

.kerwin-leave-active {
    animation: kerwinimate 1s reverse;
    /* reverse：反方向 */
}

@keyframes kerwinimate {
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    100% {
        transform: translateX(0px);
        opacity: 1;
    }
}

html,
body {
    overflow-x: hidden
}

.kerwin-move {
    /* 对移动中的元素应用的过渡 */
    transition: all 3s ease;
}

/* 确保将离开的元素从布局流中删除，以便能够正确地计算移动的动画。 */
.kerwin-leave-active {
    position: absolute;
}
</style>