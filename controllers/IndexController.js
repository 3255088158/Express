exports.index = function(req, res){
    //var  info=[{title:'Free Shipping',text:'Syphogrants called into the council chamber, and these are changed every day.'},
        //{title:'Free Shop',text:'Syphogrants called into the council chamber, and these are changed every day.'},
        //{title:'Free Shop',text:'Syphogrants called into the council chamber, and these are changed every day.'}]

    //1,引入首页数据处理模块
    var IndexDao=require('../dao/indexDao');
    //2，创建对象
    var indexDao=new IndexDao();
    //3,初始化
    indexDao.init();
    //4,查询数据
    indexDao.selectProducts(function (result) {
        res.render('index',{info:result})
        //res.render('index',{info:result,phoneList:result})
        //res.render('index',{phoneList:result})
    })
};


