const ejs = require('ejs')

let china = '中国'
// let str = `我爱你 ${china}`
// console.log(str)     //拼接完后，很难再分开

// let result = ejs.render('我爱你 <%= china %>',{china:china});      //使用ejs渲染    数据和内容可完全分开
// console.log(result)

//演示分开
let str = '我爱你 <%= china %>'
let result = ejs.render(str,{china:china})
console.log(result)


