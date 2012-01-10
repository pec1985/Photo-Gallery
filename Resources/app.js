//Created by @pecdev and @pec1985
/*
The technique used in this app to create and open windows is the one
described in my blog.
Please visit:
http://pec1985.com/2010/12/11/tutorial-making-and-appcelerator-app-run-better/
for more information, and leave a comment if you have any questions.


EDIT: My blog is now dead. Sometime in the future I will rewrite what I wrote.

Follow me on twitter @pecdev
And if you want to, follow my clone and helper @pec1985
*/

// W is the namespace for Windows
var W = [];
// Tab is the array of tabs, so we can call Tab[0], Tab[1] etc.. later on
var Tab = [];
// This is the namespace for custom functions, in this example project there is only one
var Utils = [];
Ti.include('utils.js');
// windows
Ti.include('about.js');
Ti.include('album.js');
//Ti.include('image.js');
Ti.include('slideimage.js');

Titanium.UI.setBackgroundColor('#000');

// self calling funtion, unly used to execute code without populating the global scope
(function(){	
	var tabGroup = Titanium.UI.createTabGroup();

	Tab[0] = Titanium.UI.createTab({  
	    icon:'KS_nav_views.png',
	    title:'Tab 1',
		//album.js
		window: W.PhotoAlbum({title:'Photo Album'})
	});
	Tab[1] = Titanium.UI.createTab({  
	    icon:'KS_nav_ui.png',
	    title:'Tab 2',
		//about.js
		window: W.About({title:'About'})
	});

	tabGroup.addTab(Tab[0]);  
	tabGroup.addTab(Tab[1]);  

	tabGroup.open();
})();
