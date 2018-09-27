/**
 * Created by Administrator on 2017/3/22.
 */
var cultrueObj = {
    init:function(){
        require(['./jquery','./common','./lazysizes.min'],function($,commonJS){
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(2);
        })
    }
}

exports.cultrueObj = cultrueObj;