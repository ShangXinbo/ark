/**
 * NAME 2016/9/26
 * DATE 2016/9/26
 * AUTHOR shangxinbo
 */
import Vue from 'vue';
import Vueresource from 'vue-resource';
import API from 'src/services/api.js';
import FN from 'src/services/functions.js';

Vue.use(Vueresource);

export default FN.getCookie('user');

/*
Vue.http.get(API.get_user_info,function(){
    "use strict";
},function(){
    "use strict";

});*/
