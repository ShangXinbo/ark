<style lang="less">
    @import '../../../static/less/tag.less';
</style>
<template>
    <div class="warp">
        <div class="main" v-show="show">
            <div class="screening">
                <div class="breadcrumb">
                    <dl>
                        <dt>全部</dt>
                    </dl>
                </div>
                <div class="screening-left">
                    <div class="scroll-warp" style="overflow-y:auto">
                        <ul class="scroll-content screening-one">
                            <li v-for="(item,key) in tagsL1" :class="{show:item.show,active:item.code==active}">
                                <div class="sort-first" v-bind:title="item.tagName">
                                    <i v-bind:class="item.spritClass" class="icon"></i>
                                    <span v-on:click.stop="getChilds(item.code)">{{item.tagName}}</span>
                                </div>
                                <tree :level="item.tagLevel" :code="item.code" :show="item.show" :child="item.hasChildren"></tree>
                            </li>
                        </ul>
                    </div>
                </div>
                <tag-folder></tag-folder>
            </div>
            <cart></cart>
        </div>
        <base-tag></base-tag>
    </div>
</template>
<script>
    import {
        mAjax
    } from 'src/services/functions'
    import API from 'src/services/api'
    import tree from './tree.vue'
    import store from 'src/vuex/store'
    import tagFolder from './folder.vue'
    import cart from './cart.vue'
    import baseTag from './basetag.vue'

    export default {
        data: function () {
            return {
                tagsL1: {}
            }
        },
        components: {
            tree,
            tagFolder,
            cart,
            baseTag
        },
        computed: {
            active: function () {
                return store.state.filterTagActive
            },
            show: function () {
                return !store.state.baseTag_show
            }
        },
        methods: {
            getChilds: function (code, child) {
                for (let i in this.tagsL1) {
                    this.tagsL1[i].show = false
                    this.tagsL1[i].active = false
                }
                this.tagsL1[code].show = true
                this.tagsL1[code].active = true
                store.commit('CHANGE_ACTIVE_TAG', code)
            }
        },
        mounted: function () {
            let _this = this
            store.commit('PAGE_NO_SCROLL')
            mAjax(this, {
                url: API.filter_getTagStructure,
                data: {
                    code: -1,
                    level: 0
                },
                success: function (data) {
                    if (data.code == 200) {
                        let obj = {}
                        let list = data.detail
                        for (let i = 0; i < list.length; i++) {
                            obj[list[i].code] = Object.assign({}, list[i], {
                                show: false,
                                active: false
                            })
                        }
                        _this.tagsL1 = obj
                    } else {
                        //TODO: 未加载数据
                    }
                }
            })
        },
        destroyed: function () {
            store.commit('PAGE_WIDTH_SCROLL')
        }
    }

</script>