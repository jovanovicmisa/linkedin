function getParameter (){
   var url = document.URL;
		var queryString = url.substring( url.indexOf('=') + 1 , url.lastIndexOf('&'));
 		document.write(queryString);
}
function getParameterByName(name){
	var match = RegExp(name + '=([^&]*)').exec(window.location);
	document.write(match[1]);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}