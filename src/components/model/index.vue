<style lang="less" scoped>
    @import "../../../static/less/modeling-screening.less";
</style>
<template>
    <div class="warp">
        <div class="main">
            <ul class="left-nav">
                <li v-bind:class="{active:index[0]}" v-on:mouseover="hover()">英语教育</li>
                <li data-id='11' v-bind:class="{active:index[1]}" v-on:mouseover="hover()">出国英语培训</li>
                <li data-id='3' v-bind:class="{active:index[2]}" v-on:mouseover="hover()">二手房产</li>
                <li data-id='7' v-bind:class="{active:index[3]}" v-on:mouseover="hover()">房产抵押</li>
                <li data-id='10' v-bind:class="{active:index[4]}" v-on:mouseover="hover()">汽车</li>
                <li data-id='8' v-bind:class="{active:index[5]}" v-on:mouseover="hover()">汽车抵押贷款</li>
                <li data-id='1' v-bind:class="{active:index[6]}" v-on:mouseover="hover()">普通信用卡</li>
                <li data-id='9' v-bind:class="{active:index[7]}" v-on:mouseover="hover()">购物信用卡</li>
                <li data-id='12' v-bind:class="{active:index[8]}" v-on:mouseover="hover()">理财</li>
                <li data-id='4' v-bind:class="{active:index[9]}" v-on:mouseover="hover()">活期理财</li>
                <li data-id='6' v-bind:class="{active:index[10]}" v-on:mouseover="hover()">信贷</li>
                <li data-id='5' v-bind:class="{active:index[11]}" v-on:mouseover="hover()">境外旅游</li>
            </ul>
            <ul class="modeling-screening">
                <li class="ms-four" v-bind:class="{active:index[0]}">
                    <img class="ms-img" src="/static/img/ms-img01.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>预估需求程序，并且自动进行培训类别推荐</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘少儿、大学生四六级、商务英语、成考等英语需求用户</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>月均挖掘百万量级用户，到店率
                            <span>17.5%</span>
                        </p>
                    </div>
                    <div class="ms-edge-product">
                        <img src="/static/img/ms-edge01.png" width="153" height="130" />
                        <strong>产品特点</strong>
                        <p>1、商务教育 ：人群的年龄在
                            <span>25-34</span>岁；职业女性从事英语相关工作的概率更大；本科生居多，高收入者不乏少数</p>
                        <p>2、K12教育 ：高学历、中高等收入的家庭重视在线英语教育；家长有房、车比例分别为
                            <span>42.4</span>和
                            <span>39.5</span>
                        </p>
                        <p>3、职业教育 ：针对有成人自考、驾考、职业考试需求的客户</p>
                        <p>4、应试英语 ：垂直针对有留学、大学应试、出国工作需求的客户</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(2)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[1]}">
                    <img class="ms-img" src="/static/img/ms-img02.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>分析各大培训机构学员特征以及用户行为建立预测模型</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘出国需要英语培训的人群推荐对应的培训机构</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>月均
                            <span>25</span>万用户群体，有需求用户
                            <span>1000</span>， 需求率
                            <span>0.4%</span>
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(11)">使用该模型</a>
                </li>
                <li class="ms-four" v-bind:class="{active:index[2]}">
                    <img class="ms-img" src="/static/img/ms-img03.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>针对房产价值、定位、周期等需求多维度建模</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>洞察目标客户，促使二手房销售，提升成交量</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>
                            从拨打到最终成功委托,原外呼营销转化率
                            <span>1%</span>，首次测试客户转化率
                            <span>4.4%</span>。随着三次模型迭代后，转化率进一步提升至
                            <span>7.7%</span>
                        </p>
                    </div>
                    <div class="ms-edge-product">
                        <img src="/static/img/ms-edge01.png" width="153" height="130" />
                        <strong>建模步骤</strong>
                        <p>第一步：主推产品分析建模；</p>
                        <p>第二步：输出目标客户；</p>
                        <p>第三步：客户画像，包含基本属性、产品需求、习惯偏好、消费能力等；</p>
                        <p>第四步：客户分群，按照强需求、弱需求、高价值、低价值进行分类；</p>
                        <p>第五步：收集反馈数据效果，用来迭代模型</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(3)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[3]}">
                    <img class="ms-img" src="/static/img/ms-img04.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型类型</strong>
                        <p>通过建立预估模型，收集反馈数据迭代模型</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘有资金需求并且有房的用户，对高价值用户推荐相应产品</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>周均
                            <span>2K</span>，有需求
                            <span>100</span>，其中预约率
                            <span>2%</span>
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(7)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[4]}">
                    <img class="ms-img" src="/static/img/ms-img05.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>效果</strong>
                        <p>已经有
                            <span>15.1%</span>的客户明确其购车需求，还有
                            <span>10.9%</span>的客户应约到4S门店进行咨询</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>通过对汽车品牌已有销售线索进行建模分析，挖掘出高购车需求客户，提供名单给对应4S店进行客户跟进，提升销售线索最终的转化率</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>建模步骤</strong>
                        <p>第一步：在汽车厂商销售线索库获取自有客群；</p>
                        <p>第二步：基于用户线上行为标签建立模型；</p>
                        <p>第三步：通过模型筛选出高价值销售线索；</p>
                        <p>第四步：4S店运用智能销售话束进行外呼；</p>
                        <p>第五步：客户购买</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(10)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[5]}">
                    <img class="ms-img" src="/static/img/ms-img06.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>同时考虑汽车标签用户与贷款需求用户，对汽车需求、贷款需求、信贷条件三方面进行联合建模</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>针对有车一族有贷款需求的用户</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>周均
                            <span>5K</span>，有需求
                            <span>300</span>，需求率
                            <span>6%</span>
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(8)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[6]}">
                    <img class="ms-img" src="/static/img/ms-img07.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>综合各区域的经济发展、网络关注度、新增发卡量、持卡人收入等因素建立信用卡业务区域价值指数模型，模型考虑了各区域线上与线下的综合表现</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘有信用卡需求的人群向其推荐对应卡种</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>日均
                            <span>1000</span>进件，核卡率
                            <span>30%</span>，远高于业界水平</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(1)">使用该模型</a>
                </li>
                <li class="ms-four" v-bind:class="{active:index[7]}">
                    <img class="ms-img" src="/static/img/ms-img08.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特征</strong>
                        <p>用户购物、电商、信用卡标签进行筛选，并且根据购物强弱、信用卡的使用情况建模</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>从发卡规模增速来看，深度发掘某个细分卡种人群的偏好，满足特定卡种的需求，能够产生较高的用户吸引力和申办意愿</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>日均
                            <span>1000+</span>进件，核卡率高达
                            <span>20%-25%</span>
                        </p>
                    </div>
                    <div class="ms-edge-product">
                        <img src="/static/img/ms-edge01.png" width="153" height="130" />
                        <strong>人群特征</strong>
                        <p>1、购物卡人群更加偏爱电商平台，阿里、京东双寡头优势明显；</p>
                        <p>2、用户趋于年轻化，过度超前消费现象增加；</p>
                        <p>3、女性相对男性更加喜欢电商、家政等与日常生活息息相关的消费网站</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(9)">使用该模型</a>
                </li>
                <li class="ms-four" v-bind:class="{active:index[8]}">
                    <img class="ms-img" src="/static/img/ms-img09.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>通过真实样本获取理财人群共同特征的数据维度建立模型，不间断的通过模型效果数据优化模型</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘理财需求的用户群体</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>
                            <span style="padding-left:0;">2</span>周客群数据
                            <span>8</span>万，回复量
                            <span>3000</span>，进件量
                            <span>400</span>，进件率
                            <span>0.5%</span>
                        </p>
                    </div>
                    <div class="ms-edge-product">
                        <img src="/static/img/ms-edge01.png" width="153" height="130" />
                        <strong>产品特点</strong>
                        <p>1、银行理财产品占主要地位，流动性好、风险及收益稳定是银行理财产品的主要优势；</p>
                        <p>2、
                            <span style="padding-left:0;">1-6</span>个月的理财产品一直是市场主力，占发行产品数量的
                            <span>70%</span>左右；与传统的期限越长收益率越高的认知不同，
                            <span>1-3</span>月、
                            <span>3-6</span>月两类产品的收益超出其他期限的理财产品
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(12)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[9]}">
                    <img class="ms-img" src="/static/img/ms-img10.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>使用活期理财标签进行筛选用户群，并且根据用户行为建模，预估用户购买活期理财的意愿强弱</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>挖掘有大量资金暂时闲置的用户，推荐活期理财</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>
                            <span style="padding-left:0;">2</span>周客群数据
                            <span>8</span>万，回复量
                            <span>4000</span>，回复率
                            <span>5%</span>， 进件量
                            <span>500</span>，进件率
                            <span>0.626%</span>
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(4)">使用该模型</a>
                </li>
                <li class="ms-three" v-bind:class="{active:index[10]}">
                    <img class="ms-img" src="/static/img/ms-img11.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>通过贷款需求、信贷资格、金融活动等进行建模
                            <br/>信贷模型与消费场景密不可分，要求信贷产品不断从行业和用户进行垂直划分，最终产品的行业垂直化与用户层级的垂直化</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>寻找高置信、低风险贷款群体</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>周均
                            <span>1W</span>，标准件
                            <span>2000</span>，其中预约率
                            <span>6%</span>
                        </p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(6)">使用该模型</a>
                </li>
                <li class="ms-four" v-bind:class="{active:index[11]}">
                    <img class="ms-img" src="/static/img/ms-img12.png" />
                    <div class="ms-edge-feature">
                        <img src="/static/img/ms-edge02.png" width="110" height="102" />
                        <strong>模型特点</strong>
                        <p>抓取旅游高需求与高端用户，根据时效性，推荐其旅游产品</p>
                    </div>
                    <div class="ms-edge-aims">
                        <img src="/static/img/ms-edge03.png" width="88" height="75" />
                        <strong>目标</strong>
                        <p>通过境外人群特点分析，寻找境外游的客户群体</p>
                    </div>
                    <div class="ms-edge-result">
                        <img class="one" src="/static/img/ms-edge04.png" width="78" height="80" />
                        <img class="two" src="/static/img/ms-edge05.png" width="92" height="95" />
                        <strong>效果</strong>
                        <p>最终转化率达到千分之四</p>
                    </div>
                    <div class="ms-edge-product">
                        <img src="/static/img/ms-edge01.png" width="153" height="130" />
                        <strong>人群特征</strong>
                        <p>1、十一、春节为境外游高峰时段；</p>
                        <p>2、旅游人群中用使用移动端查看旅游攻略的比例较高；</p>
                        <p>3、涉及到签证问题时则多用PC端查询。</p>
                    </div>
                    <a href="javascript:void(0);" v-on:click="select(5)">使用该模型</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                index: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        },
        methods: {
            hover: function () {
                let li = Array.prototype.slice.call(document.querySelectorAll('.left-nav li'))
                var indexes = li.findIndex((item) => {
                    return item == event.target
                })
                var newArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                newArr[indexes] = 1
                this.index = newArr
            },
            select: function (id) {
                //TODO SELECT MODULE ID
            }
        }
    }

</script>