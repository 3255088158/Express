exports.index = function(req, res){
    //var  info=[{title:'Free Shipping',text:'Syphogrants called into the council chamber, and these are changed every day.'},
        //{title:'Free Shop',text:'Syphogrants called into the council chamber, and these are changed every day.'},
        //{title:'Free Shop',text:'Syphogrants called into the council chamber, and these are changed every day.'}]

    //1,������ҳ���ݴ���ģ��
    var IndexDao=require('../dao/indexDao');
    //2����������
    var indexDao=new IndexDao();
    //3,��ʼ��
    indexDao.init();
    //4,��ѯ����
    indexDao.selectProducts(function (result) {
        res.render('index',{info:result})
        //res.render('index',{info:result,phoneList:result})
        //res.render('index',{phoneList:result})
    })
};


