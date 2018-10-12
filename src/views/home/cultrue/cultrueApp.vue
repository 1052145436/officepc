<template>
    <div id="app">
        <!--<div style="width:100%;min-width:1200px;background:#000;">-->
            <!--<hb-head headfont="图片"></hb-head>-->
        <!--</div>-->
        <div class="cultrue-wapper">
            <div class="cultrue-inner">
                <img src="../../../assets/images/cultrue/img1.jpg" alt="" class="intro_bg1">
                <hb-head headfont="图片"></hb-head>
                <div class="txt-info">
                    <h1>企业文化</h1>
                    <p>专业·凝聚·简单·高效</p>
                </div>
            </div>
            <div class="cultrue-s2">
                <div class="cultrue-s2-inner">
                    <h1>团队理念</h1>
                    <p>活力，协作，创新</p>
                </div>
            </div>
            <div class="cultrue-s3">
                <div class="cultrue-s3-inner">
                    <img src="../../../assets/images/cultrue/img2.jpg" alt="" class="s3_bg">
                    <ul>
                        <li>
                            <img src="../../../assets/images/cultrue/img3.jpg" alt="">
                            <p>活力</p>
                        </li>
                        <li>
                            <img src="../../../assets/images/cultrue/img4.jpg" alt="">
                            <p>协作</p>
                        </li>
                        <li>
                            <img src="../../../assets/images/cultrue/img5.jpg" alt="">
                            <p>创新</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cultrue-s2">
                <div class="cultrue-s2-inner">
                    <h1>团队风采</h1>
                    <p>加入一个年轻的团队，碰撞思想的火花；<br/>走进一个广阔的世界，开启筑梦的旅途。</p>
                </div>
            </div>
            <div class="cultrue-s4">
                <div class="cultrue-s4-inner">
                    <div class="img-box">
                        <img src="../../../assets/images/cultrue/img6.jpg" alt="" class="img6">
                        <img src="../../../assets/images/cultrue/img7.jpg" alt="" class="img7">
                        <img src="../../../assets/images/cultrue/img8.jpg" alt="" class="img8">
                        <img src="../../../assets/images/cultrue/img9.jpg" alt="" class="img9">
                        <img src="../../../assets/images/cultrue/img10.jpg" alt="" class="img10">
                        <img src="../../../assets/images/cultrue/img11.jpg" alt="" class="img11">
                        <img src="../../../assets/images/cultrue/img12.jpg" alt="" class="img12">
                        <img src="../../../assets/images/cultrue/img13.jpg" alt="" class="img13">
                    </div>
                </div>
            </div>
            <div style="width:100%;min-width:1200px;background:#000;">
                <introVersion></introVersion>
            </div>
        </div>
    </div>
</template>

<script>

    import HbHead from '../../../components/HbHead';
    import introVersion from '../../../components/introVersion';
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
            Cell,Group,Divider,HbHead,introVersion
        },
        //实例初始化最之前，无法获取到data里的数据
        beforeCreate(){


        },
        //在挂载开始之前被调用
        beforeMount(){


        },
        //已成功挂载，相当ready()
        mounted(){
            this.initUI();
        },
        //相关操作事件
        methods: {
            initUI(){
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.404, 39.915);
                map.centerAndZoom(point, 15);
                var json_data = [[113.261987,23.148914,'中国·广州'],[106.549274,29.576683,'中国·重庆'],[100.45057,13.63131,'泰国·曼谷'],[101.770576,3.180772,'马来西亚·吉隆坡']];
                var pointArray = new Array();
                var opts = {
                    width : 250,     // 信息窗口宽度
                    height: 80,     // 信息窗口高度
                    title : "" , // 信息窗口标题
                    enableMessage:true//设置允许信息窗发送短息
                };
                for(var i=0;i<json_data.length;i++){
                    var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
                    map.addOverlay(marker);    //增加点
                    pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
                    var content = json_data[i][2];
                    addClickHandler(content,marker);
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                }        //让所有点在视野范围内
                map.setViewport(pointArray);
                function addClickHandler(content,marker){
                    marker.addEventListener("click",function(e){
                        openInfo(content,e)}		);
                }
                function openInfo(content,e){
                    var p = e.target;
                    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                }       	//移动到某一坐标点
                function to(x,y){
                    map.panTo(new BMap.Point(x,y));
                }

                map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

                var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
                var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件

                //添加控件和比例尺
                function add_control(){
                    map.addControl(top_left_control);
                    map.addControl(top_left_navigation);

                };
                add_control();
            }
        }
    }
</script>

<style lang="less">
    .cultrue-wapper{
        width:100%;
        min-width: 1200px;
        overflow-x:hidden;

        .cultrue-inner{
            position:relative;
            width:1200px;
            height:948px;
            margin:0px auto;

            .intro_bg1{
                position:absolute;
                width:1920px;
                height:948px;
                top:0px;
                left:50%;
                margin-left:-960px;
            }

            .txt-info{
                position:relative;
                z-index: 2;

                h1{
                    padding-top:180px;
                    padding-bottom:150px;
                    font-size:77px;
                    line-height:77px;
                    color:#fff;
                    font-weight: 500;
                    letter-spacing: 5px;
                }
                p{
                    color:#fff;
                    font-weight: 200;
                    letter-spacing: 2px;
                    font-size:36px;
                    line-height:68px;
                }
            }

        }

        .cultrue-s2{
            background:#fff;

            .cultrue-s2-inner{
                width:1200px;
                margin:0px auto;
                padding:118px 0px 100px 0px;
                background:#fff;

                h1{
                    font-size:50px;
                    line-height:50px;
                    text-align: center;
                    color:#0074c2;
                    font-weight:400;
                }

                p{
                    margin-top:45px;
                    font-size:36px;
                    line-height:62px;
                    text-align:center;
                    color:#525257;
                    font-family: sans-serif;
                    font-weight:200;
                }
            }
        }
        .cultrue-s3{
            .cultrue-s3-inner{
                position:relative;
                width:1200px;
                height:462px;
                margin:0px auto;

                .s3_bg{
                    width:1920px;
                    height:462px;
                    position:absolute;
                    left:50%;
                    margin-left:-960px;
                    top:0;
                }

                ul{
                    width:1320px;
                    height:462px;
                    margin:0px auto;
                    li{
                        width:440px;
                        height:462px;
                        float:left;
                        overflow:hidden;
                        position:relative;

                        img{
                            width:100%;
                            height:100%;
                            position:absolute;
                            left:0;
                            top:0;
                        }

                        p{
                            position:absolute;
                            bottom:0;
                            left:0;
                            width:100%;
                            height:74px;
                            line-height:74px;
                            font-size:50px;
                            text-align:center;
                            color:#fff;
                            letter-spacing: 10px;
                            font-weight:200;
                            background:url("../../../assets/images/cultrue/blue_alpha.png") repeat;
                        }
                    }
                }
            }
        }
        .cultrue-s4{
            background:#fff;
            margin-bottom:146px;
            .cultrue-s4-inner{
                width:1200px;
                height:509px;
                margin:0px auto;
                position:relative;

                .img-box{
                    position:absolute;
                    width:1320px;
                    height:509px;
                    left:50%;
                    top:50%;
                    margin-left:-665px;
                    margin-top:-255px;

                    img{
                        position:absolute;
                    }

                    .img6{
                        width:349px;
                        height:348px;
                        left:0;
                        top:0;
                    }
                    .img7{
                        width:323px;
                        height:185px;
                        left:349px;
                        top:0;
                    }
                    .img8{
                        width:162px;
                        height:186px;
                        left:672px;
                        top:0;
                    }
                    .img9{
                        width:322px;
                        height:324px;
                        left:834px;
                        top:0;
                    }
                    .img10{
                        width:164px;
                        height:510px;
                        left:1156px;
                        top:0;
                    }
                    .img11{
                        width:349px;
                        height:162px;
                        left:0px;
                        top:347px;
                    }
                    .img12{
                        width:486px;
                        height:324px;
                        left:348px;
                        top:185px;
                    }
                    .img13{
                        width:322px;
                        height:186px;
                        left:834px;
                        top:323px;
                    }
                }
            }
        }
        .cultrue-s6{
            width:100%;
            background-color: #4c4c4c;

            .cultrue-s6-inner{
                width:1200px;
                margin:0px auto;
                padding-top:26px;

                .align-left{
                    width:800px;
                    float:left;
                    li{
                        float:left;
                        width:138px;
                        padding:24px;
                        a{
                            display:block;
                            color:#fff;
                            font-size:19px;
                            line-height:38px;

                            em{
                                font-size:25px;
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
                        width:138px;
                        padding:24px;

                        p{
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
                    width:96%;
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
    }
</style>
