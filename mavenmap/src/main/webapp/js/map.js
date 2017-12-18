/**
 * 添加标签
 */
function addMarker(){
	var points = [	{"lng":121.423033,"lat":31.273102,"data":1},
	            	{"lng":121.328172,"lat":31.216295,"data":2},
	            	{"lng":121.464427,"lat":31.277547,"data":3},
	            	{"lng":121.294252,"lat":31.259274,"data":4},
	            	{"lng":121.507258,"lat":31.177498,"data":5}];
	var pointArray = [];
	for(var i = 0,pointsLen = points.length;i <pointsLen;i++){ 
		 var point = new BMap.Point(points[i].lng,points[i].lat); 
		 var  marker = new BMap.Marker(point);     
		 var label = new BMap.Label(points[i].data, {
             offset : new BMap.Size(5, 4)
         }); 
		 label.setStyle({
	           background:'none',color:'#fff',border:'none'//只要对label样式进行设置就可达到在标注图标上显示数字的效果
	         });
		 marker.setLabel(label);//显示地理名称 a 
		 map.addOverlay(marker); 
		 pointArray.push(point);
	}
	  var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
		    scale: 0.6,//图标缩放大小
		    strokeColor:'#fff',//设置矢量图标的线填充颜色
		    strokeWeight: '2',//设置线宽
		});
	var icons = new BMap.IconSequence(sy, '10', '30');
	var polyline = new BMap.Polyline(pointArray, {
		   enableEditing: false,//是否启用线编辑，默认为false
		   enableClicking: true,//是否响应点击事件，默认为true
		   icons:[icons],
		   strokeWeight:'8',//折线的宽度，以像素为单位
		   strokeOpacity: 0.8,//折线的透明度，取值范围0 - 1
		   strokeColor:"#18a45b" //折线颜色
		});
	setTimeout(addPoliLine(polyline), 5000);
	
		//map.addOverlay(polyline);
	//var marker = new BMap.Marker(new BMap.Point(121.464714,31.222718)); // 创建点
	//var marker = new 
	//map.addOverlay(marker); 
	//marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}

function addPoliLine(polyline){
	map.addOverlay(polyline);
}

/**
 * 删除标签
 */
function deleteMarker(){
	map.clearOverlays();
}