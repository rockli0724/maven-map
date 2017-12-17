/**
 * 添加标签
 */
function addMarker(){
	map.addOverlay(marker); 
	marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}

/**
 * 删除标签
 */
function deleteMarker(){
	map.clearOverlays();
}