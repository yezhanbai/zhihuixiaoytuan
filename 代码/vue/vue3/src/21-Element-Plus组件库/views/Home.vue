<template>
    <!-- Carousel 走马灯（轮播） -->
    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
            <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>

    <!-- Layout 布局 24分栏 -->
    <el-row gutter="40">
        <el-col :span="8">
            <div>个人介绍 Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim exercitationem. Sunt, dicta? Laboriosam aliquid accusamus assumenda earum ipsam vitae sed sit labore, mollitia, omnis quia cumque consequuntur fuga eaque.</div>
        </el-col>
        <el-col :span="8">
            <div>公司介绍</div>
        </el-col>
        <el-col :span="8">
            <div>公司产品</div>
        </el-col>
    </el-row>
</template>

<style scoped>
.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>