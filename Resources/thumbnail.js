//Created by @pecdev and @pec1985

// still not perfect, the load event firest twice :(
var createThumbnail = function(imageView,size,radius){
	function removeEvent(imageView){
		imageView.removeEventListener('load',getThumb);
	}
	function getThumb(){
		imageView.image = imageView.toBlob().imageAsThumbnail(size,0,radius);
		removeEvent(imageView);
	}
	imageView.addEventListener('load',getThumb);
};
