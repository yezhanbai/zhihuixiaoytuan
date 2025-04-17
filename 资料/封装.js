//￥.这段代码适用于get请求中data里面是data:{username:'xxx'}格式，放出来
/* function queryStringify(obj) {
    let str = ''
    for (let k in obj) { str += `${k}=${obj[k]}&` }
    return str.slice(0, -1)   //截取
} */

function ajax(options) {
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,        //async：是否异步
        data: {},
        headers: {},
        success: function () { },
        error: function () { }
    }
    let { url, method, async, data, headers, success, error } = {       //从options大对象中解构出来这些值
        ...defaultoptions,                                              //先把老的展开
        ...options                                                      //把新的传进去
    }

    //￥.放出来
    /*     if (typeof data === 'object' && headers["content-type"]?.indexOf("json") > -1) {
            data = JSON.stringify(data)     
        }
        else {
            data = queryStringify(data)          
        } */

    if (/^get$/i.test(method) && data) { url += '?' + data }      //如果是get请求，并且有参数，那么直接拼接一下url信息，这样get和post就都能共用了，不管是data:"username=xxx",还是data:{username:'xxx'}，都需要

    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    xhr.onload = function () {
        if (!/^2\d{2}$/.test(xhr.status)) {
            error(`错误状态码:${xhr.status}`)           //加小括号才调用，简称回调，等同于error()，回调函数，前提是使用者写了这个方法，调用后的值还可以给到使用者所写的方法的形参bbb上，形参名字随意
            return
        }

        try {
            let result = JSON.parse(xhr.responseText)
            success(result)
        } catch (err) {
            error('解析失败 ! 因为后端返回的结果不是 json 格式字符串')
        }
        //try可以保证程序正常运行下去，如果没有try，出现异常会导致程序崩溃，系统报错被window接收，开发者却不知道         Catch的解释是： Captures the exception.（捕获异常）
    }

    for (let k in headers) { xhr.setRequestHeader(k, headers[k]) }         //k=value名      headers[k]=value值
    if (/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(JSON.stringify(data))
    }
}

//小插曲，因为打开了多个查看页面，导致发post插入了多份数据，实际却只发送了1次请求，排查了很久