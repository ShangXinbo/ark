<template>
    <div class="base-main" v-show="show">
        <h2>基础属性筛选</h2>
        <div class="base-tag-warp">
            <div class="base-tag-item" v-for="(item,key) in list">
                <h3><i :class="key"></i>{{item.label}}：</h3>
                <div class="base-tag">
                    <span :class="{active:tag.active}" v-for="(tag,index) in item.rows" @click="toggleActive(tag.active,key,index)">{{tag.val}}<i></i></span>
                </div>
            </div>
        </div>
        <div class="edit-btn">
            <a href="javascript:void(0)" @click="prev()" class="prev">上一步</a>
            <a href="javascript:void(0)" @click="skip()" class="pass">跳过</a>
            <a href="javascript:void(0)" @click="next()" class="next active">下一步</a>
        </div>
    </div>
</template>
<script>
    import {
        mAjax
    } from 'src/services/functions'
    import API from 'src/services/api'
    import store from 'src/vuex/store'
    import VueRouter from 'vue-router';
    import _ from 'lodash'

    export default {
        data: function() {
            return {
                list: []
            }
        },
        computed: {
            show: function() {
                return store.state.baseTag_show
            }
        },
        mounted: function() {
            let _this = this
            mAjax(this, {
                url: API.filter_getFixedProperty,
                success: function(data) {
                    if (data.code == 200) {
                        let obj = {}
                        let list = data.detail
                        for (let i in list) {
                            let item = list[i].rows
                            for (let j = 0; j < item.length; j++) {
                                item[j].active = false
                            }
                        }
                        _this.list = list
                    } else {
                        //TODO: 未加载数据
                    }
                }
            })
        },
        methods: {
            prev: function() {
                store.commit('SHOW_BASETAGS', false)
            },
            toggleActive: function(status, key, index) {
                let list = this.list
                list[key].rows[index].active = !status
                this.list = _.cloneDeep(list)
            },
            skip: function() {

            },
            next: function() {
                var router = new VueRouter();
                router.push('report');
            }
        }
    }
</script>