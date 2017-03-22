<style lang="less" scoped>
    @import "../../../static/less/crowd.less";
</style>
<template>
    <div class="warp">
        <user-list v-if="list"></user-list>
        <self-info v-else></self-info>
    </div>
</template>
<script>
    import { mAjax, getCookie } from 'src/services/functions'
    import userList from './list.vue'
    import selfInfo from './myinfo.vue'
    let user = JSON.parse(getCookie('user'))
    export default {
        data: () => {
            return {
                list: user.type ? true : false
            }
        },
        components: {
            userList,
            selfInfo
        }
    }

</script>