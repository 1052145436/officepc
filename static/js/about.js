/**
 * Created by Administrator on 2017/3/22.
 */
var aboutObj = {
    init:function(){
        require(['./jquery','./common','./lazysizes.min'],function($,commonJS){
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(0);
        })
    }
}

exports.aboutObj = aboutObj;