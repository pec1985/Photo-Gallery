//Created by @pecdev and @pec1985
var createThumbnail = function(imageView,size,radius){
	var x = 1;
	imageView.addEventListener('load',function(){
		if(x==1){
			imageView.image = imageView.toBlob().imageAsThumbnail(size,0,radius);
		}
		x++;
	});
};
