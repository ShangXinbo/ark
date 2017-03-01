<style lang="less">
    @import "../../../../static/less/label-application.less";
</style>

<template>
<div class="warp">
    <div class="main">
        <ul class="breadcrumb">
            <li><a data-href="datause" href="/project/list.html">营销项目</a></li>
            <li><span></span></li>
        </ul>
        <div class="title-bar">
            <h2>{{project.name}}</h2>
            <div class="center-button">
                <ul>
                    <li v-if="isAdmin">账号：<span>{{user_name}}</span></li>
                    <li>营销周期：<span>{{cycle.cycle}}期</span></li>
                    <li>下载数据：
                        <span v-if="cycle.clue_download_count">{{cycle.clue_download_count}}期</span>
                        <span v-else="cycle.clue_download_count">-</span>
                    </li>
                    <li>目标客户群：<span>{{cycle.effect_total}}条</span></li>
                    <li>转化用户：
                        <span v-if="cycle.upload_status==1">{{cycle.conversion}}人</span>
                        <span v-else="cycle.upload_status==1">-</span>
                    </li>
                </ul>
                <a v-if="!isAdmin" class="downback" href="javascript:void(0);"><i class="download"></i><span>下载反馈模版</span></a>
            </div>
        </div>
        <!--<div class="line-chart">
        	<div class="chart-warp" id="cutline">
            </div>
            <div class="line-legend">
                <ul class="line-legend-item">
                </ul>
            </div>
        </div>-->
        <lineChart :projectId="2"></lineChart>
        <div class="case-table">
            <table class="com-table">
                <tr>
                    <th>周期</th>
                    <th>线索生成时间</th>
                    <th>反馈用时</th>
                    <th>线索量</th>
                    <th></th>
                    <th v-for="(item,i) in level" :title="item.level">{{item.shortLevel}}</th>
                    <th>状态</th>
                    <th v-if="!isAdmin">操作</th>
                </tr>
           
                <tr v-for="(item,i) in list" :class="{'bg':i%2}" :data-id="item.id">
                    <td>
                        <a v-if="item.effect_total>0" :href="'/project/cycle.html?id='+item.id+'&project_id='+item.project_id" >周期{{i+1}}</a>
                        <a v-else="item.effect_total>0" data-alert="周期数据未匹配成功" >周期{{i+1}}</a>
                        </td>
                    <td>{{item.clue_time}}</td>
                        <td v-if="item.effect_time==0">-</td>            
                        <td v-else="item.effect_time==0">{{item.effect_time}}天</td>
                    <td>{{item.effect_total}}</td>
                    <td class="special"><p>筛选线索数</p><p>转化率</p></td>
                    <template v-if="item.level">
                        <td v-for="(lv,j) in item.level">
                            <p>{{lv}}</p>
                            <p>{{item.levelScore[j]}}%</p>
                        </td>
                    </template>
                    <template v-else="item.level"> 
                        <td v-for="(item,i) in level">
                            <p>-</p>
                            <p>-</p>
                        </td>
                    </template>
                        
                    <td>
                        <template v-if="item.clue_create_status">
                                已完成
                        </template>
                        <template v-else="item.clue_create_status">                        
                            进行中
                        </template>
                        
                    </td>
                    <td v-if="!isAdmin">
                        <template v-if="item.effect_total>0">
                            <a v-if="!item.clue_download_status" :data-upback="-1" href="javascript:void(0)">上传反馈</a>
                            <a v-else="!item.clue_download_status" :data-upback="item.id" href="javascript:void(0)">上传反馈</a>
                            <em class="line"></em>
                            <template v-if="item.upload_status">
                                <a :data-downupback="item.id" href="javascript:void(0)">查看反馈</a>
                                <em class="line"></em>
                            </template>
                            <template v-if="item.clue_create_status">
                                <a :data-turn="item.effect_total" class="{'market':item.effect_total>0}" data-alert="周期数据未匹配成功" href="javascript:void(0)">应用</a>
                            </template>
                        </template>
                    </td>
                </tr>
              
                <tr v-if="all" :class="{'bg':all.bg}">
                    <td>汇总</td>
                    <td></td>
                        <td v-if="all.effect_time == 0">-</td>
                        <td v-else="all.effect_time == 0">{{all.effect_time}}天</td>
                    <td>{{all.effect_total}}</td>
                    <td class="special">
                        <p>筛选线索数</p>
                        <p>转化率</p>
                    </td>
                    <td v-for="(item,m) in level">
                        <p v-if="all.level && all.level.length > 0 && all.level[m]!==''">{{all.level[m]}}</p>
                        <p v-else="all.level && all.level.length > 0 && all.level[m]!==''">-</p>	                
                        <p v-if="all.levelScore && all.levelScore.length > 0 && all.levelScore[m]!==''">{{all.levelScore[m]}}%</p>
                        <p v-else="all.levelScore && all.levelScore.length > 0 && all.levelScore[m]!==''">-</p>	                
                    </td>
                    <td></td>
                    <td v-if="!isAdmin"></td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>
<script>
    import { getCookie,mAjax } from 'src/services/functions'
    import API from 'src/services/api'
    import lineChart from './lineChar.vue'
    let user = JSON.parse(getCookie('user'))
    
    export default {
        data: () => {
            return {
                project: {},
                user_id: '',
                user_name: '',
                isAdmin: '',
                cycle: {},
                level: '',
                list: '',
                all: '',
                api:API.tags_list
            }
        },
        components: {
            lineChart
        },
        methods: {
            refresh: function () {
                let _this = this
                let project_id = _this.$route.query.id
                mAjax(this, {
                    url: _this.api,
                    data: {
                        project_id: project_id,
                        type: 'cyclelist'
                    },
                    success: (data) => {
                        if (data.code == 200) {
                            data = data.detail
                            var isAdmin = false
                            if ((user.type == 1||user.type==5) && user.id != data.user_id) {
                                isAdmin = 1
                            }
                            if (!data.all.level || data.all.level.length == 0) {
                                data.all.level = []
                                for (var i in data.level) {
                                    data.all.level.push('')
                                }
                            }
                            var levelData = data.level.map(function(d){
                                var item = {}
                                item.level = d
                                if(d.length>5){
                                    item.shortLevel = d.slice(0,5) + '...'                       	
                                }else{
                                    item.shortLevel = d                       	                        	
                                }
                                return item
                            })
                            for (let i=0;i<data.list.length;i++) {
                                if(data.list[i].upload_status){
                                    data.head.upload_status = 1
                                    break
                                }else{
                                    data.head.upload_status = 0                   		
                                }
                            }
                            if(data.list.length % 2 == 0){
                                data.all.bg = false
                            }else{
                                data.all.bg = true
                            }

                            _this.project = data.project
                            _this.user_name = data.user_name
                            _this.user_id = data.user_id
                            _this.isAdmin = isAdmin
                            _this.cycle = data.head
                            _this.level = levelData
                            _this.list = data.list
                            _this.all = data.all
                            console.log(isAdmin)
                            console.log(_this.level)
                            console.log(_this)
                        } else {
                            _this.project = {}
                            _this.user_name = ''
                            _this.user_id = ''
                            _this.isAdmin = ''
                            _this.cycle = {}
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
