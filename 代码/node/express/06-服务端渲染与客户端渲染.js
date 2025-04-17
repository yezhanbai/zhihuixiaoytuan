
const express = require('express')
const app = express()
const loginRouter = require('./router/loginRouter')
const homeRouter = require('./router/homeRouter')

app.set('views','./views')           //配置模版引擎
app.set('view engine','html')
app.engine('html',require('ejs').renderFile)     //支持直接渲染html

app.use(express.static('public'))                
app.use(express.static('static'))                
app.use(express.urlencoded({extended:false}))            
app.use(express.json())                 

app.use('/login',loginRouter)
app.use('/home',homeRouter)

app.use((req,res)=>{         
    res.status(404).send('丢了')
})

app.listen(3000,()=>{                
    console.log('服务已经启动,端口3000正在监听中')
})