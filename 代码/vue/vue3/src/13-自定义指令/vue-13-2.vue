<!-- 用自定义指令判断数据已经获得完毕后，开始初始化swiper -->

<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(data, index) in datalist" :key="data" v-kerwin="{   //给指令传一个对象过去
                    index: index,
                    length: datalist.length
                }">
                    {{ data }}
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default {
    data() {
        return {
            datalist: []
        }
    },
    directives: {
        kerwin: {
            mounted(el, binding) {
                console.log(binding)
                let { index, length } = binding.value
                if (index == length - 1) {
                    console.log('最后一个节点')        //判断是最后一个节点后，开始创建swiper
                    var mySwiper = new Swiper('.swiper', {
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        on: {
                            slideChange: function () {
                                console.log('改变了,activeIndex为' + this.activeIndex);
                            },
                        },
                    })
                }
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this.datalist = ['ag', 'bc', 'fc']
        },2000)
    }
}
</script>

<style>
.swiper {
    height: 200px;
}
</style>