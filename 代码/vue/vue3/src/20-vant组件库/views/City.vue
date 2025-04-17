<template>
    <div>
        <!-- IndexBar 索引栏 -->
        <van-index-bar :index-list="indexList"> <!-- index-list属性：自定义展示索引字符列表 -->
            <div v-for="item in datalist" :key="item.type">
                <van-index-anchor :index="item.type" />
                <van-cell :title="data.name" v-for="data in item.list" :key="data.cityId" @click="handleChange(data)" />
            </div>
        </van-index-bar>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue';
import { IndexBar as vanIndexBar, IndexAnchor as vanIndexAnchor, Cell as vanCell } from 'vant';
import _ from 'lodash'
import useCityStore from '../store-setupStore写法/cityStore';
import { useRouter } from 'vue-router';
const router = useRouter()
const store = useCityStore()
const datalist = ref([])
onMounted(async () => {
    var res = await axios({
        url: 'https://m.maizuo.com/gateway?k=8692891',
        headers: {
            'x-client-info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"172483264511562563061940225","bc":"110100"}',
            'x-host': 'mall.film-ticket.city.list'
        }
    })
    console.log(res.data.data.cities)      //拿到的数据都是乱序的
    datalist.value = filterCity(res.data.data.cities)      //取到filterCity方法过滤后的数据
})
const indexList = computed(() => datalist.value.map(item => item.type))      //计算属性，取出索引值
//方法一
// const filterCity = (cities)=>{
//     var letterArr = []
//     for(let i=65;i<91;i++){
//         letterArr.push(String.fromCharCode(i))
//     }
//     console.log(letterArr)      //拿到26个字母
//     console.log(cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()==='A'))     //首字母截取大写等于A的截取出来

//     var newCities = []
//     //循环遍历
//     for(let i=0;i<letterArr.length;i++){     
//         newCities.push({
//             type:letterArr[i],
//             list:cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()===letterArr[i])
//         })
//     }
//     newCities = newCities.filter(item=>item.list.length)      //过滤掉每一项里面是空的
//     console.log(newCities)
// }

//方法二
const filterCity = (cities) => {
    //.charCodeAt():将字母转换成编码
    cities.sort((item1, item2) => item1.pinyin.substring(0, 1).toUpperCase().charCodeAt() - item2.pinyin.substring(0, 1).toUpperCase().charCodeAt())
    //分组 ———— lodash库   里面有JS增强的一些方法
    var groupObj = _.groupBy(cities, item => item.pinyin.substring(0, 1).toUpperCase())       //（原始数据，分组规则）     返回的是对象
    // console.log(Object.keys({a:1,b:2}))     //取到key值
    var newCities = []
    for (let i in groupObj) {
        // console.log(i)
        newCities.push({
            type: i,
            list: groupObj[i]
        })
    }
    console.log(newCities)
    return newCities      //返回，给外面的datalist
}
const handleChange = ({ name, cityId }) => {          //在形参处就进行解构
    console.log(name, cityId)
    store.change(name, cityId)
    //返回cinema页面
    router.go(-1)
}
</script>

<style></style>