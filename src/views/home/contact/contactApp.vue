<template>
    <div id="app">
        <div style="width:100%;min-width:1200px;background:#000;">
            <hb-head headfont="图片"></hb-head>
        </div>
        <div class="contact-wapper">
            <div class="contact-s2">
                <div class="contact-s2-inner">
                    <h1>联系我们</h1>
                    <div class="ul-box">
                        <ul>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_man.png" alt="">人事招聘</h3>
                                <p>广州 HR</p>
                                <p>联系人：X先生</p>
                                <p>电话：134566578;</p>
                            </li>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_hand.png" alt="">商务合作</h3>
                                <p>广州 HR</p>
                                <p>联系人：X先生</p>
                                <p>电话：134566578;</p>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                    <h1>办公地址</h1>
                    <div class="ul-box">
                        <ul>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_point.png" alt="">中国·广州</h3>
                            </li>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_point.png" alt="">中国·重庆</h3>
                            </li>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_point.png" alt="">泰国·曼谷</h3>
                            </li>
                            <li>
                                <h3><img src="../../../assets/images/contact/icon_point.png" alt="">马来西亚·吉隆坡</h3>
                            </li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                    <!--<img src="../../../assets/images/contact/map.jpg" alt="" class="map-img lazyload">-->
                    <div class="contact_m_Right" style="margin-top:30px;">
                        <div class="contact_m_Right" style="margin-top:30px;">
                            <div id="allmap"></div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <!--<link rel="import" href="../module/introVersion.html?__inline">-->
            </div>

        </div>
        <div style="width:100%;min-width:1200px;background:#000;">
            <introVersion></introVersion>
        </div>
    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
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
    .contact-wapper{
        width:100%;
        min-width:1200px;
        .head-div{
            width:100%;
            height:160px;
            overflow:hidden;
            background-color: #4c4c4c;
        }

        .contact-s2{
            background-color: #fff;

            .contact-s2-inner{
                box-shadow: 0 0 20px #888;
                width:1200px;
                margin:100px auto;
                position:relative;

                h1{
                    text-align:center;
                    font-size:36px;
                    line-height:36px;
                    color:#0074c2;
                    clear:both;
                    padding-top:100px;
                    padding-bottom:86px;
                    letter-spacing: 2px;
                    font-weight:400;
                }

                .ul-box{
                    width:1200px;
                    margin:0px auto;
                    ul{
                        clear:both;
                        width:700px;
                        margin-left:300px;
                        li{
                            width:350px;
                            height:auto;
                            float:left;
                            h3{
                                font-size:28px;
                                line-height:45px;
                                color:#4c4c4c;
                                font-weight:400;

                                img{
                                    width:auto;
                                    height:auto;
                                    margin-right:10px;
                                }
                            }

                            p{
                                padding-left:34px;
                                font-weight:100;
                                color:#4c4c4c;
                                font-size:22px;
                                line-height:36px;
                            }
                        }
                    }
                }

                .map-img{
                    clear:both;
                    display:block;
                    width:1200px;
                    height:auto;
                    padding-top:30px;
                    margin:0px auto;
                }
            }
        }
    }


    .contact_m_Right{
        width:1200px;
        height:600px;
        margin:0px auto;
        #allmap{
            width:1200px;
            height:600px;
        }
    }
</style>