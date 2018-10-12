<template>
    <div id="app">
        <div style="width:100%;min-width:1200px;background:#000;">
            <hb-head headfont="图片"></hb-head>
        </div>
        <div class="main-wapper">
            <div class="main-content">
                <div class="session1">
                    <img src="../../../assets/images/index/world.jpg" alt="" class="bg">
                    <div class="title">中国造，惠全球</div>
                </div>
            </div>
            <div class="session2">
                <ul>
                    <li>
                        <div class="img-box">
                            <img src="../../../assets/images/index/icon_time.png" alt="" class="icon_time">
                        </div>
                        <div class="txt-box"><strong>2018</strong><span>年</span></div>
                        <p>公司成立时间</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="../../../assets/images/index/icon_money.png" alt="" class="icon_money">
                        </div>
                        <div class="txt-box"><strong>100</strong><span>亿</span></div>
                        <p>年营业额</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="../../../assets/images/index/icon_area.png" alt="" class="icon_area">
                        </div>
                        <div class="txt-box"><strong>10</strong><em>+</em></div>
                        <p>业务覆盖区域</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="../../../assets/images/index/icon_type.png" alt="" class="icon_type">
                        </div>
                        <div class="txt-box"><strong>30</strong><em>+</em></div>
                        <p>商品品类</p>
                    </li>
                    <li>
                        <div class="img-box">
                            <img src="../../../assets/images/index/icon_goods.png" alt="" class="icon_goods">
                        </div>
                        <div class="txt-box"><strong>20</strong><em>+</em></div>
                        <p>商城商品数</p>
                    </li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="session4">
                <div class="s4-bg-box">
                    <div class="color-bg"></div>
                    <img src="../../../assets/images/about/about_bg.jpg" alt="" class="s4-bg">
                </div>
                <div class="session4-inner">
                    <h1>公司简介</h1>
                    <div class="white-bar"></div>
                    <div class="content-p">
                        Global电子商务有限公司（简称Global）是一家专注于跨境贸易B2C电子商务公司。
                        公司成立于2015年初，分别在广州、重庆、成都、青岛、香港、深圳、马来西亚等地设有公司和办公场所，现拥有一支数百人的精英团队。Global早期主营互联网行业海外流量服务及流量变现，2018年初开始主力运营综合类商城网站，以客户需求为导向，以诚信之道为根本，以优质服务为使命，以物惠全球为愿景，为全球用户提供多元化的互动式购物体验，全方位打造B2C跨境电子商务综合体。
                    </div>
                    <h1>发展历程</h1>
                    <div class="white-bar"></div>
                    <div class="develop-box">
                        <div class="develop-item">
                            <div class="develop-left">
                                <div>2018.09</div>
                                <p>开放<strong>中东市场</strong></p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-right">
                                <div>2018.08</div>
                                <p><strong>商城购物APP</strong>正式上线</p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-left">
                                <div>2018.07</div>
                                <p><strong>独立商城平台</strong>上线</p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-right">
                                <div>2018.06</div>
                                <p>成立<strong>马来西亚海外仓</strong>分公司</p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-left">
                                <div>2018.04</div>
                                <p>和多家物流公司达成<strong>战略合作</strong></p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-right">
                                <div>2018.03</div>
                                <p>开拓<strong>台湾、新马泰</strong>等<strong>泛东南亚市场</strong></p>
                            </div>
                        </div>
                        <div class="develop-item">
                            <div class="develop-left">
                                <div>2018.01</div>
                                <p><strong>重庆格洛博</strong>公司成立</p>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="gradient-box">
                            <img src="../../../assets/images/about/gradient_line.png" alt="" class="gradient_img">
                        </div>
                    </div>
                    <h1>合作伙伴</h1>
                    <div class="white-bar"></div>
                    <ul class="item-list">
                        <li>
                            <div class="img-box">
                                <img src="../../../assets/images/index/icon_facebook.png" alt="" class="lazyload">
                            </div>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="../../../assets/images/index/icon_ins.png" alt="" class="lazyload">
                            </div>
                            <p>Instgram</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="../../../assets/images/index/icon_youtube.png" alt="" class="lazyload">
                            </div>
                            <p>Youtube</p>
                        </li>
                        <li>
                            <div class="img-box">
                                <img src="../../../assets/images/index/icon_google.png" alt="" class="lazyload">
                            </div>
                            <p>Google</p>
                        </li>
                    </ul>
                    <div class="foot-version">Copyright ©Global, All Rights Reserved. </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    import HbHead from '../../../components/HbHead';
    import { Cell,Group,Divider } from 'vux'

    export default {
        data() {
            return {
                webname:5464,
                'list':[{
                    'id':0,
                    'name':'alert弹窗',
                    'url':'../vuxDemo/alert.html'
                },{
                    'id':1,
                    'name':'Calendar时间选择',
                    'url':'../vuxDemo/calendar.html'
                },{
                    'id':2,
                    'name':'button按钮',
                    'url':'../vuxDemo/button.html'
                }]
            }
        },
        components: {
            Cell,Group,Divider,HbHead
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
    .main-wapper{
        width:100%;
        min-width: 1200px;
        overflow-x:hidden;
        background:#002035;
        .main-content{
            width:1200px;
            margin:0px auto;
            .session1{
                position:relative;;
                width:100%;
                height:648px;
                .bg{
                    width:1920px;
                    height:648px;
                    position:absolute;
                    left:50%;
                    margin-left:-960px;
                }

                .title{
                    position:relative;
                    z-index: 2;
                    font-size:70px;
                    line-height:70px;
                    color:#fff;
                    text-align:center;
                    font-weight: 400;
                }
            }
        }
        .session2{
            min-width:980px;
            padding:80px;
            margin:0px auto;
            ul{
                li{
                    float:left;
                    width:20%;
                    height:auto;
                    text-align:center;

                    .img-box{
                        height:70px;
                        line-height:70px;
                        text-align:center;
                        img{
                            display:inline-block;
                            width:auto;
                            height:auto;
                        }
                    }

                    .txt-box{
                        margin-top:30px;
                        height:50px;
                        line-height:50px;
                        color:#fff;
                        text-align:center;
                        strong{
                            font-size:50px;
                            font-weight: 400;
                        }
                        span{
                            font-size:22px;
                            font-weight: 400;
                        }
                        em{
                            font-size:40px;
                            font-weight:400;
                            font-style: normal;
                        }
                    }

                    p{
                        margin-top:10px;
                        text-align:center;
                        color:#fff;
                        font-size:14px;
                    }
                }
            }
        }
        .session3{
            position:relative;;
            width:100%;
            height:1304px;
            min-width:1200px;
            margin:0px auto;
            .bg{
                width:1920px;
                height:1304px;
                position:absolute;
                left:50%;
                margin-left:-960px;
            }

            .session3-inner{
                position:relative;
                z-index:2;
                padding-top:90px;
                height:1210px;

                h1{
                    font-size:50px;
                    line-height:50px;
                    color:#fff;
                    text-align:center;
                    font-weight:400;
                    letter-spacing: 5px;
                }

                .white-bar{
                    margin:18px auto 0px auto;
                    width:60px;
                    height:6px;
                    background-color: #fff;
                }

                .content-p{
                    font-size:27px;
                    line-height:41px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight:200;
                    color:#fff;
                    margin-top:40px;
                    margin-bottom:110px;
                    text-indent: 140px;
                    padding:0px 80px;
                }

                .item-list{
                    width:1200px;
                    margin:100px auto 0px auto;
                    li{
                        width:25%;
                        text-align:center;
                        float:left;
                        margin-bottom:70px;

                        .img-box{
                            height:100px;
                            text-align:center;
                            img{
                                display:inline-block;
                                width:auto;
                                height:auto;
                            }
                        }

                        p{
                            font-size:22px;
                            line-height:22px;
                            color:#fff;
                            padding-top:18px;
                            text-align: center;
                        }
                    }
                }

                .foot-version{
                    position:absolute;
                    width:100%;
                    font-size:20px;
                    line-height:20px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight: 200;
                    bottom:55px;
                    color:#fff;
                }

            }
        }
        .session4{
            position:relative;;
            width:100%;
            min-width:1200px;
            margin:0px auto;
            height:auto;

            .s4-bg-box{
                position:absolute;
                width:1920px;
                height:2708px;
                background:#00355d;
                left:50%;
                margin-left:-960px;
                top:0px;
                .color-bg{
                    width:1920px;
                    height:1600px;
                    background:#00355d;
                }
                .s4-bg{
                    width:1920px;
                    height:1108px;
                    vertical-align: top;
                }
            }

            .session4-inner{
                position:relative;
                z-index:2;
                padding-top:90px;
                height:2618px;

                h1{
                    font-size:50px;
                    line-height:50px;
                    color:#fff;
                    text-align:center;
                    font-weight:400;
                    letter-spacing: 5px;
                }

                .white-bar{
                    margin:18px auto 0px auto;
                    width:60px;
                    height:6px;
                    background-color: #fff;
                }

                .content-p{
                    padding:0px 80px;
                    font-size:27px;
                    line-height:41px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight:200;
                    color:#fff;
                    margin-top:40px;
                    margin-bottom:110px;
                    text-indent: 140px;
                }

                .item-list{
                    width:1200px;
                    margin:100px auto 0px auto;
                    li{
                        width:25%;
                        text-align:center;
                        float:left;
                        margin-bottom:70px;

                        .img-box{
                            height:100px;
                            text-align:center;
                            img{
                                display:inline-block;
                                width:auto;
                                height:auto;
                            }
                        }

                        p{
                            font-size:22px;
                            line-height:22px;
                            color:#fff;
                            padding-top:18px;
                            text-align: center;
                        }
                    }
                }

                .develop-box{
                    width:624px;
                    height: auto;
                    padding:128px 0px;
                    position:relative;
                    margin:0px auto;

                    .develop-item{
                        width:624px;
                        .develop-left{
                            width:325px;
                            float:left;
                            div{
                                background:url(../../../assets/images/about/big_ball.png) no-repeat right center;
                                text-align:right;
                                font-size:46px;
                                line-height:46px;
                                color:#0074c2;
                                padding-right:40px;
                                font-weight: bolder;
                            }
                            p{
                                position:relative;
                                text-align:right;
                                padding-right:35px;
                                border-right:3px solid #fff;
                                right:12px;
                                font-size:20px;
                                line-height:35px;
                                font-weight: 100;
                                color:#fff;
                                letter-spacing: 2px;
                                strong{
                                    font-size:28px;
                                    font-weight: 400;
                                }
                            }
                        }

                        .develop-right{
                            width:323px;
                            float:right;
                            div{
                                background:url(../../../assets/images/about/small_ball.png) no-repeat left center;
                                text-align:left;
                                font-size:46px;
                                line-height:46px;
                                color:#0074c2;
                                padding-left:40px;
                                font-weight: bolder;
                            }
                            p{
                                position:relative;
                                text-align:left;
                                padding-left:35px;
                                border-left:3px solid #fff;
                                left:10px;
                                font-size:20px;
                                line-height:35px;
                                font-weight: 100;
                                color:#fff;
                                letter-spacing: 2px;
                                strong{
                                    font-size:28px;
                                    font-weight: 400;
                                }
                            }
                        }
                    }
                    .gradient-box{
                        clear:both;
                        position:relative;;
                        width:3px;
                        height:130px;
                        margin:0px auto;
                        .gradient_img{
                            position:absolute;
                            width:3px;
                            height:130px;
                            left:50%;
                            margin-left:-2px;
                            top:0px;
                        }
                    }
                }

                .foot-version{
                    position:absolute;
                    width:100%;
                    font-size:20px;
                    line-height:20px;
                    text-align:center;
                    font-family: sans-serif;
                    font-weight: 200;
                    bottom:60px;
                    color:#fff;
                }
            }
        }
    }
</style>
