/**
 * NAME 2016/9/29
 * DATE 2016/9/29
 * AUTHOR shangxinbo
 */

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
    showLayer: false,
    uploadInitDialog: false,
    uploadCreateDialog:false,
    uploadSelectDialog:false
};

const mutations = {
    // 显示遮罩层
    SHOW_LAYER(state){
        state.showLayer = true;
    },
    // 隐藏遮罩层
    HIDE_LAYER(state){
        state.showLayer = false;
    },
    // 关闭所有弹窗
    CLOSE_DIALOG(state){
        state.uploadInitDialog = false;
        state.uploadCreateDialog = false;
        state.uploadSelectDialog = false;
        state.showLayer = false;
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_INIT_DIALOG(state){
        state.uploadInitDialog = true;
        state.showLayer = true;
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_CREATE_DIALOG(state){
        state.uploadCreateDialog = true;
        state.showLayer = true;
    },
    // 显示上传人群初始化弹窗
    SHOW_UPLOAD_SELECT_DIALOG(state){
        state.uploadSelectDialog = true;
        state.showLayer = true;
    }
};

export default new Vuex.Store({
    state,
    mutations
});