function getParameterByName() {
    var queryString = window.location.search;
		queryString = queryString.substring(1);
		return queryString;
}
