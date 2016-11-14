/**
 * NAME 2016/8/16
 * DATE 2016/8/16
 * AUTHOR shangxinbo
 */



const mAjax = function(vm,options){
    vm.$http.post(options.url,options.data).then(function(data){
        if(data.status==200){
            options.success(data.body);
        }else if(data.status==404){
            //TODO 404
        }else if(data.status == 403){
            //TODO 403
        }else if(data.status == 500){
            //TODO 500
        }else{
            //TODO other error
        }
    },options.error);
};

const setCookie = function(name,value) {
    var param1 = name + '=' + escape(value) + ';';
    document.cookie = param1 + 'path=/;';
};

const getCookie = function(name) {
    var cookie_name = name + '=';
    var cookie_length = document.cookie.length;
    var cookie_begin = 0;
    while (cookie_begin < cookie_length) {
        var value_begin = cookie_begin + cookie_name.length;
        if (document.cookie.substring(cookie_begin, value_begin) == cookie_name) {
            var value_end = document.cookie.indexOf(';', value_begin);
            if (value_end == -1) {
                value_end = cookie_length;
            }
            return unescape(document.cookie.substring(value_begin, value_end));
        }
        cookie_begin = document.cookie.indexOf(' ', cookie_begin) + 1;
        if (cookie_begin == 0) {
            break;
        }
    }
    return null;
};

const indexOf = function(self,clt){
    for(var i=0;i < clt.length;i++){
        if(clt[i]==self){
            return i;
        }
    }
    return -1;
};


const accAdd = function(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
};

const accSub = function(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
};

const accMul = function(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
        //console.log(e);
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
        //console.log(e);
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};

const accDiv = function(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        //console.log(e);
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        //console.log(e);
    }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
};


export {mAjax,setCookie,getCookie,indexOf,accAdd,accSub,accMul,accDiv};
