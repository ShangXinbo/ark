/**
 * NAME 2016/8/8
 * DATE 2016/8/8
 * AUTHOR shangxinbo
 * 统计图分类图
 */
var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function (req, res) {
    var tags = JSON.parse(req.body.tags);
    var group = tags.group ? tags.group.name : 'default';
    var d = {
        cus_total: 200,
        group_res: []
    };
    if (group == 'default') {
        var dd = {
            "key": null,
            "label": "客户量",
            "vals": []
        };
        for (var i = 0; i < 7; i++) {
            dd.vals.push({
                "date": Random.date('yyyymmdd'),
                "val": Random.natural(1, 100)
            })
        }
        d.group_res.push(dd);
    } else if (group == 'sex') {
        var man = {
            "key": null,
            "label": "男",
            "vals": []
        };
        for (var i = 0; i < 7; i++) {
            man.vals.push({
                "date": Random.date('yyyymmdd'),
                "val": Random.natural(1, 100)
            })
        }
        var woman = {
            "key": null,
            "label": "女",
            "vals": []
        };
        for (var i = 0; i < 7; i++) {
            woman.vals.push({
                "date": Random.date('yyyymmdd'),
                "val": Random.natural(1, 100)
            })
        }
        d.group_res.push(man);
        d.group_res.push(woman);
    } else if (group == 'age') {
        d.group_res = [
            {
                "key": null,
                "label": "0-18",
                "vals": [
                    {
                        "date": "20160802",
                        "val": 1
                    },
                    {
                        "date": "20160803",
                        "val": 1
                    }
                ]
            },
            {
                "key": null,
                "label": "35-49",
                "vals": [
                    {
                        "date": "20160801",
                        "val": 7
                    },
                    {
                        "date": "20160802",
                        "val": 9
                    },
                    {
                        "date": "20160803",
                        "val": 3
                    },
                    {
                        "date": "20160804",
                        "val": 4
                    },
                    {
                        "date": "20160805",
                        "val": 1
                    },
                    {
                        "date": "20160807",
                        "val": 1
                    }
                ]
            },
            {
                "key": null,
                "label": "50-120",
                "vals": [
                    {
                        "date": "20160801",
                        "val": 2
                    },
                    {
                        "date": "20160802",
                        "val": 3
                    },
                    {
                        "date": "20160803",
                        "val": 2
                    },
                    {
                        "date": "20160804",
                        "val": 2
                    },
                    {
                        "date": "20160805",
                        "val": 1
                    }
                ]
            },
            {
                "key": null,
                "label": "19-24",
                "vals": [
                    {
                        "date": "20160801",
                        "val": 19
                    },
                    {
                        "date": "20160802",
                        "val": 19
                    },
                    {
                        "date": "20160803",
                        "val": 3
                    },
                    {
                        "date": "20160804",
                        "val": 17
                    },
                    {
                        "date": "20160806",
                        "val": 18
                    },
                    {
                        "date": "20160805",
                        "val": 21
                    },
                    {
                        "date": "20160807",
                        "val": 19
                    }
                ]
            },
            {
                "key": null,
                "label": "25-34",
                "vals": [
                    {
                        "date": "20160801",
                        "val": 8
                    },
                    {
                        "date": "20160802",
                        "val": 8
                    },
                    {
                        "date": "20160803",
                        "val": 5
                    },
                    {
                        "date": "20160804",
                        "val": 5
                    },
                    {
                        "date": "20160806",
                        "val": 4
                    },
                    {
                        "date": "20160805",
                        "val": 5
                    },
                    {
                        "date": "20160807",
                        "val": 4
                    }
                ]
            }
        ];
    } else if (group == 'area') {
        d= {"cus_total":0,"group_res":[{"key":"30009","label":"黑龙江省","vals":[{"date":"20160807","val":31440},{"date":"20160808","val":35863},{"date":"20160809","val":29760},{"date":"20160810","val":29655},{"date":"20160811","val":32159},{"date":"20160812","val":28560},{"date":"20160813","val":35332}]},{"key":"30035","label":"澳门特别行政区","vals":[{"date":"20160807","val":0},{"date":"20160808","val":0},{"date":"20160809","val":0},{"date":"20160810","val":0},{"date":"20160811","val":0},{"date":"20160812","val":0},{"date":"20160813","val":0}]},{"key":"30003","label":"天津市","vals":[{"date":"20160807","val":175335},{"date":"20160808","val":301171},{"date":"20160809","val":275080},{"date":"20160810","val":213925},{"date":"20160811","val":164239},{"date":"20160812","val":132513},{"date":"20160813","val":195422}]},{"key":"30004","label":"河北省","vals":[{"date":"20160807","val":653922},{"date":"20160808","val":673143},{"date":"20160809","val":554402},{"date":"20160810","val":534355},{"date":"20160811","val":618042},{"date":"20160812","val":565833},{"date":"20160813","val":707526}]},{"key":"30001","label":"未知","vals":[{"date":"20160807","val":0},{"date":"20160808","val":0},{"date":"20160809","val":0},{"date":"20160810","val":0},{"date":"20160811","val":0},{"date":"20160812","val":0},{"date":"20160813","val":0}]},{"key":"30019","label":"湖南省","vals":[{"date":"20160807","val":863509},{"date":"20160808","val":882812},{"date":"20160809","val":688023},{"date":"20160810","val":794236},{"date":"20160811","val":848145},{"date":"20160812","val":764696},{"date":"20160813","val":967089}]},{"key":"30002","label":"北京市","vals":[{"date":"20160807","val":1642559},{"date":"20160808","val":1782479},{"date":"20160809","val":1560667},{"date":"20160810","val":1579503},{"date":"20160811","val":1646914},{"date":"20160812","val":1559271},{"date":"20160813","val":1759522}]},{"key":"30007","label":"辽宁省","vals":[{"date":"20160807","val":40406},{"date":"20160808","val":43352},{"date":"20160809","val":38372},{"date":"20160810","val":37484},{"date":"20160811","val":41476},{"date":"20160812","val":37361},{"date":"20160813","val":45982}]},{"key":"30008","label":"吉林省","vals":[{"date":"20160807","val":59510},{"date":"20160808","val":64305},{"date":"20160809","val":51949},{"date":"20160810","val":53839},{"date":"20160811","val":58029},{"date":"20160812","val":50512},{"date":"20160813","val":63251}]},{"key":"30005","label":"山西省","vals":[{"date":"20160807","val":168743},{"date":"20160808","val":176593},{"date":"20160809","val":139829},{"date":"20160810","val":156368},{"date":"20160811","val":165737},{"date":"20160812","val":132854},{"date":"20160813","val":177255}]},{"key":"30006","label":"内蒙古自治区","vals":[{"date":"20160807","val":13941},{"date":"20160808","val":14532},{"date":"20160809","val":12385},{"date":"20160810","val":12892},{"date":"20160811","val":13545},{"date":"20160812","val":12303},{"date":"20160813","val":15004}]},{"key":"30014","label":"福建省","vals":[{"date":"20160807","val":343710},{"date":"20160808","val":356510},{"date":"20160809","val":214039},{"date":"20160810","val":238826},{"date":"20160811","val":319405},{"date":"20160812","val":280867},{"date":"20160813","val":297021}]},{"key":"30013","label":"安徽省","vals":[{"date":"20160807","val":426023},{"date":"20160808","val":460617},{"date":"20160809","val":355492},{"date":"20160810","val":272372},{"date":"20160811","val":510147},{"date":"20160812","val":359760},{"date":"20160813","val":433525}]},{"key":"30012","label":"浙江省","vals":[{"date":"20160807","val":1224156},{"date":"20160808","val":1167997},{"date":"20160809","val":854720},{"date":"20160810","val":809319},{"date":"20160811","val":979096},{"date":"20160812","val":3492947},{"date":"20160813","val":4691755}]},{"key":"30011","label":"江苏省","vals":[{"date":"20160807","val":1390472},{"date":"20160808","val":1476176},{"date":"20160809","val":1278111},{"date":"20160810","val":1277724},{"date":"20160811","val":1272081},{"date":"20160812","val":1110646},{"date":"20160813","val":1314531}]},{"key":"30018","label":"湖北省","vals":[{"date":"20160807","val":888207},{"date":"20160808","val":922000},{"date":"20160809","val":716463},{"date":"20160810","val":770964},{"date":"20160811","val":854475},{"date":"20160812","val":739224},{"date":"20160813","val":947860}]},{"key":"30010","label":"上海市","vals":[{"date":"20160807","val":410425},{"date":"20160808","val":581498},{"date":"20160809","val":459145},{"date":"20160810","val":490527},{"date":"20160811","val":594005},{"date":"20160812","val":529724},{"date":"20160813","val":678584}]},{"key":"30017","label":"河南省","vals":[{"date":"20160807","val":711863},{"date":"20160808","val":650783},{"date":"20160809","val":557143},{"date":"20160810","val":618558},{"date":"20160811","val":646830},{"date":"20160812","val":564553},{"date":"20160813","val":712860}]},{"key":"30016","label":"山东省","vals":[{"date":"20160807","val":887693},{"date":"20160808","val":915834},{"date":"20160809","val":787173},{"date":"20160810","val":878911},{"date":"20160811","val":814964},{"date":"20160812","val":762656},{"date":"20160813","val":969644}]},{"key":"30015","label":"江西省","vals":[{"date":"20160807","val":83809},{"date":"20160808","val":87537},{"date":"20160809","val":77973},{"date":"20160810","val":78852},{"date":"20160811","val":84305},{"date":"20160812","val":74718},{"date":"20160813","val":96614}]},{"key":"30028","label":"陕西省","vals":[{"date":"20160807","val":100168},{"date":"20160808","val":96971},{"date":"20160809","val":77256},{"date":"20160810","val":87170},{"date":"20160811","val":91292},{"date":"20160812","val":75825},{"date":"20160813","val":86059}]},{"key":"30029","label":"甘肃省","vals":[{"date":"20160807","val":57580},{"date":"20160808","val":58357},{"date":"20160809","val":47226},{"date":"20160810","val":52242},{"date":"20160811","val":54573},{"date":"20160812","val":44540},{"date":"20160813","val":51695}]},{"key":"30024","label":"四川省","vals":[{"date":"20160807","val":838962},{"date":"20160808","val":873568},{"date":"20160809","val":661560},{"date":"20160810","val":842536},{"date":"20160811","val":832467},{"date":"20160812","val":589296},{"date":"20160813","val":426461}]},{"key":"30025","label":"贵州省","vals":[{"date":"20160807","val":76809},{"date":"20160808","val":78848},{"date":"20160809","val":62667},{"date":"20160810","val":77653},{"date":"20160811","val":80175},{"date":"20160812","val":63678},{"date":"20160813","val":69836}]},{"key":"30026","label":"云南省","vals":[{"date":"20160807","val":106330},{"date":"20160808","val":109561},{"date":"20160809","val":84410},{"date":"20160810","val":98850},{"date":"20160811","val":103391},{"date":"20160812","val":83457},{"date":"20160813","val":89897}]},{"key":"30027","label":"西藏自治区","vals":[{"date":"20160807","val":13209},{"date":"20160808","val":13741},{"date":"20160809","val":11972},{"date":"20160810","val":11749},{"date":"20160811","val":13418},{"date":"20160812","val":10226},{"date":"20160813","val":13112}]},{"key":"30031","label":"宁夏回族自治区","vals":[{"date":"20160807","val":25401},{"date":"20160808","val":26294},{"date":"20160809","val":21601},{"date":"20160810","val":23257},{"date":"20160811","val":24224},{"date":"20160812","val":20693},{"date":"20160813","val":24655}]},{"key":"30030","label":"青海省","vals":[{"date":"20160807","val":16125},{"date":"20160808","val":15955},{"date":"20160809","val":12941},{"date":"20160810","val":14596},{"date":"20160811","val":15410},{"date":"20160812","val":12440},{"date":"20160813","val":14412}]},{"key":"30033","label":"台湾省","vals":[{"date":"20160807","val":0},{"date":"20160808","val":0},{"date":"20160809","val":0},{"date":"20160810","val":0},{"date":"20160811","val":0},{"date":"20160812","val":0},{"date":"20160813","val":0}]},{"key":"30023","label":"重庆市","vals":[{"date":"20160807","val":516555},{"date":"20160808","val":540873},{"date":"20160809","val":425215},{"date":"20160810","val":426756},{"date":"20160811","val":507303},{"date":"20160812","val":410627},{"date":"20160813","val":464917}]},{"key":"30032","label":"新疆维吾尔自治区","vals":[{"date":"20160807","val":199},{"date":"20160808","val":199},{"date":"20160809","val":153},{"date":"20160810","val":188},{"date":"20160811","val":177},{"date":"20160812","val":142},{"date":"20160813","val":187}]},{"key":"30022","label":"海南省","vals":[{"date":"20160807","val":71978},{"date":"20160808","val":75525},{"date":"20160809","val":57295},{"date":"20160810","val":67497},{"date":"20160811","val":71793},{"date":"20160812","val":60822},{"date":"20160813","val":72251}]},{"key":"30021","label":"广西壮族自治区","vals":[{"date":"20160807","val":368546},{"date":"20160808","val":379962},{"date":"20160809","val":293931},{"date":"20160810","val":355910},{"date":"20160811","val":385357},{"date":"20160812","val":332328},{"date":"20160813","val":417359}]},{"key":"30020","label":"广东省","vals":[{"date":"20160807","val":1035824},{"date":"20160808","val":1076579},{"date":"20160809","val":786403},{"date":"20160810","val":1216703},{"date":"20160811","val":1230209},{"date":"20160812","val":1104269},{"date":"20160813","val":1414706}]},{"key":"30034","label":"香港特别行政区","vals":[{"date":"20160807","val":0},{"date":"20160808","val":0},{"date":"20160809","val":0},{"date":"20160810","val":0},{"date":"20160811","val":0},{"date":"20160812","val":0},{"date":"20160813","val":0}]}],"error":null,"dim_res":{},"detail":[]};
    } else if (group == 'interest') {
        d.group_res = [{
            "key": null,
            "label": "旅游",
            "vals": [{"date": "20160801", "val": 15}, {"date": "20160802", "val": 14}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 12}, {"date": "20160806", "val": 13}, {
                "date": "20160805",
                "val": 15
            }, {"date": "20160807", "val": 14}]
        }, {
            "key": null,
            "label": "保健医疗",
            "vals": [{"date": "20160801", "val": 9}, {"date": "20160802", "val": 13}, {
                "date": "20160803",
                "val": 4
            }, {"date": "20160804", "val": 13}, {"date": "20160806", "val": 10}, {
                "date": "20160805",
                "val": 12
            }, {"date": "20160807", "val": 11}]
        }, {
            "key": null,
            "label": "餐饮美食",
            "vals": [{"date": "20160801", "val": 7}, {"date": "20160802", "val": 10}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 7}, {"date": "20160806", "val": 8}, {
                "date": "20160805",
                "val": 8
            }, {"date": "20160807", "val": 10}]
        }, {
            "key": null,
            "label": "时尚",
            "vals": [{"date": "20160801", "val": 4}, {"date": "20160802", "val": 3}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 3}, {"date": "20160806", "val": 1}, {
                "date": "20160805",
                "val": 3
            }, {"date": "20160807", "val": 2}]
        }, {
            "key": null,
            "label": "外卖团购",
            "vals": [{"date": "20160801", "val": 16}, {"date": "20160802", "val": 15}, {
                "date": "20160803",
                "val": 5
            }, {"date": "20160804", "val": 16}, {"date": "20160806", "val": 14}, {
                "date": "20160805",
                "val": 16
            }, {"date": "20160807", "val": 16}]
        }, {
            "key": null,
            "label": "影音",
            "vals": [{"date": "20160801", "val": 15}, {"date": "20160802", "val": 13}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 13}, {"date": "20160806", "val": 16}, {
                "date": "20160805",
                "val": 18
            }, {"date": "20160807", "val": 16}]
        }, {
            "key": null,
            "label": "基金",
            "vals": [{"date": "20160801", "val": 2}, {"date": "20160802", "val": 1}, {
                "date": "20160804",
                "val": 2
            }, {"date": "20160806", "val": 2}, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "娱乐",
            "vals": [{"date": "20160801", "val": 7}, {"date": "20160802", "val": 7}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 6}, {"date": "20160806", "val": 5}, {
                "date": "20160805",
                "val": 9
            }, {"date": "20160807", "val": 5}]
        }, {
            "key": null,
            "label": "运动健身",
            "vals": [{"date": "20160801", "val": 3}, {"date": "20160802", "val": 1}, {
                "date": "20160804",
                "val": 2
            }, {"date": "20160806", "val": 1}, {"date": "20160805", "val": 3}]
        }, {
            "key": null,
            "label": "汽车",
            "vals": [{"date": "20160801", "val": 19}, {"date": "20160802", "val": 19}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 19}, {"date": "20160806", "val": 18}, {
                "date": "20160805",
                "val": 22
            }, {"date": "20160807", "val": 19}]
        }, {
            "key": null,
            "label": "房产家居",
            "vals": [{"date": "20160801", "val": 3}, {"date": "20160802", "val": 3}, {
                "date": "20160804",
                "val": 5
            }, {"date": "20160806", "val": 3}, {"date": "20160805", "val": 3}, {"date": "20160807", "val": 3}]
        }, {
            "key": null,
            "label": "财经",
            "vals": [{"date": "20160801", "val": 4}, {"date": "20160802", "val": 10}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 6}, {"date": "20160806", "val": 5}, {
                "date": "20160805",
                "val": 7
            }, {"date": "20160807", "val": 4}]
        }, {
            "key": null,
            "label": "理财",
            "vals": [{"date": "20160801", "val": 4}, {"date": "20160802", "val": 3}, {
                "date": "20160804",
                "val": 3
            }, {"date": "20160806", "val": 2}, {"date": "20160805", "val": 5}, {"date": "20160807", "val": 4}]
        }, {"key": null, "label": "贵金属", "vals": [{"date": "20160802", "val": 1}]}, {
            "key": null,
            "label": "电子银行",
            "vals": [{"date": "20160801", "val": 4}, {"date": "20160802", "val": 5}, {
                "date": "20160804",
                "val": 6
            }, {"date": "20160806", "val": 4}, {"date": "20160805", "val": 7}, {"date": "20160807", "val": 7}]
        }, {
            "key": null,
            "label": "体育",
            "vals": [{"date": "20160801", "val": 3}, {"date": "20160802", "val": 4}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 4}, {"date": "20160806", "val": 1}, {
                "date": "20160805",
                "val": 1
            }, {"date": "20160807", "val": 3}]
        }, {
            "key": null,
            "label": "数码家电",
            "vals": [{"date": "20160801", "val": 23}, {"date": "20160802", "val": 26}, {
                "date": "20160803",
                "val": 7
            }, {"date": "20160804", "val": 22}, {"date": "20160806", "val": 20}, {
                "date": "20160805",
                "val": 24
            }, {"date": "20160807", "val": 22}]
        }, {
            "key": null,
            "label": "新闻",
            "vals": [{"date": "20160801", "val": 14}, {"date": "20160802", "val": 16}, {
                "date": "20160803",
                "val": 3
            }, {"date": "20160804", "val": 15}, {"date": "20160806", "val": 15}, {
                "date": "20160805",
                "val": 16
            }, {"date": "20160807", "val": 17}]
        }, {
            "key": null,
            "label": "信用卡",
            "vals": [{"date": "20160801", "val": 4}, {"date": "20160802", "val": 3}, {
                "date": "20160804",
                "val": 5
            }, {"date": "20160806", "val": 4}, {"date": "20160805", "val": 5}, {"date": "20160807", "val": 3}]
        }, {
            "key": null,
            "label": "股票",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160802", "val": 1}, {
                "date": "20160804",
                "val": 1
            }, {"date": "20160805", "val": 1}]
        }, {
            "key": null,
            "label": "奢侈品",
            "vals": [{"date": "20160802", "val": 3}, {"date": "20160803", "val": 1}, {
                "date": "20160804",
                "val": 2
            }, {"date": "20160806", "val": 1}, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "阅读",
            "vals": [{"date": "20160801", "val": 9}, {"date": "20160802", "val": 8}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 7}, {"date": "20160806", "val": 6}, {
                "date": "20160805",
                "val": 8
            }, {"date": "20160807", "val": 7}]
        }, {
            "key": null,
            "label": "彩票",
            "vals": [{"date": "20160801", "val": 21}, {"date": "20160802", "val": 22}, {
                "date": "20160803",
                "val": 3
            }, {"date": "20160804", "val": 16}, {"date": "20160806", "val": 20}, {
                "date": "20160805",
                "val": 23
            }, {"date": "20160807", "val": 21}]
        }, {
            "key": null,
            "label": "电商",
            "vals": [{"date": "20160801", "val": 26}, {"date": "20160802", "val": 28}, {
                "date": "20160803",
                "val": 6
            }, {"date": "20160804", "val": 21}, {"date": "20160806", "val": 22}, {
                "date": "20160805",
                "val": 27
            }, {"date": "20160807", "val": 23}]
        }, {
            "key": null,
            "label": "教育培训",
            "vals": [{"date": "20160801", "val": 8}, {"date": "20160802", "val": 6}, {
                "date": "20160804",
                "val": 6
            }, {"date": "20160806", "val": 6}, {"date": "20160805", "val": 8}, {"date": "20160807", "val": 6}]
        }, {
            "key": null,
            "label": "母婴亲子",
            "vals": [{"date": "20160801", "val": 14}, {"date": "20160802", "val": 14}, {
                "date": "20160803",
                "val": 4
            }, {"date": "20160804", "val": 13}, {"date": "20160806", "val": 13}, {
                "date": "20160805",
                "val": 16
            }, {"date": "20160807", "val": 11}]
        }, {
            "key": null,
            "label": "社交社区",
            "vals": [{"date": "20160801", "val": 25}, {"date": "20160802", "val": 24}, {
                "date": "20160803",
                "val": 4
            }, {"date": "20160804", "val": 22}, {"date": "20160806", "val": 22}, {
                "date": "20160805",
                "val": 27
            }, {"date": "20160807", "val": 23}]
        }];
    } else if (group == 'mobile') {
        d.group_res = [{
            "key": null,
            "label": "乐视",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160804", "val": 1}, {
                "date": "20160805",
                "val": 1
            }, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "华为",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160802", "val": 1}, {
                "date": "20160804",
                "val": 1
            }, {"date": "20160805", "val": 1}]
        }, {
            "key": null,
            "label": "三星",
            "vals": [{"date": "20160801", "val": 2}, {"date": "20160802", "val": 3}, {
                "date": "20160804",
                "val": 3
            }, {"date": "20160806", "val": 2}, {"date": "20160805", "val": 3}, {"date": "20160807", "val": 3}]
        }, {
            "key": null,
            "label": "美图",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160804", "val": 1}, {
                "date": "20160806",
                "val": 1
            }, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "联想",
            "vals": [{"date": "20160801", "val": 2}, {"date": "20160802", "val": 2}, {
                "date": "20160804",
                "val": 1
            }, {"date": "20160806", "val": 1}, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "奥洛斯",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160804", "val": 1}, {
                "date": "20160806",
                "val": 1
            }, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "中兴",
            "vals": [{"date": "20160802", "val": 1}, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "HIKE",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160802", "val": 1}, {"date": "20160805", "val": 1}]
        }, {
            "key": null,
            "label": "未知",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160802", "val": 3}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 2}]
        }, {
            "key": null,
            "label": "苹果",
            "vals": [{"date": "20160801", "val": 10}, {"date": "20160802", "val": 14}, {
                "date": "20160803",
                "val": 9
            }, {"date": "20160804", "val": 4}, {"date": "20160806", "val": 4}, {
                "date": "20160805",
                "val": 5
            }, {"date": "20160807", "val": 6}]
        }, {
            "key": null,
            "label": "小米",
            "vals": [{"date": "20160801", "val": 9}, {"date": "20160802", "val": 11}, {
                "date": "20160803",
                "val": 2
            }, {"date": "20160804", "val": 9}, {"date": "20160806", "val": 8}, {
                "date": "20160805",
                "val": 8
            }, {"date": "20160807", "val": 5}]
        }, {
            "key": null,
            "label": "OPPO",
            "vals": [{"date": "20160801", "val": 2}, {"date": "20160802", "val": 2}, {
                "date": "20160803",
                "val": 1
            }, {"date": "20160804", "val": 2}, {"date": "20160806", "val": 2}, {
                "date": "20160805",
                "val": 2
            }, {"date": "20160807", "val": 2}]
        }, {
            "key": null,
            "label": "魅族",
            "vals": [{"date": "20160801", "val": 3}, {"date": "20160802", "val": 2}, {
                "date": "20160804",
                "val": 2
            }, {"date": "20160806", "val": 2}, {"date": "20160805", "val": 3}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "LG",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160804", "val": 1}, {
                "date": "20160806",
                "val": 1
            }, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }, {
            "key": null,
            "label": "vivo",
            "vals": [{"date": "20160801", "val": 1}, {"date": "20160805", "val": 1}, {"date": "20160807", "val": 1}]
        }];
    }


    return Mock.mock(d);
}