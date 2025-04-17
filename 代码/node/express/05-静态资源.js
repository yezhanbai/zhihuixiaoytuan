
const express = require('express')
const app = express()
const loginRouter = require('./router/loginRouter')
app.use(express.static('public'))                //配置静态资源        静态文件夹必须和node_modules在同一级
app.use(express.static('static'))                //可配置多个静态资源
app.use(express.urlencoded({extended:false}))            
app.use(express.json())                         
app.use('/login',loginRouter)

app.use((req,res)=>{         
    res.status(404).send('丢了')
})

app.listen(3000,()=>{                
    console.log('服务已经启动,端口3000正在监听中')
})