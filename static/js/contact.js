/**
 * Created by Administrator on 2017/3/22.
 */
var contactObj = {
    init:function(){
        require(['./common','./lazysizes.min'],function(commonJS){
            commonJS.commonObj.init();
            commonJS.commonObj.initLazyload();
            commonJS.commonObj.defaultChooseNav(5);


            initUI.apply(this);

            function initUI() {
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

                marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
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
        })
    }
}

exports.contactObj = contactObj;