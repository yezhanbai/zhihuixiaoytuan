<!-- 弊端：完全没有复用性 -->

<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="data in datalist" :key="data">{{ data }}</div>
            </div>
            <!-- 1.如果需要分页器 -->
            <div class="swiper-pagination"></div>
            <!-- 2.如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>
    </div>
</template>

<script>

// 如果想使用swiper的所用功能，只需要如下2个导入
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
    data() {
        return {
            datalist: []
        }
    },
    mounted() {
        setTimeout(() => {
            this.datalist = ['ag', 'bc', 'fc']
                ,
                this.$nextTick(() => {
                    //dom属于异步更新，mounted中发ajiox，重新赋值之后，状态更新，会引发更新生命周期
                    var mySwiper = new Swiper('.swiper', {         //一开始不着急在mounted中创建，因为当时里面还没有东西，但是放在updated中，有任意地方改变救会触发new，是个bug，所以最终放在了$nextTick中
                        loop: true,     //循环模式选项

                        // 1.如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        // 2.如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                        on: {                //用来监听事件
                            slideChange: function () {
                                console.log('改变了,activeIndex为' + this.activeIndex);
                            },
                        },
                    })
                })
        }, 2000);
    },
    updated() {

    }
}
</script>

<style>
.swiper {
    height: 200px;
}
</style>