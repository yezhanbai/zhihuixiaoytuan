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

        <!-- 编程式导航 -->     <!-- 来自vant的List组件，实现数据懒加载 -->     
        <van-list    v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" :immediate-check="false" offset="10">       <!-- immediate-check和offset是文档中的定义，尤其是immediate-check，不设置好的话滚动效果会失效 -->
            <van-cell v-for="item in datalist" :key="item.filmId" @click="handleClick(item.filmId)">     <!-- item.filmId是点击事件的实参，所以点击事件打印里面可以直接写id值 -->
                <img :src="item.poster" style="width: 100px;float: left;">
                <div>{{ item.name }}</div>
            </van-cell>
        </van-list>

    </div>
</template>

<!-- 改造 -->
<script setup>
import axios from 'axios'
import {onMounted, ref} from 'vue'
import { useRouter } from 'vue-router';
import { List as vanList, Cell as vanCell } from 'vant';     //文档导入有问题，此处用重命名

const loading = ref(false)        //加载状态
const finished = ref(false)       //结束状态
const pageNum = ref(1)    //第几页
const total = ref(0)     //所有数据
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
        console.log(res.data.data)
        datalist.value = res.data.data.films       //datalist是ref进行的响应式绑定，要点value
        total.value = res.data.data.total     //把总长度赋值给total，用作下面的比较
})

const handleClick = (id) => {
    router.push(`/detail/${id}`)
}

const onLoad = async () => {
    if(total.value === datalist.value.length){      //所有数据取完了
        finished.value = true
        return 
    }
    console.log('到底了')
    pageNum.value ++
    const res = await axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum.value}&pageSize=10&type=1&k=5888479`,
        headers: {
            'X-client-info': '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "172483264511562563061940225", "bc": "110100"}',    //客户端的信息
            'X-host': 'mall.film-ticket.film.list'       //要films的列表数据
        }
    })
    //展开， 原来数据基础上，追加10条数据
    datalist.value = [...datalist.value,...res.data.data.films]

    //到底后组件会自动把将loading值设为true，我们要手动改成false
    loading.value = false
}
</script>

<!-- <script>
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
</script> -->

<style scoped lang="scss">
ul {
    li {
        padding: 10px
    }
}

//当vant组件库的样式和我期望的不一致且不能修改时，就强制获取它控制样式的属性，改值
:deep(.van-cell__value){      
    //:deep() 是 Vue 3 中的一个选择器，主要用于 scoped CSS 或者在使用 <style scoped> 标签时，使样式能够穿透到子组件中。它允许你在父组件中定义的样式应用于子组件中的元素，而不仅仅是局限于当前组件     
    //使用场景     当你有一个父组件，并且这个父组件中包含了一个或多个子组件，你可能希望某些样式不仅适用于父组件本身，还能够作用于子组件中的元素。此时，:deep() 就显得非常有用
    text-align:left
}
</style>