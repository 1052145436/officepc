/**
 * Created by Administrator on 2017/3/22.
 */
var indexObj = {
    init:function(){
        require(['./jquery','./common','./lazysizes.min'],function($,commonJS){
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
        })
    }
}

exports.indexObj = indexObj;