
<!-- 更新阶段 -->

<template>
    <div>
        <button @click="handleClick">改变echart宽度</button>
        <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
        <div id="main" :style="{ width: mywidth, height: '400px' }"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            option: {},
            mywidth: '600px'
        }
    },
    beforeCreate() {

    },
    created() {
        this.option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        }
    },
    beforeMount() {

    },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('main'));         //这是一个临时变量，无法在函数中访问，需要改成this
        // 绘制图表
        this.myChart.setOption(this.option);
    },
    methods: {
        handleClick() {
            this.mywidth = '1000px'
            console.log(document.getElementById('main').style.width)      //上面设置完属性，只是把状态改完了，更新页面是一个异步的过程

            this.$nextTick(()=>{            //执行比updated还晚，只关联调用自己所在函数的状态，所以更新生命周期基本都用这个来代替
                console.log('nexttick')
                this.myChart.resize()
            })
        }
    },
    beforeUpdate() {         //一更新就会被调用，用的情况非常少，这一步还没有挂载到页面上   
        console.log(document.getElementById('main').style.width)       
        this.myChart.resize()      //myChart中的一个方法，监听或者改变浏览器窗口的大小，不执行这个，设置完新的宽后也不会生效
    },
    updated() {       //状态改完会走，但是是无差别的，识别到任意dom有改动就调用
        console.log(document.getElementById('main').style.width)
        // this.myChart.resize()
    }

}
</script>
