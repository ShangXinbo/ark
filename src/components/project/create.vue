<style lang="less" scoped>
    @import "../../../static/less/create.less";
</style>
<template>
    <div class="warp">
        <div class="main">
            <h2>创建营销项目</h2>
            <ul class="create-warp">
                <li>
                    <div class="li-input-warp">
                        <label>项目名称</label>
                        <input class="text" v-model="name" type="text" />
                    </div>
                </li>
                <li>
                    <label>筛选人群</label>
                    <div class="filters-item" v-if="crowd">
                        <span @click="chooseCrowd">{{crowd.name}}
                            <i class="delete"></i>
                        </span>
                        <i class="modify" @click="delCrowd"></i>
                    </div>
                    <div class="filters-item" v-else>
                        <a href="javascript:void(0);" @click="chooseCrowd">
                            <i class="filter"></i>
                            <em>筛选人群</em>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="li-input-warp">
                        <label>类型</label>
                        <div class="select-warp" :class="{'select-open':type}">
                            <!-- 在div上加上class（select-open）显示出ul列表 -->
                            <p>周期项目</p>
                            <ul>
                                <li>周期项目</li>
                                <li>周期项目</li>
                            </ul>
                        </div>
                    </div>
                    <div class="li-input-warp">
                        <label>开始时间</label>
                        <div class="calendar-warp">
                            <input class="text" type="text" disabled="disabled" />
                        </div>
                    </div>
                </li>
                <li>
                    <div class="li-input-warp">
                        <label>营销周期</label>
                        <div class="select-warp" :class="{'select-open':cycle}">
                            <!-- 在div上加上class（select-open）显示出ul列表 -->
                            <p>周</p>
                            <ul>
                                <li>周</li>
                                <li>月</li>
                            </ul>
                        </div>
                    </div>
                    <div class="li-input-warp">
                        <label></label>
                        <div class="select-warp w145" :class="{'select-open':week}">
                            <!-- 在div上加上class（select-open）显示出ul列表 -->
                            <p>包含周末</p>
                            <ul>
                                <li>包含周末</li>
                                <li>包含周末</li>
                            </ul>
                        </div>
                        <div class="select-warp w170" :class="{'select-open':holiday}">
                            <!-- 在div上加上class（select-open）显示出ul列表 -->
                            <p>包含法定假日</p>
                            <ul>
                                <li>包含法定假日</li>
                                <li>包含法定假日</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="li-input-warp">
                        <label>地域</label>
                        <input class="text" v-model="area" type="text" />
                    </div>
                </li>
                <li>
                    <div class="li-input-warp">
                        <label>描述</label>
                        <textarea v-model="des"></textarea>
                    </div>
                </li>
            </ul>

            <div class="create-button">
                <a class="red" @click="submit" href="javascript:void(0);">提交</a>
                <a class="gray" @click="cancel" href="javascript:void(0);">取消</a>
            </div>
        </div>
    </div>
</template>
<script>
    import VueRouter from 'vue-router'
    let router = new VueRouter()
    export default {
        data: () => {
            return {
                cycle: false,
                type: false,
                week: false,
                holiday: false,
                name: '',
                area: '',
                des: '',
                crowd: null
            }
        },
        methods: {
            cancel: function () {
                router.push('/project/')
            },
            submit: function () {
                router.push('/project/')
            },
            delCrowd: function () {

            },
            chooseCrowd: function () {

            }
        }
    }

</script>