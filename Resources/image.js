//Created by @pecdev and @pec1985

//Not used on this version, FYI
var imageView = function(params){
	var imageId = params.id;
	var win = Ti.UI.createWindow();
	win.hideTabBar();
	var image = Ti.UI.createImageView({
		left:0,right:0,
		top:0,bottom:0,
		image:'album/WallPaper'+imageId+'.jpg'
	});
	win.add(image);
	return win;
};