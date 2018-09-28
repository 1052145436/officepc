/**
 * Created by Administrator on 2017/3/22.
 */
var supplierObj = {
    init: function () {
        require(['./jquery', './common', './lazysizes.min'], function ($, commonJS) {
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(4);
            initSocailBox();

            function initSocailBox(){
                $('#socail-nav>li').on('click', function () {
                    $('#socail-nav>li').each(function () {
                        $(this).removeClass('current');
                    });

                    $(this).addClass('current');
                    $('#social-nav-bar').stop().animate({'left': (60 + $(this).index() * $(this).width()) + 'px'}, 500)
                })
            }
        })
    }
}

exports.supplierObj = supplierObj;