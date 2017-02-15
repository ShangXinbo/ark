<style lang="less" scoped>
    @import '../../../static/less/tag.less';
</style>
<template>
    <ul v-show="show" class="screening-sub">
        <li v-for="(item,index) in li" :class="{show:item.show,checked:item.checked,active:item.code == active}">
            <div class="checkbox-warp" v-bind:title="item.tagName">
                <i class="icon" @click.stop="toChecked(item.code)"></i>
                <span @click.stop="getChilds(item.code)">{{item.tagName}}</span>
            </div>
            <tree-list :level="item.tagLevel" :code="item.code" :checked="item.checked" :show="item.show" :child="item.hasChildren">
            </tree-list>
        </li>
    </ul>
</template>
<script>
    import API from 'src/services/api'
    import { mAjax } from 'src/services/functions'
    import store from 'src/vuex/store'
    import _ from 'lodash'

    export default {
        name: 'tree-list',
        props: [
            'level',
            'code',
            'show',
            'child',
            'checked'
        ],
        data: function () {
            return {
                tagsLs: []
            }
        },
        computed: {
            active: function () {
                return store.state.filterTagActive
            },
            li: function () {
                if (!this.child) {
                    return {}
                } else {
                    return this.tagsLs
                }
            },
            stage: function () {
                return store.state.tagStage
            }
        },
        methods: {
            getChilds: function (code) {
                for (let i in this.tagsLs) {
                    this.tagsLs[i].show = false
                }
                this.tagsLs[code].show = true
                store.commit('CHANGE_ACTIVE_TAG', code)
            },
            toChecked: function (code) {
                if (this.tagsLs[code].checked) {
                    store.commit('UNCHECKED_FOLDER_TAG', code)
                } else {
                    store.commit('CHECKED_FOLDER_TAG', {
                        'code': code,
                        'tag': this.tagsLs[code].tagName
                    })
                }
            }
        },
        watch: {
            show: function (val, old) {
                if (!val) return
                const _this = this
                mAjax(this, {
                    url: API.filter_getTagStructure,
                    data: {
                        code: _this.code,
                        level: _this.level
                    },
                    success: function (data) {
                        if (data.code == 200) {
                            let obj = {}
                            let list = data.detail
                            for (let i = 0; i < list.length; i++) {

                                let tag = false
                                _.forIn(_this.stage, function (value, key) {
                                    if (value.code == list[i].code) {
                                        tag = true
                                    }
                                })
                                obj[list[i].code] = Object.assign({}, list[i], {
                                    show: false,
                                    checked: tag,
                                    active: false
                                })
                            }
                            _this.tagsLs = obj
                            store.commit('CHANGE_FILTER_FOLDER', _this.tagsLs)
                        } else {
                            //TODO: 未加载数据
                        }
                    }
                })
            },
            active: function (val, old) {
                if (this.code == val && !_.isEmpty(this.tagsLs)) {
                    store.commit('CHANGE_FILTER_FOLDER', this.tagsLs)
                }
            },
            stage: function (val, old) {
                let _this = this
                _.forIn(_this.tagsLs, function (value, key) {
                    let tag = false
                    val.forEach(function (element, index, array) {
                        if (element.code == key) {
                            tag = true
                        }
                    })
                    if (tag) {
                        _this.tagsLs[key].checked = true
                    } else {
                        _this.tagsLs[key].checked = false
                    }
                })
            }
        }
    }

</script>