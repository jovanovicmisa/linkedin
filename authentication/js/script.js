function getParameterByName() {
   var url = document.URL;
		var queryString = url.substring( url.indexOf('?') + 1 , url.lastIndexOf('&'));
 		document.write(queryString);
}
