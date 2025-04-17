<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <slot></slot>      <!-- 插槽技术，取的是父的数据来轮播 -->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import 'swiper/css';
export default {
    data() {
        return {
        }
    },
    props: {
        loop: {
            type: Boolean,
            default: true
        },
        slidesPerView: {
            type: Number,
            default: 1
        },
        spaceBetween: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        var mySwiper = new Swiper('.swiper', {
            loop: this.loop,
            slidesPerView: this.slidesPerView,
            spaceBetween: this.spaceBetween,
            observer: true,   //监听其容器和滑块的变化，并自动重新初始化或更新 Swiper 实例
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
}
</script>

<style>
.swiper {
    height: 500px;
}
</style>
