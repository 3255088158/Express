/**
 * Created by chLiu on 2018/10/10.
 */

function accountDao(){
    this.init=function(){
        //1,����MySQLģ��
        var mysql = require('mysql');  //����MySQLģ��
        //2������һ��connection
        this.connection = mysql.createConnection({
            host     : 'localhost',       //���� ip
            user     : 'root',            //MySQL��֤�û���
            password : '123456',           //MySQL��֤�û�����
            port: '3306',                 //�˿ں�
            database:'infor'           //���ݿ����������
        });
//3������
        this.connection.connect();
    }

    this.selectPassword=function(call,name){
        //1,��дsql���
        //var  userGetSql = 'SELECT * FROM account';
        var userGetSql="select Password from account where Email='"+name+"'"
//2,���в�ѯ����
        /**
         *query��mysql���ִ�еķ���
         * 1��userAddSql��д��sql���
         * 2��function (err, result)���ص�������err��ִ�д���ʱ���ش�һ��errֵ����ִ�гɹ�ʱ������result
         */
        this.connection.query(userGetSql,function (err, result) {
            if(err){
                console.log('[INSERT ERROR] - ',err.message);
                return;
            }
            call(result);
        });//3,���ӽ���
        this.connection.end();
    }
}
module.exports=accountDao;