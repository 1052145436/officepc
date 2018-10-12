<template>
    <div class="intro-s6" style="clear:both;">
        <div class="intro-s6-inner">
            <ul class="align-left">
                <li>
                    <a href="javascript:"><em>关于我们</em></a>
                    <a href="javascript:">公司简介</a>
                    <a href="javascript:">业务介绍</a>
                    <a href="javascript:">发展历程</a>
                    <a href="javascript:">企业文化</a>
                </li>
                <li>
                    <a href="javascript:"><em>人才招聘</em></a>
                    <a href="javascript:">校园招聘</a>
                    <a href="javascript:">人才引荐</a>
                </li>
                <li>
                    <a href="javascript:"><em>供应商入驻</em></a>
                    <a href="javascript:">供应商申请</a>
                    <a href="javascript:">咨询我们</a>
                </li>
                <li>
                    <a href="javascript:"><em>联系我们</em></a>
                    <a href="javascript:">总部地址</a>
                    <a href="javascript:">人事招聘</a>
                    <a href="javascript:">商务合作</a>
                </li>
            </ul>
            <ul class="align-right">
                <li>
                    <img src="../assets/images/introduce/fanmart.jpg" alt="">
                    <p>FANMART应用</p>
                </li>
                <li>
                    <img src="../assets/images/introduce/global.jpg" alt="">
                    <p>GLOBAL官网</p>
                </li>
            </ul>
            <div class="version">Copyright ©Global, All Rights Reserved. </div>
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
