

function queryStringify(obj) {
    let str = ''
    for (let k in obj) { str += `${k}=${obj[k]}&` }
    return str.slice(0, -1)
}

function ajax(options) {
    let defaultoptions = {
        url: "",
        method: "GET",
        async: true,
        data: {},
        headers: {},
        success: function () { },
        error: function () { }
    }
    let { url, method, async, data, headers, success, error } = {
        ...defaultoptions,
        ...options
    }

    if (typeof data === 'object' && headers["content-type"]?.indexOf("json") > -1) {
        data = JSON.stringify(data)
    }
    else {
        data = queryStringify(data)
    }

    if (/^get$/i.test(method) && data) { url += '?' + data }

    const xhr = new XMLHttpRequest()
    xhr.open(method, url, async)
    xhr.onload = function () {
        if (!/^2\d{2}$/.test(xhr.status)) {
            error(`错误状态码:${xhr.status}`)
            return
        }

        try {
            let result = JSON.parse(xhr.responseText)
            success(result)
        } catch (err) {
            error('解析失败 ! 因为后端返回的结果不是 json 格式字符串')
        }
    }

    for (let k in headers) { xhr.setRequestHeader(k, headers[k]) }
    if (/^get$/i.test(method)) {
        xhr.send()
    } else {
        xhr.send(JSON.stringify(data))
    }
}


//promise ajax  版本       和上面的封装无关联
function pajax(options) {
    return new Promise((resolve, reject) => {
        ajax({                    //调用上面的ajax方法
            ...options,            //展开参数
            success(aaa) {         //覆盖原ajax的success和error
                resolve(aaa)
            },
            error(bbb) {
                reject(bbb)
            }
        })
    })
}