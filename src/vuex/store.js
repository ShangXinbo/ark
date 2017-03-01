/**
 * NAME 2016/9/29
 * DATE 2016/9/29
 * AUTHOR shangxinbo
 */

import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash'

Vue.use(Vuex)

const state = {
    showLayer: false,
    dialog: {
        crowdInit: false,
        crowdCreate: false,
        crowdSelect: false,
        projectUse: false,
        buttJointOutUse: false
    },
    project: {
        detail: {
            cycleId: '',
            turnNumer: ''
        }
    },
    wholePage: false,
    user: {},
    header: {
        account: false,
        nav: false
    },
    tagFolder: [],
    filters: {
        crowd: { "id": 185, "name": "啊手动阀手动阀" }, //default null
        filter: {
            "tagcode": [
                [
                    { "code": "10301", "text": "资讯论坛", "level": 2 }
                ],
                [
                    { "code": "10301", "text": "资讯论坛", "level": 2 },
                    { "code": "10304", "text": "保养维修", "level": 2 }
                ]
            ],
            "fixedpros": {
                "area": [],
                "interest": [],
                "sex": [{ "code": 10002, "text": "女" }],
                "mobile": [
                    { "code": 410007000000000000, "text": "酷派" },
                    { "code": 410006000000000000, "text": "联想" }
                ],
                "age": []
            }
        },
        model: { "id": 11, "name": "出国英语培训" }
    },
    filterTagActive: 0,
    tagStage: [],
    cart: [
        {}
    ],
    current_basket: 0,
    baseTag_show: false,
    charts: {
        "interest": {
            "百率天影积": "39%",
            "记界半": "87%",
            "机该外律调": "51%",
            "任少律全": "50%",
            "属务能通论标": "49%",
            "些步将市造": "48%",
            "育变列酸格法": "52%",
            "整要者": "34%",
            "件往色务收": "8%",
            "义交器习任": "18%",
            "要天老": "61%",
            "线但根被": "5%",
            "周管确": "6%",
            "平通写音": "9%",
            "个持完程命": "75%",
            "证七下需连但": "67%",
            "小热长除": "8%",
            "多边许数": "63%",
            "型国去": "66%"
        },
        "area": {
            "广东省": "19%",
            "湖南省": "50%",
            "安徽省": "53%",
            "青海省": "14%",
            "海南省": "46%",
            "江苏省": "63%",
            "广西壮族自治区": "93%",
            "台湾": "95%",
            "海外": "14%",
            "新疆维吾尔自治区": "9%",
            "河南省": "68%",
            "重庆": "62%",
            "辽宁省": "57%",
            "甘肃省": "49%"
        },
        "sex": {
            "男": "54%",
            "女": "46%"
        },
        "mobile": {
            "更术": "92%",
            "音大发": "58%",
            "出准级": "82%",
            "称率局": "69%",
            "并去": "16%",
            "专龙期": "64%",
            "件共细": "45%",
            "合省意": "51%",
            "义期清": "48%",
            "象容研": "59%",
            "毛直感": "13%",
            "级后": "2%",
            "采平": "71%",
            "并叫照": "84%",
            "今完九": "46%",
            "程给性": "51%",
            "响是装": "24%",
            "可业": "71%",
            "价部步": "36%"
        },
        "age": {
            "19-24": "20%",
            "0-18": "2%",
            "35-50": "16%",
            "25-34": "10%",
            "50+": "39%"
        }
    }
}

const mutations = {
    //全屏
    PAGE_NO_SCROLL(state) {
        state.wholePage = true
    },
    PAGE_WIDTH_SCROLL(state) {
        state.wholePage = false
    },
    // 显示遮罩层
    SHOW_LAYER(state) {
        state.showLayer = true
    },
    // 隐藏遮罩层
    HIDE_LAYER(state) {
        state.showLayer = false
    },
    // 关闭所有弹窗
    CLOSE_DIALOG(state) {
        state.dialog.crowdInit = false
        state.dialog.crowdCreate = false
        state.dialog.crowdSelect = false
        state.dialog.projectUse = false        
        state.showLayer = false
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_INIT_DIALOG(state) {
        state.dialog.crowdInit = true
        state.showLayer = true
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_CREATE_DIALOG(state) {
        state.dialog.crowdCreate = true
        state.showLayer = true
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_SELECT_DIALOG(state) {
        state.dialog.crowdSelect = true
        state.showLayer = true
    },
    SHOW_PROJECT_USE_DIALOG(state) {
        state.dialog.projectUse = true
    },
    SHOW_SMS_BUTT_JOINT_OUT(state){
        state.dialog.buttJointOutUse = true
    },
    SHOW_NAV(state) {
        state.header.nav = true
        state.header.account = false
    },
    SHOW_ACCOUNT_TAB(state) {
        state.header.nav = false
        state.header.account = true
    },
    HIDE_NAV(state) {
        state.header.nav = false
        state.header.account = false
    },
    CHANGE_FILTER_FOLDER(state, json) {
        state.tagFolder = json
    },
    CHANGE_ACTIVE_TAG(state, code) {
        state.filterTagActive = code
    },
    CHECKED_FOLDER_TAG(state, tag) {
        let stage = state.tagStage
        if (_.indexOf(stage, tag) < 0) {
            state.tagStage.push(tag)
        }
    },
    UNCHECKED_FOLDER_TAG(state, code) {
        state.tagStage.forEach(function (element, index, array) {
            if (element.code == code) {
                _.pullAt(state.tagStage, index)
            }
        })
        state.tagStage = _.compact(state.tagStage)
    },
    CHANGE_CART(state, tags) {
        state.cart = _.cloneDeep(tags)
    },
    CHANGE_BASKET(state, index) {
        let location = index < state.cart.length ? index : state.cart.length - 1
        state.current_basket = location
    },
    SHOW_BASETAGS(state, status) {
        state.baseTag_show = Boolean(status)
    },
    UPDATE_CYCLE_ID(state,cycleId){
        state.project.detail.cycleId = cycleId
    },
    UPDATE_TURN_NUMBER(state,turnNumer){
        state.project.detail.turnNumer = turnNumer
    }
}

export default new Vuex.Store({
    state,
    mutations
})