<template>
    <div>
        <!-- 页面布局，声明式导航 -->
        <!-- 这里to前加上了冒号，变成了实时的动态地址跳转 -->
        <!-- <ul> 
            <router-link custom :to="'/detail/'+item.filmId" v-slot="{navigate }" v-for="item in datalist" :key="item.filmId">
                <li @click="navigate">
                    {{ item.name }}
                </li>
            </router-link>
        </ul> -->

        <!-- 编程式导航 -->
        <ul>
            <li v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">     <!-- item.filmId是点击事件的形参，所以点击事件打印里面可以直接写id值 -->
                {{ item.name }}
            </li>
        </ul>

    </div>
</template>

<!-- 改造 -->
<!-- <script setup>
import axios from 'axios'
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
//通义千问：ref 是 Vue 3 中用于创建一个响应式的数据引用的函数。它允许你将一个基本类型的值（如字符串、数字、布尔值等）包装成一个响应式的对象，使得这个值可以在组件中被追踪和响应式地更新。当你使用 ref 创建一个响应式引用时，它会返回一个带有 .value 属性的对象。你需要通过这个 .value 来访问或修改这个引用的实际值。当在模板中使用时，Vue 会自动解开 .value，所以在模板中可以直接使用 ref 的名称而不需要显式地访问 .value
const datalist = ref([])
const router = useRouter()
onMounted(async ()=>{
    const res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5888479',
            headers: {
                'X-client-info': '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "172483264511562563061940225", "bc": "110100"}',    //客户端的信息
                'X-host': 'mall.film-ticket.film.list'       //要films的列表数据
            }
        })
        datalist.value = res.data.data.films       //datalist是ref进行的响应式绑定，要点value
        
})

const handleClick = (id) => {
    router.push(`/detail/${id}`)
}
</script> -->

<script>
import axios from 'axios'
export default {
    data() {
        return {
            datalist: []
        }
    },
    async mounted() {
        const res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=5888479',
            headers: {
                'X-client-info': '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "172483264511562563061940225", "bc": "110100"}',    //客户端的信息
                'X-host': 'mall.film-ticket.film.list'       //要films的列表数据
            }
        })
        this.datalist = res.data.data.films
        console.log(this.datalist)
    },
    methods:{
        handleClick(id){
            console.log(id)
            
            //动态路由匹配
            //第一种写法---路径+路由参数        用到this时，就和VCA写法有区别了 
            this.$router.push(`/detail/${id}`)         //把一个新的路径放到栈中进行跳转，不需要加#号，会自动匹配     this.$router拿到的是在index中配置的路由对象

            //第二种写法---路径+路由参数    对象写法
            // this.$router.push({
            //     name:'Detail',
            //     params:{
            //         myid:id       //属性名必须和占位符名一致
            //     }
            // })

            //第三种写法---路径+query   query传参
            // this.$router.push({
            //     path:'/detail',
            //     query:{
            //         myid:id
            //     }
            // })           //目前这个案例不能匹配，样式不一样，要成功需要改动index和Detail，标记为❤，成功后格式为detail?id=xxxx


        }
    }
}
</script>

<style scoped lang="scss">
ul {
    li {
        padding: 10px
    }
}
</style>