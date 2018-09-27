/**
 * Created by Administrator on 2016/1/15.
 */
var $ = require('./jquery');

var commonObj = {
    init: function () {
        $('#languageDiv').click(function () {
            $('#languageDiv-tip').show();
        }).mouseleave(function () {
            $('#languageDiv-tip').hide();
        })

        $('#languageDiv-tip li').click(function (event) {
            $('#language-used').html(event.currentTarget.innerHTML);
        })
    },
    defaultChooseNav:function(index){
        $('#common-nav>a').each(function(){
            $(this).removeClass('current');
            if($(this).index() == index){
                $(this).addClass('current');
                $(this).removeAttr('href');
            }
        })
    },
    initLazyload: function () {
        if (!(/msie [6|7|8]/i.test(navigator.userAgent)) == false) {
            $('img').each(function () {
                $(this).attr('src', $(this).attr('data-src'));
            });
        }
    },
    initWOW: function () {
        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
            var wow = new WOW({
                animateClass: 'animated',
                offset: 100,
                callback: function (box) {

                }
            });

            wow.init();
        }
        ;
    }
}

exports.commonObj = commonObj;