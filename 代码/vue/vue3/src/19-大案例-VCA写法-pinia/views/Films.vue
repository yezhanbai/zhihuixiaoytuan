<template>
    <div>
        <div style="height: 100px;line-height:100px; text-align: center;">大轮播</div>

        <ul class="header">        
            <!-- 下面是声明式导航，直接复制tabbar组件中的自定义标签属性 -->
            <router-link custom to="/films/nowplaying" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'kerwinactive' : ''">正在热映</span>
                </li>   <!-- 加在span标签身上，CSS样式就会跟着span走，这也是定制节点的好处 -->
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

<script>
</script>

<style scoped lang="scss">
.header{
    display:flex;
    height: 50px;
    line-height:50px;
    text-align:center;
    li{
        flex:1;
        span{
            padding: 10px 0;
        }
    }
}

.kerwinactive{
    color: red;
    border-bottom: 2px solid red;

}


</style>