<style lang="less">
    @import '../../../static/less/tag.less';
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="screening">
                <div class="breadcrumb">
                    <dl>
                        <dt>全部</dt>
                    </dl>
                </div>
                <div class="screening-left">
                    <div class="scroll-warp" style="overflow-y:auto">
                        <ul class="scroll-content screening-one">
                            <li v-for="(item,key) in tagsL1" :class="{show:item.show}" v-on:click="getChilds(item.code)">
                                <div class="sort-first" v-bind:title="item.tagName"><i v-bind:class="item.spritClass" class="icon"></i><span>{{item.tagName}}</span></div>
                                <tree :level="item.tagLevel" :code="item.code" :show="item.show" :child="item.hasChildren"></tree>
                            </li>
                        </ul>
                    </div>
                </div>
                <tag-folder></tag-folder>   
            </div>
            <div class="cart-warp">
                <h3>标签购物车</h3>
                <div class="scroll-warp">
                    <div class="scroll-content">
                        <div class="cart" id="cart_1">
                            <h4>购物篮1</h4>
                            <ul class="active">
                                <li data-init="1">
                                    <strong>请在左侧选择标签，加入购物篮</strong>
                                </li>
                            </ul>
                            <div class="all-item"></div>
                        </div>
                    </div>
                    <div class="add-cart">
                        <a class="disabled" href="javascript:void(0);"><i class="icon"></i><span>添加新购物篮</span></a>
                    </div>
                </div>
                <div class="billing">
                    <a href="javascript:void(0);">删除</a>
                    <a href="javascript:void(0);">清空</a>
                    <input type="submit" value="下一步" />
                </div>
            </div>
        </div>
        <div class="base-main" style="display: none;">
            <h2>基础属性筛选</h2>
            <div class="base-tag-warp"></div>
            <div class="edit-btn">
                <a href="javascript:void(0)" class="prev">上一步</a>
                <a href="javascript:void(0)" class="pass">跳过</a>
                <a href="javascript:void(0)" class="next active">下一步</a>
            </div>
        </div>
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

    export default {
        data: function() {
            return {
                tagsL1: {}
            };
        },
        components: {
            tree,
            tagFolder
        },
        methods: {
            getChilds: function(code, child) {
                for (let i in this.tagsL1) {
                    this.tagsL1[i].show = false
                }
                this.tagsL1[code].show = true
            }
        },
        mounted: function() {
            let _this = this;
            store.commit('PAGE_NO_SCROLL')
            mAjax(this, {
                url: API.filter_getTagStructure,
                data: {
                    code: -1,
                    level: 0
                },
                success: function(data) {
                    if (data.code == 200) {
                        let obj = {}
                        let list = data.detail
                        for (let i = 0; i < list.length; i++) {
                            obj[list[i].code] = Object.assign({}, list[i], {
                                show: false
                            })
                        }
                        _this.tagsL1 = obj
                    } else {
                        //TODO: 未加载数据
                    }
                }
            });
        },
        destroyed: function() {
            store.commit('PAGE_WIDTH_SCROLL')
        }
    };
</script>