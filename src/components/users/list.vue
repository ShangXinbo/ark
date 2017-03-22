<style lang="less" scoped>
    @import "../../../static/less/crowd.less";
</style>
<template>
    <div class="main">
        <div class="nav-switch">
            <h3>账号管理</h3>
        </div>
        <div class="center-button">
            <a id="adduser" href="javascript:void(0);">
                <i class="add"></i>
                <span>添加账号</span>
            </a>
        </div>
        <table class="com-table">
            <tr>
                <th class="w13p">账号名称</th>
                <th class="w13p">昵称</th>
                <th class="w10p">用户类型</th>
                <th class="w11p">手机号</th>
                <th>邮箱</th>
                <th class="w11p">创建时间</th>
                <th class="w10p">状态</th>
                <th class="w22p">操作</th>
            </tr>
            <tr v-for="(item,index) in list " :id="item.id">
                <td>{{item.username}}</td>
                <td>{{item.nickname}}</td>
                <td>{{item.usertype}}</td>
                <td>{{item.phone}}</td>
                <td>{{item.email}}</td>
                <td>{{item.created_at}}</td>
                <td class="status">{{item.status}}</td>
                <td>
                    <a class="alter" href="javascript:void(0);">修改</a>
                    <em class="line"></em>
                    <a class="resetpass" href="javascript:void(0);">重置密码</a>
                    <em class="line"></em>
                    <a class="state" href="javascript:void(0);"></a>
                    <em class="line"></em>
                    <a class="delete" href="javascript:void(0);">删除</a>
                </td>
            </tr>
        </table>
        <pages :total="totalPage" :current="currentPage" @jump='refresh' :url="api"></pages>
    </div>
</template>
<script>
    import { mAjax } from 'src/services/functions'
    import API from 'src/services/api'
    import pages from 'components/message/pages.vue'
    export default {
        data: () => {
            return {
                list: '',
                totalPage: 1,
                currentPage: 1,
                api: API.user_list
            }
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
                        page: 1,
                        nums: 10
                    },
                    success: (data) => {
                        if (data.code == 200) {
                            _this.list = data.detail.users.data
                            _this.totalPage = Math.floor(data.detail.users.total / 10)
                            _this.currentPage = page
                        } else {
                            _this.list = ''
                        }
                    }
                })
            }
        },
        mounted: function () {
            this.refresh()
        }
    }

</script>