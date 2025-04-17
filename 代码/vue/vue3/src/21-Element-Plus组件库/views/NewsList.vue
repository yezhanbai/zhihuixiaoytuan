<!-- Table 表格 -->
<template>
    <el-table :data="store.list" style="width: 100%">     <!-- 这可以理解为子的数据 -->
        <!-- 下面会自动v-for循环遍历 -->
        <!-- <el-table-column prop="title" label="标题" width="180" /> -->
        
        <el-table-column label="标题" width="180">        
            <template #default="scope">    <!-- 套一个插槽，里面可以自定义样式 -->     <!-- 这里是父，它利用插槽机制，把子的数据放在scope里，好像不是template标签包裹就不需要？ -->
                <b style="margin-left: 10px">{{ scope.row.title }}</b> <!-- scope.row：访问到当前行的所有数据，他是作用域插槽提供的固定写法 -->
            </template>
        </el-table-column>

        <el-table-column prop="category" label="分类" width="180" />

        <el-table-column prop="content" label="内容" />

        <el-table-column label="操作" width="180">
            <template #default="scope">
                <div>
                    <el-button type="warning" round @click="handleEdit(scope.row)">编辑</el-button>      
                    <el-button type="danger" round>删除</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import useNewsStore from '../store/news';
const store = useNewsStore()

//点击编辑
const handleEdit = (item)=>{
    console.log(item)
}
</script>