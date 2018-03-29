export default{
    //手机号 1开头的11位数字
    telRegExp(str){
        let reg = /^[1]\d{10}/;
        return reg.test(str) ? true : false
    },
    //密码 6位以上任意
    passwordRegExp(str){
        let reg = /.{6,}/;
        return reg.test(str) ? true : false
    },
    //姓名 1-20位的中英文和空格
    nameRegExp(str){
        let reg = /^[a-zA-Z\u4e00-\u9fa5 ]{1,20}$/;
        return reg.test(str) ? true : false
    },
    //邮箱 邮箱 mp.12-34.qq.com
    emailRegExp(str){
        let reg = /[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/;
        return reg.test(str) ? true : false
    }
}