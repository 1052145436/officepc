/**
 * Created by Administrator on 2016/3/23.
 */
var $ = require('./jquery');

var configObj = {
    OFFICE_VERSION: 1,//正式线上的版本
    QA_VERSION: 2,//QA服的版本
    TEST_VERSION:3,//TEST服的版本,以后扩展预留


    office_config:{//正式服的配置
        appKey: '5683a82e80e91d5a67953b324005edf5a7',
        appId:'1601290001',
        activityApiHttps:'https://activityapi.15166.com',
        passportApiHttps:'https://passportapi.15166.com',
        wwwApiHttps:'https://wwwapi.15166.com'
    },

    qa_config:{//qa服的配置
        appKey:'f46806d675f16feae23b5c07d4a3c935',
        appId:'1105260001',
        activityApiHttps:'https://activityapi-qa.15166.com',
        passportApiHttps:'https://passportapi-qa.15166.com',
        wwwApiHttps:'https://wwwapi-qa.15166.com'
    }
}


/**
 * USER_VERSION发布出去的版本
 * 当USE_VERSION =  configObj.OFFICE_VERSION表示把版本发布到正式线上，自动使用正式服的接口
 * 当USE_VERSION =  configObj.QA_VERSION表示把版本发布到QA服上，自动使用QA的接口
 * @type {number}
 */
var USE_VERSION =  configObj.QA_VERSION;//默认使用的是正式线上服的环境,以后协议只需要改这一个来进行服务器环境切换



var commonObj = {
    getActivityApiHtts:function(){
        var httpsStr = '';
        switch (USE_VERSION) {
            case configObj.OFFICE_VERSION:
                httpsStr = configObj.office_config.activityApiHttps;
                break;
            case configObj.QA_VERSION:
                httpsStr = configObj.qa_config.activityApiHttps;
                break;
            default:
                break;
        }
        return httpsStr;
    },
    getPassPortApiHtts:function(){
        var httpsStr = '';
        switch (USE_VERSION) {
            case configObj.OFFICE_VERSION:
                httpsStr = configObj.office_config.passportApiHttps;
                break;
            case configObj.QA_VERSION:
                httpsStr = configObj.qa_config.passportApiHttps;
                break;
            default:
                break;
        }
        return httpsStr;
    },
    getWWWApiHtts:function(){
        var httpsStr = '';
        switch (USE_VERSION) {
            case configObj.OFFICE_VERSION:
                httpsStr = configObj.office_config.wwwApiHttps;
                break;
            case configObj.QA_VERSION:
                httpsStr = configObj.qa_config.wwwApiHttps;
                break;
            default:
                break;
        }
        return httpsStr;
    },
    getAppKeyByServerNum: function () {
        var appKeyStr = '';
        switch (USE_VERSION) {
            case configObj.OFFICE_VERSION:
                appKeyStr = configObj.office_config.appKey;
                break;
            case configObj.QA_VERSION:
                appKeyStr = configObj.qa_config.appKey;
                break;
            default:
                break;
        }

        return appKeyStr;
    },
    getAppIdByServerNum: function () {
        var appIdStr = '';

        switch (USE_VERSION) {
            case configObj.OFFICE_VERSION:
                appIdStr = configObj.office_config.appId;
                break;
            case configObj.QA_VERSION:
                appIdStr = configObj.qa_config.appId;
                break;
            default:
                break;
        }

        return appIdStr;
    }
}

var proxyObj = {
    appKey: commonObj.getAppKeyByServerNum(),
    appId: commonObj.getAppIdByServerNum(),
    /**common image captcha interface*/
    reqCommonCaptchaImgAjax: function (params) {
        //var imgUrl = "https://passportapi.15166.com/captcha-new?action="+params.action+"&appId=" + params.appId + "&username=" + params.username + "&from=" + params.from + "&type=" + params.type + "&signature=" + params.signature;
        var imgUrl = commonObj.getPassPortApiHtts()+"/captcha-new?action="+params.action+"&appId=" + params.appId + "&username=" + params.username + "&from=" + params.from + "&type=" + params.type + "&signature=" + params.signature;
        return imgUrl;
    },
    /**Common req banner images list*/
    reqCommonBannerImagesAjax: function (params) {
        $.ajax({
            //url: 'https://wwwapi.15166.com/banner/default',
            url: commonObj.getWWWApiHtts()+'/banner/default',
            data: {
                action: params.action,
                website: params.website,
                scene: params.scene,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (typeof(params.success) == "function") {
                    params.success.apply(this, [res]);
                }
            }
        });
    },
    /** common visitor login interface no.3*/
    reqCommonVisitorLoginAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/login-new',
            url:commonObj.getPassPortApiHtts()+'/login-new',
            data:{
                //action:'visitorLogin',
                action:params.action,
                appId:params.appId,
                guid:params.guid,
                channel:params.channel,
                signature:params.signature,
                subChannel:params.subChannel,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common regist inerface no.4*/
    reqCommonRegistAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/register-new',
            url:commonObj.getPassPortApiHtts() + '/register-new',
            data:{
                //action:'generalRegister',
                action:params.action,
                appId:params.appId,
                username:params.username,
                password:params.password,
                channel:params.channel,
                signature:params.signature,
                captcha:params.captcha,
                subChannel:params.subChannel,
                rePassword:params.rePassword,
                forward:params.forward,
                cardno:params.cardno,
                realname:params.realname,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common login interface no.5*/
    reqCommonLoginAjax: function (params) {
        $.ajax({
            //url: "https://passportapi.15166.com/login-new",
            url: commonObj.getPassPortApiHtts() + "/login-new",
            data: {
                //action: "generalLogin",
                action:params.action,
                appId: params.appId,
                username: params.username,
                password: params.password,
                channel: params.channel,
                signature: params.signature,
                captcha: params.captcha,
                forward: params.forward,
                subChannel: params.subChannel,
                imageUsername: params.imageUsername,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common phone or mail captcha interface no.6*/
    reqPhoneOrMailCapchaAjax: function (params) {
        $.ajax({
            //url: 'https://passportapi.15166.com/captcha-new',
            url: commonObj.getPassPortApiHtts() + '/captcha-new',
            data: {
                //action: 'general',
                action:params.action,
                appId: params.appId,
                username: params.username,
                from: params.from,
                type: params.type,
                uid:params.uid,
                signature: params.signature,
                accessToken: params.accessToken,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    reqPrevPhoneOrMailCapchaAjax: function (params) {
    $.ajax({
        //url: 'https://passportapi.15166.com/captcha-new',
        url: commonObj.getPassPortApiHtts() + '/captcha-new',
        data: {
            action:params.action,
            appId: params.appId,
            username: params.username,
            from: params.from,
            type: params.type,
            captcha:params.captcha,
            signature: params.signature,
            accessToken: params.accessToken,
            dataFormat: 'jsonp'
        },
        dataType: 'jsonp',
        success: function (res) {
            if (res.result == 1 && res.code == 1) {
                if (typeof(params.success) == "function") {
                    params.success.apply(this, [res]);
                }
            } else {
                if (typeof(params.error) == "function") {
                    params.error.apply(this, [res]);
                }
            }
        }
    })
},
    /**common phone or mail captcha interface no.6*/
    reqOldPhoneOrOldMailCapchaAjax: function (params) {
        $.ajax({
            //url: 'https://passportapi.15166.com/captcha-new',
            url: commonObj.getPassPortApiHtts() + '/captcha-new',
            data: {
                action: params.action,
                appId: params.appId,
                type: params.type,
                signature: params.signature,
                username: params.username,
                accessToken: params.accessToken,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common check phone or mail captcha true or false interface no.7*/
    reqCheckPhoneOrMailCapchaAjax: function (params) {
        $.ajax({
            //url: 'https://passportapi.15166.com/captcha-new',
            url: commonObj.getPassPortApiHtts() + '/captcha-new',
            data: {
                //action: 'validate',
                action:params.action,
                appId: params.appId,
                username: params.username,
                from: params.from,
                type: params.type,
                captcha: params.captcha,
                uid:params.uid,
                signature: params.signature,
                accessToken: params.accessToken,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    reqCheckOldPhoneOrOldMailCapchaAjax: function (params) {
        $.ajax({
            //url: 'https://passportapi.15166.com/captcha-new',
            url: commonObj.getPassPortApiHtts() + '/captcha-new',
            data: {
                action: params.action,
                appId: params.appId,
                username: params.username,
                from: params.from,
                type: params.type,
                captcha: params.captcha,
                uid:params.uid,
                signature: params.signature,
                accessToken: params.accessToken,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common check phone or mail has binded or not no.8 */
    reqCheckPhoneOrMailBindOrNotAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/member-new',
            url:commonObj.getPassPortApiHtts() + '/member-new',
            data:{
                //action:'isBind',
                action:params.action,
                appId:params.appId,
                username:params.username,
                from:params.from,
                signature:params.signature,
                bindUsername:params.bindUsername,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common bind phone or mail no.9*/
    reqBindPhoneOrMailAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/member-new',
            url:commonObj.getPassPortApiHtts() + '/member-new',
            data:{
                //action:'bind',
                action:params.action,
                appId:params.appId,
                username:params.username,
                from:params.from,
                captcha:params.captcha,
                accessToken:params.accessToken,
                signature:params.signature,
                uid:params.uid,
                phone:params.phone,
                email:params.email,
                account:params.account,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common modify password no.10*/
    reqCommonModifyPwdAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/member-new',
            url:commonObj.getPassPortApiHtts() + '/member-new',
            data:{
                //action:'modifyPwd',
                action:params.action,
                appId:params.appId,
                username:params.username,
                from:params.from,
                oldPwd:params.oldPwd,
                newPwd:params.newPwd,
                accessToken:params.accessToken,
                signature:params.signature,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /**common find password no.11*/
    reqCommonFindPwdAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/member-new',
            url:commonObj.getPassPortApiHtts() + '/member-new',

            data:{
                action:params.action,
                appId:params.appId,
                username:params.username,
                type:params.type,
                captcha:params.captcha,
                newPwd:params.newPwd,
                signature:params.signature,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })

    },
    /**common regist or not no.12*/
    reqCommonRegistOrNotAjax:function(params){
        $.ajax({
            //url:'https://passportapi.15166.com/register-new',
            url:commonObj.getPassPortApiHtts() + '/register-new',
            data:{
                //action:'isRegister',
                action:params.action,
                username:params.username,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (res.result == 1 && res.code == 1) {
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                } else {
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    /***common req for news by news_id*/
    reqCommonNewsByNewsIdAjax:function(params){
        $.ajax({
            //url: 'https://wwwapi.15166.com/www/article',
            url: commonObj.getWWWApiHtts() + '/www/article',
            data:{
                //req: "multi_simple",
                req:params.req,
                aType: params.aType,
                limit: params.limit,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if (typeof(params.success) == "function") {
                    params.success.apply(this, [res]);
                }
            }
        })
    },
    /**common req phone number order by androd or ios*/
    reqCommonPhoneNumberOrderByAndroidOrIOSAjax:function(params){
        $.ajax({
            //url: 'https://passportapi.15166.com/activity/telephone-order',
            url: commonObj.getPassPortApiHtts() + '/activity/telephone-order',
            data:{
                phone:params.phone,
                device:params.device,
                game_name:params.game_name,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if(res.result == 1){
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                }else{
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    reqUserAcountBindInfoAjax:function(params){
        $.ajax({
            //url: 'https://passportapi.15166.com/member-new',
            url: commonObj.getPassPortApiHtts() + '/member-new',
            data:{
                action:params.action,
                username:params.username,
                appId:params.appId,
                from:params.from,
                signature:params.signature,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if(res.result == 1){
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                }else{
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    },
    reqRealNameIdentifyAjax:function(params){
        $.ajax({
            //url: 'https://passportapi.15166.com/member-new',
            url: commonObj.getPassPortApiHtts() + '/member-new',
            data:{
                action:params.action,
                appId:params.appId,
                username:params.username,
                from:params.from,
                signature:params.signature,
                accessToken:params.accessToken,
                cardno:params.cardno,
                realname:params.realname,
                dataFormat: 'jsonp'
            },
            dataType: 'jsonp',
            success: function (res) {
                if(res.result == 1){
                    if (typeof(params.success) == "function") {
                        params.success.apply(this, [res]);
                    }
                }else{
                    if (typeof(params.error) == "function") {
                        params.error.apply(this, [res]);
                    }
                }
            }
        })
    }
}

exports.proxyObj = proxyObj;