//Created by @pecdev and @pec1985

Utils.CreateThumbnail = function(imageView,size,radius){
	function getThumb(){
		imageView.removeEventListener('load',getThumb);
		imageView.image = imageView.toBlob().imageAsThumbnail(size,0,radius);
	}
	imageView.addEventListener('load',getThumb);
};
