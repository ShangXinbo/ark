<style lang="less" scoped>
    @import '../../../static/less/crowd.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="nav-switch">
                <router-link :class="{active:nFilter}" to="/crowd/filter">
                    <span>标签筛选历史</span>
                </router-link>
                <router-link :class="{active:nPortrait}" to="/crowd/tag">
                    <span>画像筛选历史</span>
                </router-link>
                <router-link :class="{active:nUplaod}" to="/crowd/upload">
                    <span>上传人群管理</span>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import filter from './filter.vue'
    import tag from './tag.vue'
    import upload from './upload.vue'
    export default {
        data: function () {
            return {}
        },
        computed: {
            nFilter: function () {
                return this.$route.path.indexOf('crowd/filter') > 0
            },
            nPortrait: function () {
                return this.$route.path.indexOf('crowd/tag') > 0
            },
            nUplaod: function () {
                return this.$route.path.indexOf('crowd/upload') > 0
            }
        }
    }

</script>