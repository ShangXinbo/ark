/**
 * NAME 2016/8/16
 * DATE 2016/8/16
 * AUTHOR shangxinbo
 */

export default class {

    /**
     * 设置cookie
     * @param {string} name  cookie名  （必须）
     * @param {string} value cookie值  （必须）
     * @param {string} noExpire     cookie存活时间(必须)  时间秒数/年数
     * @param {string} noyear    控制noExpire的单位
     * @return {null} cookie set
     **/
    setCookie(name, value, noExpire, noyear) {
        var param1 = name + '=' + escape(value) + ';';
        var param2 = '';
        if (noExpire) {
            var expires = new Date();
            if (noyear == null) noExpire = (1000 * 86400 * 365) * noExpire;
            expires.setTime(expires.getTime() + noExpire);
            param2 = 'expires=' + expires.toUTCString() + ';';
        }
        document.cookie = param1 + param2 + 'path=/;' ;
    }

    /**
     * 获取cookie值
     * @param {string} name cookie's name
     * @return {null} cookie's value
     * */
    getCookie(name) {
        var cookie_name = name + '=';
        var cookie_length = document.cookie.length;
        var cookie_begin = 0;
        while (cookie_begin < cookie_length) {
            var value_begin = cookie_begin + cookie_name.length;
            if (document.cookie.substring(cookie_begin, value_begin) == cookie_name) {
                var value_end = document.cookie.indexOf(';', value_begin);
                if (value_end == -1) {
                    value_end = cookie_length;
                }
                return unescape(document.cookie.substring(value_begin, value_end));
            }
            cookie_begin = document.cookie.indexOf(' ', cookie_begin) + 1;
            if (cookie_begin == 0) {
                break;
            }
        }
        return null;
    }

    /**
     * 删除cookie
     * @param {string} name cookie's name
     * @return {null} ''
     * */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = name + '=;path=/;expires=' + exp.toUTCString();
    }

    /**
     * 存储value至sessionStorage前，对value进行序列化
     * @param {string} key 键值
     * @param {string} value 值
     * @return {null} ''
     **/
    saveSelectedInSessionStorage(key, value) {
        var storage = window.sessionStorage;
        var val = JSON.stringify(value);
        storage.setItem(key, val);
    }

    /**
     * 清空sessionStorage中的数据
     * @return {null} ''
     **/
    clearSessionStorageVal() {
        this.removeSessionStorageVal('crowd');
        this.removeSessionStorageVal('tags');
        this.removeSessionStorageVal('ucmodel');
    }

    /**
     * 删除sessionStorage中某个数据
     * @param {string} sKey 键值
     * @return {null} ''
     **/
    removeSessionStorageVal(sKey) {
        var storage = window.sessionStorage;
        storage.removeItem(sKey);
    }

}

