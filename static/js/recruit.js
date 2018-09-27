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
                    $('#recruit-point').stop().animate({'left': (185 + $(this).index() * $(this).width()) + 'px'}, 500);

                    $('.job-big-box').stop().slideUp();
                    var largeIndex = $(this).index();

                    if(largeIndex != 2){
                        $('#job-social-box').show();

                        if(largeIndex == 1){
                            $('#progress-div').show();
                        }else{
                            $('#progress-div').hide();
                        }
                    }else{
                        $('#job-social-box').hide();
                    }
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

                $('.social-job-item').click(function(){
                    if($(this).find('.job-request').is(':hidden') == true){
                        $(this).find('.job-request').stop().slideDown();
                    }else{
                        $(this).find('.job-request').stop().slideUp();
                    }
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