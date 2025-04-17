//应用级中间件，挂在app身上的
const express = require('express')   
const app = express()    

const fun1 = (req,res,next)=>{ 
    console.log('验证token')        
    const isValid = true      
    if(isValid){
        res.kerwin = '这是fun1计算的结果'      
        next() 
    }else{
        res.send('error')    
    }
}
app.use(fun1)         //应用级中间件，设置后，下面的路由调用都要先走完fun1，这行代码上面的内容不需要，它也可以加路径，比如app.use('/home',fun1)，这样只会在home路由中生效

const fun2 = (req,res)=>{
    console.log(res.kerwin)        
    res.send({list:[1,2,3]})
}
app.get('/home',[fun2])     
app.get('/list',(req,res)=>{    
    res.send('list')
})

app.listen(3000,()=>{                
    console.log('服务已经启动,端口3000正在监听中')
})
