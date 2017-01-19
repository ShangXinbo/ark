<style lang="less" scoped>
    @import '../../../static/less/crowd.less';
</style>
<template>
    <section>
        <div class="center-button"></div>
        <div id="com-table">
            <table class="com-table">
                <tr>
                    <th class="w20p tl">名称</th>
                    <th class="w30p tl">描述</th>
                    <th class="tl">筛选条件</th>
                    <th class="w13p">筛选时间</th>
                    <th class="w12p">操作</th>
                </tr>
                <tr v-for="item in list" :id="item.id" :text="item.content">
                    <td class="tl">{{item.name}}</td>
                    <td class="tl">{{item.desc}}</td>
                    <td class="tl" :title="item.tagStr">{{item.tagstr}}</td>
                    <td>{{item.createTime}}</td>
                    <td class="edit">
                        <a class="use" href="javascript:void(0);">使用</a>
                        <em class="line"></em>
                        <a class="delete" href="javascript:void(0);">删除</a>
                    </td>
                </tr>
            </table>
        </div>
        <pages :total="totalPage" :current="currentPage" @jump='refresh' :url="api"></pages>
    </section>
</template>
<script>
    import {
        mAjax
    } from 'src/services/functions';
    import API from 'src/services/api';
    import pages from '../message/pages.vue';
    export default {
        data: function () {
            return {
                list: [],
                currentPage: '1',
                totalPage: '1',
                api: API.template_list
            };
        },
        components: {
            pages
        },
        methods: {
            refresh: function () {
                let _this = this
                let page = this.$route.params.page
                mAjax(this, {
                    url: _this.api,
                    data: {
                        page: page ? page : 1,
                        rows: 10
                    },
                    success: function (data) {
                        if (data.code == 200) {
                            _this.list = data.detail.rows;
                            _this.currentPage = parseInt(page);
                            _this.totalPage = Math.floor(data.detail.total / 10);
                        }
                    }
                });
            }
        },
        filters: {
            subDate: function (value) {
                if (!value) return '';
                value = value.toString();
                return value.substr(0, 10);
            }
        },
        mounted: function () {
            this.refresh();
        }
    };
</script>