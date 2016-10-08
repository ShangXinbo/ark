<template>
    <li>
        <i class="icon login-icon"></i>
        <div id="quit" class="quit">
            <p>{{ username }}</p>
            <a href="/users/index.html">
                <i class="icon icon01"></i>
                <span v-if="type>0">账号管理</span>
                <span v-else>我的账号</span>
            </a>
            <a data-quit="1" href="javascript:void(0)">
                <i class="icon icon02"></i>
                <span>退 出</span>
            </a>
        </div>
    </li>
</template>
<script>
import FN from 'src/services/functions.js';
let user = new FN();
export default {
    data(){
        return JSON.parse(user.getCookie('user'));
    }
};
</script>
