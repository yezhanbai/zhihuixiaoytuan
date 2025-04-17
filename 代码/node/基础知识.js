/* 
windows+R，输入cmd
chrome  http://www.baidu.com  http://www.bilibili.com      打开chrome浏览器，并跳转到百度      命令名称  参数1  参数2

cmd常用命令（在vscode控制台同样适用）
d:        跳转到d盘
dir       查看d盘里的内容
cd 前端    进入前端文件夹
cd ..     返回上一级目录
ls     查看当前文件夹下的所有内容
ls -a  查看当前文件夹下的所有内容，包含隐藏的
ctrl+c    停止
tab键     自动补全路径
cat 文件名    查看文件的内容
*/ 

// console.log(global)      //在node中，顶级对象global，类似于js对象是window一样

/* Buffer（缓冲器） */
let buf = Buffer.alloc(10)       //创建Buffer（固定长度的字节序列）
let buf_2 = Buffer.allocUnsafe(100)     //和用alloc创建区别：alloc会释放内存空间，allocUnsafe会保留旧内存空间
let buf_3 = Buffer.from('hello')      //将其他类型转换成二进制
console.log(buf_3[0].toString(2))      //通过下标获取再转换成对应的二进制

let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buf_4.toString())         //Buffer使用案例，先转换成二进制再转换成字符串    默认用的utf-8的转换方式

/* 计算机基本组成 */
// cpu：中央处理器，比如最简单的1+1，就是由cpu完成的     内存：存储数据，读写速度快，断电数据丢失       硬盘：存储数据，读写速度慢，断电数据不丢    主板：放置前面3个的    显卡：处理视频展示的     散热器：cpu工作时会产生大量热量，用来帮助cpu散热，提升工作效率

//操作系统：windows，Linux，MacOS，它们也是一种应用程序，用来管理和调度硬件资源    装系统&装软件：就是把操作系统，软件装到硬盘的过程

//计算机启动的基本过程：1.硬盘把windows相关的一些程序文件等载入到内存中，2.内存再交由cpu去处理，3.cpu处理中，发现有视频信号，就交给显卡去处理，显卡处理完毕后，交给显示器显示；发现有音频信号，就交给声卡，声卡再传递给外部的播放设备，比如耳机音响等        总结：cpu必须通过内存读取信息，不能直接通过硬盘

//电脑中程序启动的基本过程：1.下载安装到硬盘中，2.把英雄联盟相关程序载入内存，3.cpu读取，4.。。。

//进程和线程的关系：1.线程是一个进程中执行的一个执行流     2.线程是属于进程的    3.一个进程至少包含一个线程       例子：用户来买奶茶，一共3个店员，其中一个在洗水果，一个在打单，最后一个在制作，这3个人干的事就是线程，最终目的（进程）就是把奶茶制作好给到顾客


/* fs模块 */
//作用：文件系统，可以实现与硬盘的交互，是异步的操作过程
//写入
const fs = require('fs')     //导入fs模块
fs.writeFile('./座右铭.txt','三人行，必有我师焉，',aaa =>{      //文件不存在会直接创建
    if(aaa){             //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})       
// fs.writeFileSync('./data.txt','test')     //同步写入，会等磁盘写入后再继续执行代码，没有异步效率高

const ws = fs.createWriteStream('./观书有感.txt')     //流式写入     适用于大文件写入或者频繁写入的场景，程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数
ws.write('半亩方塘一鉴开\r\n')
ws.write('天光云影共徘徊\r\n')
ws.write('问泉那得清如许\r\n')
ws.write('唯有源头活水来\r\n')
ws.close()         //这个.close加或者不加没影响，通道都会被关闭

//追加
fs.appendFile('./座右铭.txt','择其善者而从之，其不善者而改之，',bbb =>{       //追加写法1
    if(bbb){
        console.log('追加失败1')
        return
    }
    console.log('追加成功1')
})
fs.writeFile('./座右铭.txt','love——love——love',{flag:'a'},ccc =>{       //追加写法2      w=写入模式，a=追加模式，r=读取模式
    if(ccc){
        console.log('追加失败2')
        return
    }
    console.log('追加成功2')
})
// fs.appendFileSync('./座右铭.txt','温故而知新，可以为师矣')        //同步追加

//读取
fs.readFile('./观书有感.txt',(ddd,eee) =>{        //异步读取    (读取路径，读取内容)
    if(ddd){
        console.log('读取失败')
        return
    }
    console.log(eee.toString())
})       
// console.log(fs.readFileSync('./观书有感.txt').toString())      //同步读取

const rs = fs.createReadStream('./资料/movie.mp4')      //流式读取     文件里面的内容一块一块的读    也属于异步
rs.on('data',chunk=>{
    console.log(chunk.length)     //65536字节 = 64KB
})
rs.on('end',()=>{       //读取完毕要操作需执行回调函数
    console.log('读取完成')      
})

//复制
let data = fs.readFileSync('./资料/movie.mp4')     //复制，写法1    
fs.writeFileSync('./资料/movie-1.mp4',data)

const rss = fs.createReadStream('./资料/movie.mp4')       //复制，写法2   流式写法好，假如文件100mb，第1种复制写法就要占用100mb的内存空间，而流式写法是一块一块的读，永远只需要64KB的内存就行了（理论上，因为读永远比写快）
const wss = fs.createWriteStream('./资料/movie-2.mp4')
rss.on('data',chunk=>{
    wss.write(chunk)
})
// rss.pipe(wss)      //写法2的另一种写法

//重命名
fs.rename('./座右铭.txt','./论语.txt',err =>{        
    if(err){   
        console.log('重命名失败')
        return
    }
    console.log('重命名成功')
})

//移动
fs.rename('./data.txt','./资料/data.txt',err=>{
    if(err){
        console.log('移动失败')
        return
    }
    console.log('移动成功')
})

//删除
fs.unlink('./观书有感.txt',err=>{         //unlink可以替换为rm
    if(err){
        console.log('删除失败')
        return
    }
    console.log('删除成功')
})



















