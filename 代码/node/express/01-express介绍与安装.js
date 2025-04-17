/* express框架 */
//安装：npm init(初始化)——起名——无限回车——npm i express
//控制台输入：node .\02.js(启动服务)    打开chrome浏览器，输入127.0.0.1:3000/   查看到内容
//每次更新自动重启服务器(热部署)：npm i -g nodemon/npm i -g node-dev
//启动项目：node-dev 路径
//npm i ejs  前后端数据交互

const express = require('express')   //导入express
const app = express()     //创建应用对象

app.get('/',(req,res)=>{         //创建路由   中间件：(前端给的内容，给前端的内容)
    res.send({
        name:"kerwin",
        age:100
    })
})    

app.get('/ab/:id/:id',(req,res)=>{      //:id 占位符，可以匹配任意
    res.send('ok')
}) 

const fun1 = (req,res,next)=>{         
    const isValid = true      
    if(isValid){
        res.kerwin = '这是fun1计算的结果'      //1.添加要通信的内容
        next() 
    }else{
        res.send('error')    
    }
}
const fun2 = (req,res)=>{
    console.log(res.kerwin)        //2.接收通信内容
    res.send({list:[1,2,3]})
}
app.get('/home',[fun1,fun2])     //数组里的方法，依次执行
app.get('/list',[fun1],(req,res)=>{     //数组函数混合写法
    res.send('list')
})

app.listen(3000,()=>{            //监听端口，启动服务       
    console.log('服务已经启动,端口3000正在监听中')
})

