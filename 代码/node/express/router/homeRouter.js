const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{     
    res.render('home',{error:'',isShow:false})
})

router.get('/list',(req,res)=>{     
    res.send(['111','222','333'])
})

router.get('/a',(req,res)=>{     
    res.send('xuesheng-1')
})

router.get('/b',(req,res)=>{     
    res.send('xuesheng-2')
})
module.exports = router    