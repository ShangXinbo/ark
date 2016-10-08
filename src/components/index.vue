<style scoped="true">
    body {
        height: 100%;
        min-height: 1040px
    }

    .index-icon {
        display: inline-block;
        width: 114px;
        height: 114px;
        vertical-align: top;
        margin-top: 65px;
        -o-transition: margin-top .3s linear;
        -moz-transition: margin-top .3s linear;
        -webkit-transition: margin-top .3s linear;
        transition: margin-top .3s linear;
        background: url(/static/img/index-icon.png) no-repeat 0 0
    }

    .warp {
        height: 100%;
        max-width: 1042px;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center
    }

    .main {
        width: 100%
    }

    .index-button {
        margin-top: 60px;
        height: 56px;
        font-size: 0;
        text-align: center
    }

    .index-button a {
        display: inline-block;
        width: 348px;
        height: 100%;
        margin: 0 55px;
        font-size: 26px;
        line-height: 56px;
        color: #FFF;
        background-color: #E94D6A;
        border-radius: 10px
    }

    .index-button a:hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        background-color: #eb5b75
    }

    .index-content {
        padding: 64px 0 0 1px;
        overflow: hidden
    }

    .index-content li {
        width: 348px;
        height: 348px;
        text-align: center;
        float: left;
        overflow: hidden;
        margin: -1px 0 0 -1px;
        position: relative
    }

    .index-content .uc {
        background-position: 0 0
    }

    .index-content .ts {
        background-position: -114px 0
    }

    .index-content .ms {
        background-position: -228px 0
    }

    .index-content .sa {
        background-position: 0 -114px
    }

    .index-content .la {
        background-position: -114px -114px
    }

    .index-content .cm {
        background-position: -228px -114px
    }

    .index-content h2 {
        margin-top: 28px;
        font-size: 26px;
        height: 30px;
        line-height: 30px
    }

    .index-content h3 {
        padding-top: 5px;
        height: 30px;
        font: 26px/30px Arial;
        color: #8B8DA8
    }

    .index-content p {
        width: 300px;
        margin: 15px auto 0;
        font-size: 16px;
        line-height: 30px;
        color: #8E87A5;
        opacity: 0;
        filter: alpha(opacity=0);
        -o-transition: opacity .3s linear;
        -moz-transition: opacity .3s linear;
        -webkit-transition: opacity .3s linear;
        transition: opacity .3s linear
    }

    .index-content a {
        display: block;
        width: 346px;
        height: 346px;
        border: 1px solid #3D395C;
        float: left;
        overflow: hidden;
        color: #FFF
    }

    .index-content a:hover {
        width: 344px;
        height: 344px;
        border: 2px solid #09A88D;
        position: absolute;
        z-index: 2
    }

    .index-content a:hover .index-icon {
        margin-top: 32px
    }

    .index-content a:hover p {
        opacity: 1;
        filter: alpha(opacity=100)
    }

    @media (max-width: 1366px) {
        body {
            min-height: 648px
        }

        .index-icon {
            width: 72px;
            height: 72px;
            margin-top: 32px;
            background-image: url(/static/img/index-icon-media.png)
        }

        .warp {
            width: 762px
        }

        .index-button {
            margin-top: 25px;
            height: 36px
        }

        .index-button a {
            width: 220px;
            font-size: 16px;
            line-height: 36px;
            margin: 0 35px
        }

        .index-content {
            padding: 25px 0 0 2px
        }

        .index-content li {
            width: 254px;
            height: 204px
        }

        .index-content .ts {
            background-position: -72px 0
        }

        .index-content .ms {
            background-position: -144px 0
        }

        .index-content .sa {
            background-position: 0 -72px
        }

        .index-content .la {
            background-position: -72px -72px
        }

        .index-content .cm {
            background-position: -144px -72px
        }

        .index-content h2 {
            margin-top: 15px;
            height: 20px;
            line-height: 20px;
            font-size: 16px
        }

        .index-content h3 {
            height: 22px;
            font-size: 16px;
            line-height: 22px;
            padding-top: 0
        }

        .index-content p {
            width: 226px;
            padding: 0 12px;
            font-size: 12px;
            line-height: 20px;
            margin-top: 8px
        }

        .index-content a {
            width: 252px;
            height: 202px
        }

        .index-content a:hover {
            width: 250px;
            height: 200px
        }

        .index-content a:hover .index-icon {
            margin-top: 12px
        }
    }
</style>
<template>
<div class="warp">
    <div class="main">
        <div class="index-button">
            <a data-dialog="getNewCustomer" class="clearStorage" href="javascript:void(0);">新客获取向导</a>
            <a data-dialog="upLoadCrowd" class="clearStorage" href="javascript:void(0);">存量营销向导</a>
        </div>
        <ul class="index-content">
            <li v-on:click="crowdUpDialog" class="clearStorage">
                <a href="javascript:void(0);">
                    <i class="index-icon uc"></i>
                    <h2>上传人群</h2>
                    <h3>Upload Crowd</h3>
                    <p>上传您的客户数据，匹配我们的数据，<br/>对您的客户群体进行深度分析和应用</p>
                </a>
            </li>
            <li class="clearStorage" data-key="tags">
                <a href="/filter/index.html">
                    <i class="index-icon ts"></i>
                    <h2>标签筛选</h2>
                    <h3>Tags Screening</h3>
                    <p>通过我们的海量标签和特征属性库,<br/>筛选出您想要的目标客户群体</p>
                </a>
            </li>
            <li class="clearStorage">
                <a href="/modeling-screening.html">
                    <i class="index-icon ms"></i>
                    <h2>建模筛选</h2>
                    <h3>Modeling Screening</h3>
                    <p>使用我们成熟高效的建模模型,<br/>筛选出您想要的目标客户群体</p>
                </a>
            </li>
            <li>
                <a href="/report.html?ana=1">
                    <i class="index-icon sa"></i>
                    <h2>统计分析</h2>
                    <h3>Statistical Analysis</h3>
                    <p>多维度分析统计客户群体特征,<br/>为您的决策和应用提供最直观有效的依据</p>
                </a>
            </li>
            <li>
                <a href="/project/list.html">
                    <i class="index-icon la"></i>
                    <h2>标签应用</h2>
                    <h3>Label Application</h3>
                    <p>营销应用筛选出来的目标客户群体,<br/>并对营销反馈阶段进行管理</p>
                </a>
            </li>
            <li>
                <a href="/upload/history/index.html">
                    <i class="index-icon cm"></i>
                    <h2>人群管理</h2>
                    <h3>Crowd Management</h3>
                    <p>对本账号历史上传人群,<br/>和以往筛选记录的相关管理与应用</p>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import store from 'src/vuex/store';
import { showUploadInit,closeDialogs } from 'src/vuex/actions';
export default {
    vuex:{
        actions:{
            showUploadInit,
            closeDialogs
        }
    },
    methods: {
        crowdUpDialog: function(){
            this.closeDialogs();
            this.showUploadInit();
        }
    }
};

</script>


