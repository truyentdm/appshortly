var dataFAST = getData();
var pathURL1 = location.pathname;
	pathURL1 = pathURL1.replace("%E2%80%8B","")
var pathURL = pathURL1.toUpperCase()
var objURL = pathURL.split("/")
var lockLocal = ["CA","UK"];
	
function loadUrl(isSource,glink){
	if(isSource){
		window.location.href = glink;
	}
}
if(typeof dataFAST[objURL[objURL.length-1]] !== "undefined"){
  	var glink = typeof dataFAST[objURL[objURL.length-1]].href != "undefined"? dataFAST[objURL[objURL.length-1]].href : dataFAST[objURL[objURL.length-1]].US;
  	if(glink!="" 	&& glink != "undefined"){
  		var urlReferrer = document.referrer;
      urlReferrer = urlReferrer.toLowerCase();
      var objReferrer = urlReferrer.split(".");
      var isSource = compareReferrer(objReferrer);
      var nameProduct = getDataValue(dataFAST,objURL[objURL.length-1],"nameProduct");

      //actHTML(isSource,glink,nameProduct)
      loadUrl(isSource,glink)
  	}
 }
