function Tabs(sel, type) {
    var aaa = document.querySelector(sel)   //不加这一步，下面就会搜出所有的结果，加这步等接收到实参时可以只获得想要的
    this.oHeaderItems = aaa.querySelectorAll('.header li')
    this.oBoxItems = aaa.querySelectorAll('.box li')
    this.type = type
    this.change()
}
Tabs.prototype.change = function () {
    for (let i = 0; i < this.oHeaderItems.length; i++) {
        this.oHeaderItems[i].addEventListener(this.type, () => {     //必须改成箭头函数，this指向就不再是谁调用我，我就指向谁，就不再指向this.oHeaderItems[i]了，而是指向他的父节点new Tabs，而正好只有new Tabs身上才有oHeaderItems，oBoxItems等节点        通俗点讲：函数里面嵌套函数，如果不是箭头函数，就一定会出现this指向的问题
            console.log(this)       //改完箭头函数后，指向Tabs
            var index = i
            for (var m = 0; m < this.oHeaderItems.length; m++) {
                this.oHeaderItems[m].classList.remove('active')
                this.oBoxItems[m].classList.remove('active')
            }
            this.oHeaderItems[index].classList.add('active')
            this.oBoxItems[index].classList.add('active')
        })
    }
}

export default Tabs