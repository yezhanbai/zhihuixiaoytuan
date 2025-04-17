
<!-- 插槽的好处：现实开发中，每个人希望点击按钮后跳转的页面肯定是不一样的，如果这些按钮都在孩子组件上，根本无法实现，用了插槽，这些按钮代码就在父节点身上，这样就可以直接对按钮设置相应的属性 -->
<template>
    <div>
        <zi1>
            <div>我是在app组件中的一段html代码11111</div> <!-- 1.不显示，孩子组件内容会替换这里 -->

            <template v-slot:first> <!-- 具名插槽 -->
                <div>我是在app组件中的一段html代码22222</div>
            </template>

            <template #left> <!-- 另一种写法 -->
                <span><b>图标</b>-返回</span>
            </template>
        </zi1>

        <!-- 作用域插槽 -->
        <!-- 场景：父如何获得组件里面的数据，进行渲染处理 -->
        <input type="text" v-model="text">
        <zi2 #movie="myprops"> <!-- 5.父要加上:movie -->
            <ul>
                <li v-for="data in myprops.mylist" :key="data.id">      <!-- 2.拿到组件的数据，接下来可以自行渲染 -->
                    <!-- 3.自定义的需求：输入框输入满足的字就高亮 -->
                    <div v-if="data.nm.includes(text) && text!=''"  style="color:red; background: yellow; font-size:20px">   
                        {{ data.nm }}
                    </div>

                    <div v-else="data.nm.includes(!text)" style="color:green">
                        {{ data.nm }}
                    </div>
                </li>
            </ul>
        </zi2>
    </div>
</template>

<script>
import zi2 from './子/zi2.vue'
import zi1 from './子/zi1.vue'
export default {
    data() {
        return {
            text: ''
        }
    },
    components: {
        zi1,
        zi2
    }
}
</script>