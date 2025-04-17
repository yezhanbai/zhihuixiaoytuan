var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 模版引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//记录请求用的信息
app.use(logger('dev'));
//获取前端传过来的post数据所设置的中间件
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
//对前端传过来的cookie进行解析，并可以设置
app.use(cookieParser());
//把public文件夹做成静态资源文件夹
app.use(express.static(path.join(__dirname, 'public')));

//路由级中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 如果没有匹配到路由，就走下面的createError(404)方法调用
app.use(function(req, res, next) {
  next(createError(404));
});

// 因为这个错误中间件的位置在最下面是兜底的，也就是没有设置的路由就是错误
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
