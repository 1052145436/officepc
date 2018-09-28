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
                $('.form-info .horse-box').each(function(){
                    $(this).hide();
                    if($(this).index() === 0){
                        $(this).show();
                    }
                });

                $('#socail-nav>li').click(function(){
                    $('#socail-nav>li').each(function () {
                        $(this).removeClass('current');
                    });

                    $(this).addClass('current');
                    var bigIndex = $(this).index();
                    $('#social-nav-bar').stop().animate({'left': (60 + $(this).index() * $(this).width()) + 'px'}, 500)
                    $('.form-info .horse-box').each(function(){
                        $(this).hide();
                        if($(this).index() === bigIndex){
                            $(this).show();
                        }
                    });
                })
            }
        })
    }
}

exports.supplierObj = supplierObj;