<template>
    <div>
        <div id="main" style="width: 100%;height:400px;"></div> <!-- 1.设置为100%宽时，拖动控制台不会随着窗口大小改变 -->
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            title: '11111',
            option: {}
        }
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
    mounted() {

        var myChart = echarts.init(document.getElementById('main'));

        myChart.setOption(this.option);

        window.onresize = () => {       // 2.监听到每次窗口大小改变时，就重新resize一遍
            console.log("resize")
            myChart.resize()
        }
    },
    unmounted() {
        window.onresize = null        // 父销毁后resize也失效了，现版本vue好像已经把这个问题自行消化了
    }
}
</script>
