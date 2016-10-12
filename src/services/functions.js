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
}

export {mAjax,setCookie};
