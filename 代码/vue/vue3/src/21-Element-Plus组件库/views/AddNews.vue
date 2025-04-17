<!-- Form 表单 -->
<template>
    <!-- :model="form"，这个非常重要，设置后，只要这个表单有任何修改，点击提交时，只要传这个form对象就行了 -->
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="新闻标题">
            <el-input v-model="form.title" />
        </el-form-item>

        <el-form-item label="新闻分类">
            <el-select v-model="form.category" placeholder="please select your 分类">
                <el-option label="经济" value="经济" />
                <el-option label="明星" value="明星" />
                <el-option label="科技" value="科技" />
            </el-select>
        </el-form-item>

        <el-form-item label="新闻内容">
            <el-input v-model="form.content" type="textarea" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'      
import useNewsStore from '../store/news'
import { useRouter } from 'vue-router'
// do not use same name with ref
const form = reactive({         //和最上面的form绑定
    title:'',
    category:'',
    content:''
})
const store = useNewsStore()
const router = useRouter()

const onSubmit = () => {
    console.log('submit!',form)
    //后续操作是：点击创建后，数据给到后端存储，在页面点击新闻列表时，再从后端拿到存储的数据，在页面展示
    //这里先模拟存储到pinia中，再进行操作
    store.add(form)
    router.push(`/news/newslist`)
}

</script>