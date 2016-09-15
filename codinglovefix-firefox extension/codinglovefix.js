/*
Change the source of all images where applicable.
*/
var imgs = document.getElementsByTagName("img");
for (var i = 0; i < imgs.length; i++) {
	if (imgs[i].src.substring(0, 'http://ljdchost.com'.length) == 'http://ljdchost.com') {
		imgs[i].src = 'http://codingproxy.herokuapp.com' + imgs[i].src.substring('http://ljdchost.com'.length);
	}
}