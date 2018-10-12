<template>
    <div class="com-foot">
        <div class="c-l">
            <a class="c-logo" href="/" target="_blank">
                <!--<img src="../assets/images/common/footerLogo.png" width="146" height="46" alt="尧祺官方网站"/>-->
            </a>
            <div class="c-i">
                <p class="c-mt">
                    <a href="../">尧祺首页</a>
                    <span>|</span>
                    <a href="../gm/" target="_blank">客服中心</a>
                    <span>|</span>
                    <a href="../passport/" class="accCenterBtn" target="_blank">帐号中心</a>
                    <span>|</span>
                    <a href="../news/contentProxy.html" target="_blank">服务条款</a>
                    <span>|</span>
                    <a href="../contact/" target="_blank">联系我们</a>
                    <span>|</span>
                    <a href="../contact/" target="_blank">商务合作</a>
                    <span>|</span>
                    <a href="../hr/" target="_blank">加入我们</a>
                </p>
                <p>广州尧祺信息科技有限公司版权所有　<a href='http://www.miitbeian.gov.cn/' target="_blank" rel="nofollow">粤ICP备15107722号</a>　粤B2-20160332</p>
                <p><em>《</em>网络文化经营许可证》<a href="../common/company.html" target="_blank">粤网文〔2015〕2275-507号</a>
                    <!--<script language="javascript" type="text/javascript" src="https://seal.wosign.com/tws.js"></script>&lt;!&ndash;ignore&ndash;&gt;-->
                </p>
            </div>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';

    import { XHeader } from 'vux'

    export default {
        data() {
            return {

            }
        },
        components: {
            XHeader
        },
        props: {
            headfont: {
                type: String,
                default: '导航'
            }
        },
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate(){


        },
        //在挂载开始之前被调用
        beforeMount(){


        },
        //已成功挂载，相当ready()
        mounted(){



        },
        //相关操作事件
        methods: {




        }
    }
</script>

<style lang="less">
    .common-head{
        width:100%;
        min-width:1200px;
        height:50px;
        //background:#000;
        padding:80px 0px 120px 0px;
        .common-inner{
            position:relative;
            width:1200px;
            height:70px;
            line-height:70px;
            margin:0px auto;
            text-align:right;
            .logo{
                display:inline-block;
                width:197px;
                height:auto;
                float:left;
            }

            .nav{
                text-align:right;
                padding-right:120px;
                a{
                    color:#fff;
                    font-size:18px;
                    line-height:18px;
                    padding:0px 20px;
                    letter-spacing: 1px;
                    font-weight:400;
                    cursor:pointer;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;

                    &:hover{
                        color:#007490;
                    }
                }

                .current{
                    color:#0074c2;
                }
            }

            .languageDiv{
                width:120px;
                height:20px;
                position:absolute;
                right:0px;
                top:0px;
                cursor:pointer;

                div{
                    span{
                        color:#fff;
                        font-size:18px;
                        line-height:18px;
                        letter-spacing: 1px;
                        font-weight:400;

                        &:hover{
                            color:#007490;
                        }
                    }
                }

                .tip{
                    position:absolute;
                    top:50px;
                    right:0px;
                    width:140px;
                    height:auto;
                    display:none;

                    ul{
                        li{
                            text-align:right;
                            color:#fff;
                            font-size:16px;
                            line-height:30px;
                            padding-right:15px;
                            cursor:pointer;

                            &:hover{
                                color:#007490;
                            }
                        }
                    }
                }
            }
        }
    }

    .clearfix:after{
        content: "020";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .clearfix {
        /* 触发 hasLayout */
        zoom: 1;
    }

    .intro-s6{
        width:100%;
        background-color: #4c4c4c;

        .intro-s6-inner{
            width:1200px;
            margin:0px auto;
            padding-top:26px;
            clear:both;

            .align-left{
                width:800px;
                float:left;
                li{
                    float:left;
                    width:162px;
                    padding:24px 0px;
                    a{
                        width:138px;
                        margin:0px auto;
                        display:block;
                        color:#fff;
                        font-size:16px;
                        line-height:38px;
                        font-weight:100;

                        em{
                            font-size:25px;
                            font-weight:400;
                        }

                        &:hover{
                            color:#0074c2;
                        }
                    }
                }
            }

            .align-right{
                width:400px;
                float:right;
                li{
                    float:right;
                    width:162px;

                    img{
                        display:block;
                        width:138px;
                        height:auto;
                        margin:0px auto;
                    }

                    p{
                        width:138px;
                        margin:0px auto;
                        color:#fff;
                        font-size:19px;
                        line-height:38px;
                        text-align:center;
                        font-weight: 100;
                    }
                }
            }

            .version{
                clear:both;
                width:98%;
                margin:0px auto;
                font-size:20px;
                line-height:20px;
                text-align:center;
                font-family: sans-serif;
                font-weight: 200;
                color:#fff;
                padding:20px 0px 53px 0px;
                border-top:1px solid #fff;
            }
        }
    }

</style>
