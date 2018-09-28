/**
 * Created by Administrator on 2017/3/22.
 */
var noticeObj = {
    init: function () {
        require(['./jquery', './common', './lazysizes.min'], function ($, commonJS) {
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(4);
        })
    }
}

exports.noticeObj = noticeObj;