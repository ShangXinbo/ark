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
                    <li>筛选销售线索：
                        <span>200000条</span>
                    </li>
                    <li>转化用户：
                        <span>700人</span>
                    </li>
                </ul>
                <label class="search">
                    <input type="text" value="信用卡" />
                    <span>
                        <i class="magnifier"></i>
                    </span>
                    <i class="delete"></i>
                </label>
                <a href="create-marketing.html">
                    <i class="add"></i>
                    <span>创建营销项目</span>
                </a>
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
                    <tr class="bg">
                        <td class="tl">
                            <a href="label-application-detail(general).html">贷款项目</a>
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
                    <tr>
                        <td class="tl">
                            <a href="label-application-detail(general).html">贷款项目</a>
                        </td>
                        <td>单次</td>
                        <td class="tl">100000</td>
                        <td class="tl">消费信用贷场景</td>
                        <td>2016.07.02</td>
                        <td class="tl">北京,上海</td>
                        <td class="tl">消费信用贷场景消费信用贷场景消费信用贷场景消费信用贷场景</td>
                        <td>进行中</td>
                        <td>
                            <a href="javascript:void(0);">应用</a>
                            <em class="line"></em>
                            <a href="javascript:void(0);">暂停</a>
                            <em class="line"></em>
                            <a href="javascript:void(0);">关闭</a>
                            <em class="line"></em>
                            <a href="javascript:void(0);">删除</a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="page">
                <a class="prev disabled" href="javascript:void(0);">上一页</a>
                <a href="javascript:void(0);" class="active">1</a>
                <a href="javascript:void(0);">2</a>
                <a href="javascript:void(0);">3</a>
                <span>...</span>
                <a href="javascript:void(0);">19</a>
                <a class="next" href="javascript:void(0);">下一页</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }

</script>