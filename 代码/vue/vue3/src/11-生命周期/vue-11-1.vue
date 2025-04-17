
<!-- 创建阶段 -->

<template>
    <div>
        app--{{ title }}
        <div id="aaa"></div>

        <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
        <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts';      //标准导入法
export default {
    data() {
        return {
            title: '11111',
            option:{}           //一、先设个空对象
        }
    },
    beforeCreate() {          //1.这个钩子几乎不用，还没创建好
        console.log(this.title)
    },
    created() {               //2.这里就可以进行修改等一系列初始化的工作
        console.log(this.title)
        this.title = '222222'
        console.log(document.getElementById('aaa'))         //template标签里面是模版，这个阶段还没进入模版编译

        this.option = {            //二、在created做数据处理
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
    beforeMount() {           //3.模版编译完，还没挂载的时候
        console.log(document.getElementById('aaa'))           //依然无法访问到
    },
    mounted() {           //4.已挂载到实例
        console.log(document.getElementById('aaa'))           //可正常访问，此时可以做订阅，做ajax请求，放定时器，访问dom节点等，不过像ajax请求这种异步，它就算放在beforeCreate都能正常执行，生命周期可能一秒就能执行完毕，异步要等一万年；访问dom只能在mounted中

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));       
        // 绘制图表
        myChart.setOption(this.option);         //三、在mounted中调用
    }
}
</script>
