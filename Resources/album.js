//Created by @pecdev and @pec1985
var photoAlbum = function(params){
	var winTitle = params.title;
	var currentTab = params.tab;

	var win = Ti.UI.createWindow({
		title:winTitle,
		backgroundColor:'#999'
	});
	var view = Ti.UI.createScrollView({
		layout:'horizontal',
		left:0,right:0,
		top:0,bottom:0,
		contentHeight:'auto',
		showVerticalScrollIndicator:true
	});
	var list = [];
	var z = 0;
	
	for(var i = 1;i<176;i++){
		
		if(i<100){ if(i>9){ i='0'+i; } else { i='00'+i; } }
		
		var image = Ti.UI.createImageView({
			image:'album/WallPaper'+i+'.jpg',
			width:70, height:70,
			left:5,right:5,
			top:5, bottom:5,
			id:z
		});
		
		list[z++]=image.image;
		//thumbnail.js
		createThumbnail(image,70,0);
		
		view.add(image);
	}
	view.addEventListener('click',function(e){
		//slideimage.js
		currentTab.open(
			slideImage({
				current:e.source.id,
				title:'Images',
				list:list,
				tab:currentTab
			})
		);
	});
	win.add(view);
	
	return win;
};