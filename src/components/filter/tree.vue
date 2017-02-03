<style lang="less" scoped>
    @import '../../../static/less/tag.less';
</style>
<template>
    <ul v-show="show" class="screening-sub">
        <li v-for="(item,index) in tagsLs" :class="{show:item.show,checked:item.checked}">
            <div class="checkbox-warp" v-bind:title="item.tagName">
                <i class="icon" @click="toStage(item.code)"></i>
                <span @click="getChilds(item.code)">{{item.tagName}}</span>
            </div>
            <tree-list :level="item.tagLevel" :code="item.code" :show="item.show" :child="item.hasChildren"></tree-list>
        </li>
    </ul>
</template>
<script>
    import API from 'src/services/api'
    import {
        mAjax
    } from 'src/services/functions'
    import store from 'src/vuex/store'

    export default {
        name: 'tree-list',
        props: [
            'level',
            'code',
            'show',
            'child'
        ],
        data: function() {
            return {
                tagsLs: []
            };
        },
        methods: {
            getChilds: function(code) {
                for (let i in this.tagsLs) {
                    this.tagsLs[i].show = false
                }
                this.tagsLs[code].show = true
            },
            toStage: function(code) {
                if (this.tagsLs[code].checked) {
                    this.tagsLs[code].checked = false
                } else {
                    this.tagsLs[code].checked = true
                }

            }
        },
        watch: {
            show: function(val, old) {
                if (!val) return
                const _this = this;
                mAjax(this, {
                    url: API.filter_getTagStructure,
                    data: {
                        code: _this.code,
                        level: _this.level
                    },
                    success: function(data) {
                        if (data.code == 200) {
                            let obj = {}
                            let list = data.detail
                            for (let i = 0; i < list.length; i++) {
                                obj[list[i].code] = Object.assign({}, list[i], {
                                    show: false,
                                    checked: false
                                })
                            }
                            if (_this.child) {
                                _this.tagsLs = obj
                            }
                            store.commit('CHANGE_FILTER_FOLDER', _this.tagsLs)
                        } else {
                            //TODO: 未加载数据
                        }
                    }
                });
            }
        }
    };
</script>