<!DOCTYPE html>
<%@ page pageEncoding="UTF-8" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	<style type="text/css">
	body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;font-family:"微软雅黑";}
	</style>
	<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=eoW2GNSceXqkRjYhsNN6g009XidqjpUi"></script>
	<script   src="js/jquery-2.0.0.js"></script>
	<script   src="js/map.js"></script>
	<title>地图展示</title>
	<!-- <script type="text/javascript">
	$(function(){
		$("#my").load("map.jsp");
	});
	</script> -->
<!-- <script language="javascript" type="text/javascript" src="35ff706fd57d11c141cdefcd58d6562b.js" charset="gb2312"></script><script type="text/javascript">
hQGHuMEAyLn('[id="bb9c190068b8405587e5006f905e790c"]');</script> -->
</head>
<body>
<h1>baidu Map begin <a href="javascript:addMarker();">addMarker</a>
<a href="javascript:deleteMarker();">deleteMarker</a>
<a href="./map.jsp">进入地图</a>
</h1>
	<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(121.464714,31.222718), 13);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
/* 	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP
        ]})); */	  
	map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var marker = new BMap.Marker(new BMap.Point(121.464714,31.222718)); // 创建点
	//map.addOverlay(marker);   
</script>
