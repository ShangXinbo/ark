<style lang="less" scoped>
    @import '../../../static/less/crowd.less';

</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="nav-switch">
                <h3>我的消息</h3>
            </div>
            <div id="com-table" class="news-table">
                <table class="com-table">
                    <tr>
                        <th class="ti10 tl">消息内容</th>
                        <th class="w20p">时间</th>
                        <th class="w20p">操作</th>
                    </tr>
                    <tr v-for="(item,index) in list" v-bind:class="{bg:index%2>0}">
                        <td class="tl">{{item.content}}</td>
                        <td>{{item.created_at|subDate}}</td>
                        <td><a href="javascript:void(0);">删除</a></td>
                    </tr>
                </table>
            </div>
            <pages v-bind:total="totalPage" v-bind:current="currentPage"></pages>
        </div>
    </div>
</template>
<script>
    import {
        mAjax
    } from 'src/services/functions';
    import API from 'src/services/api';
    import pages from './pages.vue';
    export default {
        data: function () {
            return {
                list: [],
                currentPage: '',
                totalPage: ''
            };
        },
        components: {
            pages
        },
        filters: {
            subDate: function (value) {
                if (!value) return '';
                value = value.toString();
                return value.substr(0, 10);
            }
        },
        mounted: function () {
            let _this = this;
            mAjax(this, {
                url: API.message_list,
                data: {
                    page: 1,
                    rows: 10
                },
                success: function (data) {
                    if (data.code == 200) {
                        _this.list = data.detail.messages.data;
                        _this.currentPage = parseInt(data.detail.messages.current_page);
                        _this.totalPage = Math.floor(data.detail.messages.total / data.detail.messages.per_page);
                    }
                }
            });
        }
    };

</script>
