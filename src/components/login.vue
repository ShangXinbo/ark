<style scoped="true">@import "/static/css/login.css";</style>
<template>
<div class="main">
    <h2><img src="/static/img/logo-login.png" width="189" height="58" alt="集奥方舟" title="集奥方舟"></h2>
    <ul>
        <li>
            <i class="head"></i>
            <input autocomplete="off" v-model:value.text="username" />
        </li>
        <li>
            <i class="password"></i>
            <input autocomplete="new-password" v-model:value.password="password" />
        </li>
        <li class="reminder">{{error}}</li>
        <li>
            <button id="input" v-on:click="login" type="submit">登录</button>
        </li>
    </ul>
</div>
</template>
<script>
import API from 'src/services/api';
export default {
    data: function(){
        return {
            username:'',
            password:'',
            error:''
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
            this.$http.post(API.login,{
                username:vm.username,
                password:vm.password
            }).then(function(data){

            },function(error){

            });
        }
    }
};
</script>


