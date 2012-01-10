//Created by @pecdev and @pec1985
W.About = function(params){
	var winTitle = params.title;
	var win = Ti.UI.createWindow({
		title:winTitle,
		backgroundColor:'#ccc'
	});
	var label = Ti.UI.createLabel({
		left:20,right:20,
		top:20,bottom:20,
		text:'Photos taken from: \n http://www.technospot.net/blogs/free-download-175-amazing-widescreen-wallpaper-pack/'
	});
	win.add(label);
	return win;
};