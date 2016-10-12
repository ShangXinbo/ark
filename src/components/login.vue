<style lang="less" scoped>
    @import '../../static/less/login.less';
</style>
<template>
<div class="main">
    <h2><img src="/static/img/logo-login.png" width="189" height="58" alt="集奥方舟" title="集奥方舟"></h2>
    <ul>
        <li>
            <i class="head"></i>
            <input autocomplete="off" v-model:value.text="username"/>
        </li>
        <li>
            <i class="password"></i>
            <input autocomplete="new-password" v-model:value.password="password"/>
        </li>
        <li class="reminder">{{error}}</li>
        <li>
            <button id="input" type="submit" v-on:click="login">登录</button>
        </li>
    </ul>
</div>
</template>
<script>
import API from 'src/services/api';
import {mAjax,setCookie} from 'src/services/functions';
import store from 'src/vuex/store';
import router from 'src/services/routes';
export default {
    data: function () {
        return {
            username: '',
            password: '',
            error: ''
        };
    },
    methods: {
        login: function () {
            if (!this.username) {
                this.error = "请输入您的用户名!";
                return false;
            }
            if (!this.password) {
                this.error = "请输入您的密码!";
                return false;
            }
            var vm = this;
            mAjax(vm, {
                url: API.login,
                data: {
                    username: vm.username,
                    password: vm.password
                },
                success: function (data) {
                    if (data.code == 200) {
                        mAjax(vm, {
                            url: API.get_user_info,
                            success: function (data) {
                                setCookie('user',JSON.stringify(data.detail.user));
                                router.push('index');
                            }
                        });
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        }
    }
};
</script>


