<template>
    <div>
        <!-- <slot :mylist="datalist">        1.自定义属性，动态绑定数据，为了把数据暴露给父使用 -->
            <slot :mylist="datalist" name="movie">        <!-- 4.如果这个插槽有名字 -->
            <ul>
                <li v-for="item in datalist" :key="item.id">
                    {{ item.nm }}
                </li>
            </ul>
        </slot>
        
    </div>
</template>

<script>
import axios from 'axios'      //不写相对路径，会直接从node_modules中查找
    export default {
        data(){
            return{
                datalist:[]
            }
        },
        mounted(){         //生命周期，组件一运行就会被调用
            axios.get('../../../public/模拟数据.json').then(res=>{         
                console.log(res.data.data.hot)
                this.datalist = res.data.data.hot
            })
        }
    }
</script>