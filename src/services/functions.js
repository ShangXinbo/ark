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
}

export {mAjax,setCookie,getCookie,indexOf};
