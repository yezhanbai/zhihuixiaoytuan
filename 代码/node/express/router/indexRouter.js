const express = require('express')
const router = express.Router()

//路由级中间件
router.get('/home',(req,res)=>{        //挂在路由对象上
    res.send('home')
})
router.get('/',(req,res)=>{
    res.send('success')
})

module.exports = router     //导出