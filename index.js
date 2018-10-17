//引入express
var express=require('express');
//获得对象
var app=express();
var path = require('path');
//2,引入的ejs插件
var ejs = require('ejs');
//3,设置html引擎
app.set('view engine', 'html');
//4,设置视图地址
app.set('views', path.join(__dirname, 'views'));
//5,设置html引擎
app.engine('html', require('ejs').__express);
//6,静态文件
app.use(express.static('public'));
//7,引入body-parser模块
var bodyParser = require('body-parser');
//8，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//设置路由地址
//app.get('/index',function (req,res) {
//    var  info=[
//        {title:'Free Shipping',text:'Syphogrants called into the council chamber, and these are changed every day.'},
//        //{title:'Free Shop',text:'Syphogrants called into the council chamber, and these are changed every day.'},
//        {title:'Free Shipping',text:'Syphogrants called into the council chamber, and these are changed every day.'}]
//
//    res.render('index',{info:info});
//});
var indexController = require('./controllers/IndexController');
app.get('/index', indexController.index);
//app.get('/index', indexController.indexList);

var accountController = require('./controllers/AccountController');
app.get('/account', accountController.account);
app.post('/login', urlencodedParser,accountController.login);


app.get('/order',function (req,res) {
    res.render('order',{});
});
//app.get('/account',function (req,res) {
//    res.render('account',{});
//});
app.get('/login',function (req,res) {
    res.render('login',{});
});
app.get('/products',function (req,res) {
    res.render('products',{});
});
app.get('/single',function (req,res) {
    res.render('single',{});
});
app.get('/contact',function (req,res) {
    res.render('contact',{});
});
app.get('/register',function (req,res) {
    res.render('register',{});
});
app.get('/contact-post',function (req,res) {
    res.render('contact-post',{});
});


//监听
app.listen(9999,function(){
    console.log('启动');
});