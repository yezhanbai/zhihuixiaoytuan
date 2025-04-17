<template>
    <div class="tabbar">
        <ul>
            <!-- active-class：自定义属性，设置样式后会在切换路径时，自动跟随生效 -->
            <!-- router-link会自动渲染成a链接的标签，不想定向渲染，可以在下面定制成自己想要的节点 -->
            <!-- <li>
                <router-link to="/films" active-class="kerwinactive">电影</router-link>
            </li>
            <li>    
                <router-link to="/cinemas" active-class="kerwinactive">影院</router-link>
            </li>
            <li>    
                <router-link to="/center" active-class="kerwinactive">我的</router-link>
            </li> -->

            <!-- 下面是自己任意定制想要使用的标签的写法 -->
            <!-- v-slot_把各种属性配置拿出来，custom_定制，自己控制加载样式，ture就加载kerwinactive，false就加载空，li可以替换为任意标签 -->
            <!-- 解释：li标签是父，router-link是子，子有一些比如isActive, navigate的方法，通过v-slot插槽技术，贡献出来给父用 -->
            <router-link custom   to="/films" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">电影</li>
            </router-link>

            <router-link custom   to="/cinemas" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">影院</li>
            </router-link>

            <router-link custom   to="/center" v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwinactive' : ''" @click="navigate">我的</li>
            </router-link>
            <!-- 
            你提到的 v-slot="{isActive, navigate}" 看起来像是在使用 Vue Router 的 <router-link> 组件或类似的组件时，传递给子组件的作用域插槽属性。这种用法常见于路由链接组件中，以便父组件可以访问由子组件提供的特定属性或方法
            isActive 是一个布尔值，表示当前的 <router-link> 是否匹配当前的路由。
            navigate 是一个函数，当你调用它时，会触发导航到指定的路径，触发后开始进行isActive三目判断
            -->
        </ul>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
        //lang="scss"    安装scss后，写css嵌套语法
        .kerwinactive {
            color: red
        }

        .tabbar {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background: white;
            z-index:100;

            ul {
                display: flex;

                li {
                    flex: 1
                }
            }
        }

        // .tabbar ul{
        //     display: flex;
        // }

        // .tabbar ul li{
        //     flex:1
        // }</style>