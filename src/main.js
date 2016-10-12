import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from 'src/services/routes';
import App from 'src/App';
import store from 'src/vuex/store';

Vue.use(VueRouter);
Vue.use(vueResource);

new Vue({
    el: 'body',
    router: router,
    render: h => h(App)
});
