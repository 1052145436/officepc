/**
 * Created by Administrator on 2017/3/22.
 */
var contactObj = {
    init:function(){
        require(['./common','./lazysizes.min'],function(commonJS){
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(5);
        })
    }
}

exports.contactObj = contactObj;