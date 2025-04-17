const express = require('express')
const router = express.Router()

//响应前端的get请求
router.get('/', (req, res) => {
    console.log(req.query)        //获取到get请求，url上的传参
    res.render('login',{error:'',isShow:false})      //找views下面的login.html
})

//响应前端的post请求
router.post('/', (req, res) => {
    console.log(req.body)        //获取到post请求的传参，必须配置中间件
    const { username, password } = req.body
    if (username === 'kerwin' && password === '123456') {
        console.log('登录成功')
        res.redirect('/home')
        
    } else {
        console.log('登录失败')
        res.render('login',{error:'',isShow:false})
    }

})
module.exports = router    

