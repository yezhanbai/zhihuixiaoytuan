var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //依靠第三方中间件'cookie-parser'，轻松读取前端的cookie值
  console.log(req.cookies)
  //设置前端的cookies值
  res.cookie('genter','male')
  res.send('respond with a resource');
});

module.exports = router;
