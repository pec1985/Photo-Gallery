//Created by @pecdev and @pec1985
W.PhotoAlbum = function(params){
	var winTitle = params.title;

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
	
	//let's make a smaller loop, just for demo
	//for(var i = 1;i<176;i++){
	for(var i = 1;i<20;i++){
		
		if(i<100){ if(i>9){ i='0'+i; } else { i='00'+i; } }
		var imageName = 'album/WallPaper'+i+'.jpg';
		

		// =================================================
		// since the images are local, we can load them this way
			var imageFile = Ti.Filesystem.getFile(
				Ti.Filesystem.resourcesDirectory, imageName
			).toBlob().imageAsThumbnail(70,0,0);
		// =================================================

		var image = Ti.UI.createImageView({
			image: imageFile, // for remote images use the imageName,
			width:70, height:70,
			left:5,right:5,
			top:5, bottom:5,
			id:z
		});
		
		list[z++]=imageName;
		
		//utils.js
		//for remote images use this:
		//Utils.CreateThumbnail(image,70,0);
		
		view.add(image);
	}
	view.addEventListener('click',function(e){
		//slideimage.js
		Tab[0].open(
			W.SlideImage({
				current:e.source.id,
				title:'Images',
				list:list
			})
		);
	});
	win.add(view);
	
	return win;
};