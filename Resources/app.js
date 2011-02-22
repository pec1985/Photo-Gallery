//Created by @pecdev and @pec1985
/*
The technique used in this app to create and open windows is the one
described in my blog.
Please visit:
http://pec1985.com/2010/12/11/tutorial-making-and-appcelerator-app-run-better/
for more information, and leave a comment if you have any questions.

Follow me on twitter @pecdev
And if you want to, follow my clone and helper @pec1985
*/

Ti.include('thumbnail.js');
Ti.include('about.js');
Ti.include('album.js');
Ti.include('image.js');
Ti.include('slideimage.js');
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1'
});
			//album.js
tab1.window = photoAlbum({tab:tab1,title:'Photo Album'});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2'
});
			//about.js
tab2.window = about({title:'About'});

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();
