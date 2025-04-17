class Tabs {
    constructor(sel, type) {
        var aaa = document.querySelector(sel)
        this.oHeaderItems = aaa.querySelectorAll('.header li')
        this.oBoxItems = aaa.querySelectorAll('.box li')
        this.type = type
        this.change()
    }
    change() {
        for (let i = 0; i < this.oHeaderItems.length; i++) {
            this.oHeaderItems[i].addEventListener(this.type, () => {
                console.log(this)
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
}

export default Tabs