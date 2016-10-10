<style scoped="true">@import "/static/css/login.css";</style>
<template>
<div class="main">
    <h2><img src="/static/img/logo-login.png" width="189" height="58" alt="集奥方舟" title="集奥方舟"></h2>
    <ul>
        <li>
            <i class="head"></i>
            <input autocomplete="off" type="text" id="username">
        </li>
        <li>
            <i class="password"></i>
            <input  autocomplete="new-password" type="password" id="password">
        </li>
        <li class="reminder" id="reminder">

        </li>
        <li>
            <button id="input1" type="submit">登录</button>
        </li>
    </ul>
</div>
</template>
<script>
import store from 'src/vuex/store';
export default {
    methods: {
        crowdUpDialog: function () {
            store.commit('CLOSE_DIALOG');
            store.commit('SHOW_UPLOAD_INIT_DIALOG');
        }
    }
};
</script>


