/**
 * NAME 2016/9/29
 * DATE 2016/9/29
 * AUTHOR shangxinbo
 */

/**
 * 通用action
 * @param {string} type 类型
 * @return {null} ''
* */
function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args);
}

export const closeDialogs = function({ dispatch }){
    dispatch('CLOSE_DIALOG');
};
export const showUploadInit = function({ dispatch }){
    dispatch('SHOW_UPLOAD_INIT_DIALOG');
};
export const showUploadCreate = function({ dispatch }){
    dispatch('SHOW_UPLOAD_CREATE_DIALOG');
};
export const showUploadSelect = function({ dispatch }){
    dispatch('SHOW_UPLOAD_SELECT_DIALOG');
};