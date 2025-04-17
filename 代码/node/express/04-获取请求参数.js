
const express = require('express')
const app = express()
const loginRouter = require('./router/loginRouter')
app.use(express.urlencoded({extended:false}))           //配置解析'username=kerwin&password=123456'这种类型的post参数的中间件   
app.use(express.json())                  //配置解析'{'username':'kerwin'}'这种类型的post参数的中间件          
app.use('/login',loginRouter)

app.use((req,res)=>{         
    res.status(404).send('丢了')
})

app.listen(3000,()=>{                
    console.log('服务已经启动,端口3000正在监听中')
})