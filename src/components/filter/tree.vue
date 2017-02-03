<style lang="less" scoped>
    @import '../../../static/less/tag.less';
</style>
<template>
    <ul v-show="show" class="screening-sub">
        <li v-for="(item,index) in tagsLs" ref="li" v-on:click="getChilds(item.code)">
            <div class="checkbox-warp" v-bind:title="item.tagName"><i class="icon"></i><span>{{item.tagName}}</span></div>
            <tree-list :ref="item.code"></tree-list>
        </li>
    </ul>
</template>
<script>
    import API from 'src/services/api';
    import {
        mAjax
    } from 'src/services/functions';
    export default {
        name: 'tree-list',
        data: function() {
            return {
                show: 0,
                tagsLs: []
            };
        },
        methods: {
            getChilds: function(code) {
                let li = this.$refs.li
                for (let i = 0; i < li.length; i++) {
                    li[i].className = ''
                }
                event.currentTarget.className = 'show'
                this.$refs[code][0].$data.show = 1
            }
        },
        watch: {
            show: function() {
                const _this = this;
                mAjax(this, {
                    url: API.filter_getTagStructure,
                    data: {
                        code: _this.tagid,
                        level: _this.level
                    },
                    success: function(data) {
                        if (data.code == 200) {
                            _this.tagsLs = data.detail;
                        } else {
                            //TODO: 未加载数据
                        }
                    }
                });
            }
        }
    };
</script>