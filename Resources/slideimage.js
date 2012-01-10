//Created by @pecdev and @pec1985
W.SlideImage = function(params){
	var winTitle = params.title;
	var viewsList = params.list;
	var current = params.current;
	
	var win = Ti.UI.createWindow({
		title:winTitle,
		backgroundColor:'#999'
	});

	win.orientationModes = [
    	Titanium.UI.PORTRAIT,
        Titanium.UI.LANDSCAPE_LEFT,
    	Titanium.UI.LANDSCAPE_RIGHT
    ]; 
    
	win.hideTabBar();

	var views = [];

	for(var i=0;i<viewsList.length;i++){
		views[i] = Ti.UI.createImageView({
			left:5,right:5,
			top:5,bottom:0,
			image:viewsList[i]
		});
	}

	var scrollableView = Ti.UI.createScrollableView({
		left:0,right:0,
		top:0,bottom:0,
		views:views,
		showPagingControl:true,
		pagingControlColor:'transparent',
		pagingControlHeight:30,
		
	});

	scrollableView.scrollToView(current);
	win.add(scrollableView);

	return win;	
};