<style lang="less" scoped>
    @import '../../../static/less/crowd.less';
</style>
<template>
    <section>
        <div class="center-button"></div>
        <div id="com-table">
            <table class="com-table" v-if="list.length>0">
                <tr>
                    <th class="w20p tl">名称</th>
                    <th class="tl">描述</th>
                    <th class="w9p tl">客户数</th>
                    <th class="w15p">上传时间</th>
                    <th class="w10p">标签画像</th>
                    <th class="w15p">操作</th>
                </tr>
                <tr v-for="item in list" :id="item.id">
                    <td class="tl" v-if="item.createTime">{{item.uploadName}}</td><td class="tl" v-else>{{item.name}}</td>
                    <td class="tl" v-if="item.createTime">{{item.uploadDesc}}</td><td class="tl" v-else>{{item.description}}</td>
                    <td class="tl" v-if="item.createTime">{{item.lines}}</td><td class="tl" v-else>{{num}}</td>
                    <td class="tl" v-if="item.createTime">{{item.createTime}}</td><td class="tl" v-else>{{item.updated_at}}</td>
                    <td>{{item.tagStr}}</td>
                    <td class="edit"></td>
                </tr>
            </table>
            <div v-else class="com-table-null">暂无数据</div>
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
        data: function() {
            return {
                list: [],
                currentPage: '1',
                totalPage: '1',
                api: API.upload_list
            };
        },
        components: {
            pages
        },
        methods: {
            refresh: function() {
                let _this = this
                let page = this.$route.params.page
                page = page ? page : 1
                mAjax(this, {
                    url: _this.api,
                    data: {
                        page: page,
                        rows: 10
                    },
                    success: function(data) {
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
            subDate: function(value) {
                if (!value) return '';
                value = value.toString();
                return value.substr(0, 10);
            }
        },
        mounted: function() {
            this.refresh();
        }
    };
</script>