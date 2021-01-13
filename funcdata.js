//Function
var shortLink = "https://www.greattips3s.com/";
var lockLocal = [];
function checkLocal(objURL){
	for (var i = 0; i < objURL.length; i++) {
		 if (objURL[i] == "US" || objURL[i] == "CA" || objURL[i] == "UK" || objURL[i] == "P") {
			return true;
		}
	}
	return false;
}

function getLocal(objURL){
	if(checkLocal(objURL)){
		if (objURL[1] == "US" || objURL[1] == "P") { 
			return "US";
		}else if(objURL[1] == "CA"){
			return "CA";
		}else if(objURL[1] == "UK"){
			return "UK";
		}else{
			return false;
		}
		
	}
	return false;
}

function getASIN(objURL){
	if(checkLocal(objURL)){
		return objURL[2];
	}
	return false;
}
function checkDataAMZ(dataAMZ,objURL){
	var gLocal = getLocal(objURL);
	var gAsin = getASIN(objURL);
	var existAS = typeof dataAMZ[gAsin] != "undefined" ? true : false;
	var isLock = false;
	var existLocal =false;
	if(typeof lockLocal=="object"){
		lockLocal.forEach((item, index)=>{
			if(item.toLowerCase() == gLocal.toLowerCase()){
				isLock = true;
			}
		});
	}
	if(existAS && !isLock){
		existLocal= typeof dataAMZ[gAsin][gLocal] != "undefined" ? true : false;
	}
	
	return existLocal;
}
function getLinkDataAMZ(dataAMZ,objURL){
	if(checkDataAMZ(dataAMZ,objURL)){
		var gLocal = getLocal(objURL);
		var gAsin = getASIN(objURL);
		var glink = dataAMZ[gAsin][gLocal];
		return glink;
	}
	return "";
}

function checkASIN(asin,data){
  var existAS = typeof data[asin] != "undefined" ? true : false;
  return existAS;
}
function createLink(asin,local){
 	var asinShort = asin.toLowerCase();
 	var localShort = local.toLowerCase();
	var sLink = "";
	if(typeof shortLink == "object"){
		if(localShort == "us" || localShort == "p"){
			sLink = shortLink[0];
		}else if(localShort == "ca"){
			sLink = shortLink[1];
		}else if(localShort == "uk"){
			sLink = shortLink[2];
		}else{
			sLink = "";
		}
	}
	if(sLink==""){
		//return shortLink+localShort+"/"+asinShort;
		return shortLink+asinShort;
	}else{
		//return sLink+localShort+"/"+asinShort;
		return sLink+asinShort;
	}
 	
}
function myCheckAsin(fn,dataAMZCK){
  var asin = fn.txtAsin.value;
      asin = asin.toUpperCase();
      asin = asin.trim();
  document.getElementById("lblResult").innerHTML = ""
  if(checkASIN(asin,dataAMZCK)){
  	document.getElementById("lblResult").innerHTML = "ASIN: " + asin + "<br/>US: " + dataAMZCK[asin]["US"] + "<br/>CA: " + dataAMZCK[asin]["CA"] + "<br/>UK: " + dataAMZCK[asin]["UK"]+"<br/>----------------------------<br/>"+"<br/>Current Price & More Info (US) ► "+createLink(asin,"us")+"<br/>Current Price & More Info (CA) ► "+createLink(asin,"ca")+"<br/>Current Price & More Info (UK) ► "+createLink(asin,"uk")+"<br/>----------------------------<br/>"+"Current Price & More Info (US) ► "+createLink(asin,"p");
  }else{
  	document.getElementById("lblResult").innerHTML = "Current Price & More Info (US) ►"  + createLink(asin,"p");
  }

  return true;
}
  function myToolTxt(fn,upWord){
     var lblText = fn.txtAsin.value;
     document.getElementById("lblResult").innerHTML = ""
     if(upWord){
       document.getElementById("lblResult").innerHTML = lblText.toUpperCase();
     }else{
       document.getElementById("lblResult").innerHTML = lblText.toLowerCase() + "<hr/>" + createLink(lblText,"us");
     }
  }
 function myConvertTo(fn,direction){
    var lblText = fn.txtAsin.value;
    var objLBL = lblText.split("/");
    var mLeng = objLBL.length - 1;
    if(direction){
	document.getElementById("lblResult").innerHTML = "https://amzn.to/"+ objLBL[mLeng] + "<br />Short Link: " + shortLink + "to/" + objLBL[mLeng];
    }
 }
  
  function myLinkShort(fn){
    document.getElementById("lblResult").innerHTML = ""
    var lblText = fn.txtAsin.value;
        lblText = lblText.trim();
    var txtAsin = "";
    var isTrue = false;
    if(lblText!=""){
        for (var i in dataAMZ){
            if(dataAMZ[i]["US"]==lblText||dataAMZ[i]["CA"]==lblText||dataAMZ[i]["UK"]==lblText){
              txtAsin = i;
              isTrue = true;
            }
        }
    }
    document.getElementById("lblResult").innerHTML = isTrue ? "OK : "+ txtAsin + " - " + createLink(txtAsin,"us") : "NOT"
        
  }
function compareReferrer(objRef){
	var objExt = ["youtube","facebook"];
	for(var i=0;i < objRef.length; i++){
		for(var j=0;j < objExt.length; j++){
			if(objExt[j] == objRef[i]){
				return true;
			}
		}
	}
	return false;
}
function htmlRedirect404(url,tag="Amazon"){
	var htmlJS = ""
	htmlJS += "<div class=\"widget Blog\">";
	htmlJS += "<div class=\"wp_errorWrap\">";
	htmlJS += "<div class=\"errorWrap2\">";
	htmlJS += "<h4>You will be redirected to the purchase page of "+tag+".</h4>";
	htmlJS += "<a href='/'> "+location.hostname+" </a>";
	htmlJS += "is a participant in the "+tag+" Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to"
	htmlJS += "<a href='https://"+tag+".com'> "+tag+".com</a> ";
	htmlJS += ". "+tag+", the "+tag+" logo, "+tag+"Supply, and the "+tag+"Supply logo are trademarks of"
	htmlJS += "<a href='https://"+tag+".com'> "+tag+".com </a>";
	htmlJS += ", Inc. or its affiliates.";
	htmlJS += "</div>";
	htmlJS += "<div class=\"errorWrap\">";
	htmlJS += "<a class=\"homepage\" href='" + url + "'> Continue </a> &nbsp;";
	htmlJS += "<a class=\"homepage\" href=\"/\"> Home </a>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	return htmlJS;
}
function textRedirect404(url,dataText){
	var htmlJS = "";
	htmlJS += "<div class=\"widget Blog\">";
	htmlJS += "<div class=\"wp_errorWrap\">";
	htmlJS += "<div class=\"errorWrap2\">";
	htmlJS += "<h4>"+dataText.title+"</h4>";
	htmlJS += "<p>"+dataText.contentText+"</p>";
	htmlJS += "</div>";
	htmlJS += "<div class=\"errorWrap\">";
	htmlJS += "<a class=\"homepage\" href='" + url + "'> Continue </a> &nbsp;";
	htmlJS += "<a class=\"homepage\" href=\"/\"> Home </a>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	return htmlJS;
}
function htmlLoading(text){
	var htmlJS = "";
	htmlJS += "<div class=\"wp_errorWrap\">";
	htmlJS += text;
	htmlJS += "</div>";
	return htmlJS;
}
function actHTML(isSource,glink,tag="Amazon",idWeb="Blog1"){
	document.getElementById(idWeb).innerHTML = htmlRedirect404(glink,tag);
	if(isSource){
		//Transfer
		window.location.href = glink;
	}
}
function joinHTML(isSource,glink,dataText={title: "You will be redirected to the purchase page",contentText: "Services LLC Associates Program"},idWeb="Blog1"){
	document.getElementById(idWeb).innerHTML = textRedirect404(glink,dataText);
	if(isSource){
		//Transfer
		window.location.href = glink;
	}		
}
//VS 2 Short link
function getLinkShortAMZ(objURL){
	var mLeng = objURL.length-1;
	var amzLink = "https://amzn.to/";

	if(objURL[mLeng] != ""){
		amzLink += objURL[mLeng];
	}
	return amzLink;
}
function getLinkShortGlobal(objURL){
	var mLeng = objURL.length-1;
	var globalLink = {"to":"https://amzn.to/","gb":"http://gbe.st/"};
	var itemLink = "https://amzn.to/";
	if(objURL[mLeng] != ""){
		itemLink = globalLink[getSupply(objURL)];
		itemLink += objURL[mLeng];
	}
	return itemLink;
}

function checkTo(objURL){
	for (var i = 0; i < objURL.length; i++) {
		 if (objURL[i] == "to" || objURL[i] == "gb") {
			return true;
		}
	}
	return false;
}
function getSupply(objURL){
	if(checkTo(objURL)){
		if (objURL[1] == "to") { 
			return "to";
		}else if(objURL[1] == "gb"){
			return "gb";
		}else{
			return false;
		}
		
	}
	return false;
}
