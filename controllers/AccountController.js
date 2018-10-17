/**
 * Created by chLiu on 2018/10/10.
 */
exports.login=function(req,res){
    var email=req.body.email;
    var password=req.body.Password;

    //1,引入注册页数据处理模块
    var AccountDao=require('../dao/accountDao');
    //2，创建对象
    var accountDao=new AccountDao();
    //3,初始化
    accountDao.init();
    //4,查询数据
    accountDao.selectPassword(function (result) {

        var response={
            state:0,
            msg:''
        }
        var length=result.length;
        if(length==0){
            response.state=-1;
            response.msg="没有当前地址，请注册该地址！";
        }else{
            var buffer=result[0].Password;
            if(password==buffer){
                response.state=1;
                response.msg="登录成功！";
            }else{
                response.state=2;
                response.msg="输入密码错误，请重新输入密码！";
            }
        }
        //把对象转换为json格式数据
        var data=JSON.stringify(response);
        res.end(data);
        //res.render('index',{info:result})
    },email);
}
exports.account=function(req, res){
    res.render('account',{})
}