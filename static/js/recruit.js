/**
 * Created by Administrator on 2017/3/22.
 */
var recruitObj = {
    init: function () {
        require(['./jquery', './common', './lazysizes.min'], function ($, commonJS) {
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(3);
            initUI();
            initSocailBox();
            initSchoolBox();
            initPersonelBox();

            function initUI() {
                $('#recruit-nav>li').on('click', function () {
                    $('#recruit-nav>li').each(function () {
                        $(this).removeClass('current');
                    });

                    $(this).addClass('current');
                    $('#recruit-point').stop().animate({'left': (185 + $(this).index() * $(this).width()) + 'px'}, 500)
                })
            }


            function initSocailBox(){
                $('#socail-nav>li').on('click', function () {
                    $('#socail-nav>li').each(function () {
                        $(this).removeClass('current');
                    });

                    $(this).addClass('current');
                    $('#social-nav-bar').stop().animate({'left': (60 + $(this).index() * $(this).width()) + 'px'}, 500)
                })
            }

            function initSchoolBox(){

            }

            function initPersonelBox(){

            }


        })
    }
}

exports.recruitObj = recruitObj;