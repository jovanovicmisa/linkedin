function getParameter (){
   var url = document.URL;
		var queryParam = url.substring( url.indexOf('=') + 1 , url.lastIndexOf('&'));
 		document.write(queryParam);
 		return queryParam;
}
function getParameterByName(name){
	var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
	document.write(match[1]);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
