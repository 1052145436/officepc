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
                // 百度地图API功能
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(113.3640940000,23.1039830000);
                map.centerAndZoom(point, 18);
                var marker = new BMap.Marker(point);  // 创建标注
                map.addOverlay(marker);               // 将标注添加到地图中
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