<template>
    <div>
        <!-- vant轮播组件 -->
        <van-swipe class="my-swipe" :autoplay="2000" indicator-color="red">
            <van-swipe-item v-for="data in looplist" :key="data.id">
                <img :src="data.imgUrl" style="width: 100%;">
            </van-swipe-item>
        </van-swipe>

        <ul class="header">
            <!-- 下面是声明式导航，直接复制tabbar组件中的自定义标签属性 -->
            <router-link custom to="/films/nowplaying" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'kerwinactive' : ''">正在热映</span>
                </li> <!-- 加在span标签身上，CSS样式就会跟着span走，这也是定制节点的好处 -->
            </router-link>

            <router-link custom to="/films/comingsoon" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'kerwinactive' : ''">即将上映</span>
                </li>
            </router-link>
        </ul>

        <router-view></router-view>
    </div>
</template>

<script setup>
import { Swipe as vanSwipe, SwipeItem as vanSwipeItem } from 'vant'
import { ref } from 'vue'
const looplist = ref([
    {
        "id": 1,
        "imgUrl": "https://p1.meituan.net/movie/81fe2197ef930c79624a28cc76c423835264620.png@1l_1e_1c_400w_200h",
        "title": "小公主艾薇拉与神秘王国2"
    },
    {
        "id": 2,
        "imgUrl": "https://p0.meituan.net/movie/07e0ee6c6f30700e6d4ab6774d95fc4f108727.jpg@1l_1e_1c_400w_200h",
        "title": "我的初恋十八岁"
    },
    {
        "id": 3,
        "imgUrl": "https://p0.meituan.net/moviemachine/1d2b4985d0187b437d41a73994ba2e191607376.jpg@1l_1e_1c_400w_200h",
        "title": "奇妙王国之魔法奇缘"
    }
])
</script>

<style scoped lang="scss">
.header {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;

    //吸顶
    position: sticky;
    top: 0;
    z-index:10;
    background:white;

    li {
        flex: 1;

        span {
            padding: 10px 0;
        }
    }
}

.kerwinactive {
    color: red;
    border-bottom: 2px solid red;

}

</style>