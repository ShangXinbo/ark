<style lang="less" scoped>
    @import '../../../static/less/page.less';
</style>
<template>
    <div class="page" v-show="total>1">
        <a class="prev" :class="{disabled:current==1}" @click="goPage(current-1)" href="javascript:void(0);">上一页</a>
        <a href="javascript:void(0);" :class="{active:current==1}" @click="goPage(1)">1</a>
        <span v-show="current>3">...</span>
        <a href="javascript:void(0);" v-show="current>3" @click="goPage(current-2)">{{current-2}}</a>
        <a href="javascript:void(0);" v-show="current>2" @click="goPage(current-1)">{{current-1}}</a>
        <a href="javascript:void(0);" v-show="current>1" class="active" @click="goPage(current)">{{current}}</a>
        <a href="javascript:void(0);" v-show="current<total-1" @click="goPage(current+1)">{{current+1}}</a>
        <a href="javascript:void(0);" v-show="current<total-2&&total>5" @click="goPage(current+2)">{{current+2}}</a>
        <span v-show="total>7&&current<total-2">...</span>
        <a href="javascript:void(0);" @click="goPage(total)" v-show="current<total">{{total}}</a>
        <a class="next" href="javascript:void(0);" v-show="current<total" @click="goPage(current+1)">下一页</a>
    </div>
</template>
<script>
    import router from 'src/services/routes';
    export default {
        props: ['total', 'current', 'url'],
        methods: {
            goPage: function(page) {
                router.push(`/message/${page}`)
                this.$emit('jump')
            }
        }
    }
</script>