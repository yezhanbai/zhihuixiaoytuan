//路由中间件使用案例
const express = require('express')
const app = express()
const IndexRouter = require('./router/indexRouter')

app.use('/api',IndexRouter)         //使用路由级中间件，匹配到'/api'，就会走到IndexRouter里面去

app.use((req,res)=>{          //错误中间件，放最后，路径匹配不到时走这个
    res.status(404).send('丢了')
})

app.listen(3000,()=>{                
    console.log('服务已经启动,端口3000正在监听中')
})
