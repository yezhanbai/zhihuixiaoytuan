
<!-- swiper组件封装 -->

<template>
    <div>
        <!-- 问题：数据异步，等异步给到数据时，页面早已经渲染好了，数据插不进去了，解决：v-if，判断为假时，就不走myswiper组件加载，等为真时，再开始加载 -->

        <!-- 模拟调用封装的两个组件 -->
        <!-- 动态绑定最大作用：父子联动时，父改变属性时，子接受并作用，最大化复用性，这3个属性分别表示：一页轮3个，每个间隔50px，不循环轮播 -->
        <zi1 v-if="datalist.length" :slides-per-view="3" :space-between="50" :loop='false'>    
            <zi2 v-for="data in datalist" :key="data.id">
                <img :src="data.img" alt="data.img" style="width:100%;height:100%;" >
            </zi2>
        </zi1>
    </div>
</template>

<script>
import zi1 from './子/zi1.vue'
import zi2 from './子/zi2.vue'
import axios from 'axios'
export default {
    components: {
        zi1,
        zi2
    },
    data() {
        return {
            datalist: []
        }
    },
    mounted() {
        axios.get('../../public/模拟数据.json')
            .then(res => {
                this.datalist = res.data.data.hot
            })
    }
}
</script>