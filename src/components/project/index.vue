<style lang="less" scoped>
    @import "../../../static/less/crowd.less";
</style>
<template>
    <div class="warp">
        <div class="main">
            <div class="nav-switch">
                <h3>营销项目</h3>
            </div>
            <div class="center-button">
                <ul>
                    <li v-if="clues>0">
                        筛选销售线索：
                        <span>{{clues}}条</span>
                    </li>
                    <li v-if="people>0">转化用户：
                        <span>{{people}}人</span>
                    </li>
                </ul>
                <label class="search">
                    <input type="text" placeholder="信用卡" />
                    <span>
                        <i class="magnifier"></i>
                    </span>
                </label>
                <router-link to="/project/create">
                    <i class="add"></i>
                    <span>创建营销项目</span>
                </router-link>
            </div>
            <div id="com-table">
                <table class="com-table">
                    <tr>
                        <th class="w11p tl">项目名称</th>
                        <th class="cycle">周期</th>
                        <th class="clues tl">已下载线索</th>
                        <th class="w13p tl">营销人群</th>
                        <th class="date">开始日期</th>
                        <th class="w10p tl">地域</th>
                        <th class="tl">描述</th>
                        <th class="status">状态</th>
                        <th class="account">操作</th>
                    </tr>
                    <tr v-for="(item,index) in list" :class="{bg:index%2==0}">
                        <td class="tl">
                            <!--<router-link to="">贷款项目</router-link>-->
                            <a @click = "jumps">贷款项目</a>
                        </td>
                        <td>2</td>
                        <td class="tl">100000</td>
                        <td class="tl">消费信用贷场景</td>
                        <td>2016.07.02</td>
                        <td class="tl">北京,上海</td>
                        <td class="tl">消费信用贷场景消费信用贷场景消费信用贷场景消费信用贷场景</td>
                        <td>进行中</td>
                        <td>
                            <a href="javascript:void(0);">暂停</a>
                            <em class="line"></em>
                            <a href="javascript:void(0);">关闭</a>
                            <em class="line"></em>
                            <a href="javascript:void(0);">删除</a>
                        </td>
                    </tr>
                </table>
            </div>
            <pages :total="totalPage" :current="currentPage" @jump='refresh' :url="api"></pages>
        </div>
    </div>
</template>
<script>
    import { mAjax } from 'src/services/functions'
    import API from 'src/services/api'
    import pages from '../message/pages.vue'
    import router from '../../router/index'

    export default {
        data: () => {
            return {
                list: '',
                clues: '',
                people: '',
                totalPage: 1,
                currentPage: 1,
                api:API.project_my_list
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
                            _this.list = data.detail.data
                            _this.clues = data.detail.total.salesNum
                            _this.people = data.detail.total.changeNum
                            _this.totalPage = Math.floor(data.detail.page.total / 10)
                            _this.currentPage = page
                        } else {
                            _this.list = ''
                        }
                    }
                })
            },
            jumps(){
                router.push({
                    name:"project_detail",
                    query:{
                        id:2
                    }
                })
            }
        },
        mounted: function () {
            this.refresh()
        }
    }

</script>