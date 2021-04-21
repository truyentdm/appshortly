//Function
var shortLink = "https://www.greattips3s.com/";
var lockLocal = [];

function getDataValue(data,key,value){
	var _va = (typeof data[key] != 'undefined') ? data[key][value] : "";
	return _va;
}
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
function createLink(asin,local,wrapLink=""){
 	var asinShort = asin.toLowerCase();
 	var localShort = local.toLowerCase();
	var sLink = "";
	if(wrapLink == ""){
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
	}else{
		return wrapLink+asinShort;
	}
 	
}
function myCheckAsin(fn,dataAMZCK,local="us"){
  var asin = fn.txtAsin.value;
      asin = asin.toUpperCase();
      asin = asin.trim();
  let wrapLink = fn.slcWrapLink.value == "none" ? "" : fn.slcWrapLink.value;
  let radioDecription = fn.radioDescription.value;	
  let radioDecriptionLocal = radioDecription.replace("[local]",local.toUpperCase());
  let radioDecriptionUS = radioDecription.replace("[local]","US");
  let radioDecriptionCA = radioDecription.replace("[local]","CA");
  let radioDecriptionUK = radioDecription.replace("[local]","UK");
	
  let inputTextOpen = "<input type='text'";
  let inputTextEnd = "/>";
  let  copyTextUS =`<div class="tooltip"><button onclick="myCopyTexFunction('myInputUS','myTooltipUS')" onmouseout="outFunc('myTooltipUS')"><span class="tooltiptext" id="myTooltipUS">Copy to clipboard</span>Copy text</button></div>`
  let  copyTextCA =`<div class="tooltip"><button onclick="myCopyTexFunction('myInputCA','myTooltipCA')" onmouseout="outFunc('myTooltipCA')"><span class="tooltiptext" id="myTooltipCA">Copy to clipboard</span>Copy text</button></div>`
  let  copyTextUK =`<div class="tooltip"><button onclick="myCopyTexFunction('myInputUK','myTooltipUK')" onmouseout="outFunc('myTooltipUK')"><span class="tooltiptext" id="myTooltipUK">Copy to clipboard</span>Copy text</button></div>`
  let  copyTextCP =`<div class="tooltip"><button onclick="myCopyTexFunction('myInputCP','myTooltipCP')" onmouseout="outFunc('myTooltipCP')"><span class="tooltiptext" id="myTooltipCP">Copy to clipboard</span>Copy text</button></div>`
  document.getElementById("lblResult").innerHTML = ""
  if(checkASIN(asin,dataAMZCK)){
  	if(typeof dataAMZCK[asin]["href"] != "undefined"){
	  document.getElementById("lblResult").innerHTML = `
		ASIN: ${asin}<br/>
		href: ${dataAMZCK[asin]["href"]}<br/>
		${inputTextOpen} value="${radioDecriptionUS} ${createLink(asin,local,wrapLink)}" style="width:85%" id="myInputUS" ${inputTextEnd} ${copyTextUS}<br/>
		${inputTextOpen} value="${radioDecriptionCA} ${createLink(asin,local,wrapLink)}" style="width:85%" id="myInputCA" ${inputTextEnd} ${copyTextCA}<br/>
		${inputTextOpen} value="${radioDecriptionUK} ${createLink(asin,local,wrapLink)}" style="width:85%" id="myInputUK" ${inputTextEnd} ${copyTextUK}<br/>
		-----------------------<br/>
		Product Name: ${dataAMZCK[asin]["nameProduct"]}
	`
	}else{
	  document.getElementById("lblResult").innerHTML = "ASIN: " + asin + "<br/>US: " + dataAMZCK[asin]["US"] + "<br/>CA: " + dataAMZCK[asin]["CA"] + "<br/>UK: " + dataAMZCK[asin]["UK"]+"<br/>----------------------------<br/>"+"<br/>Current Price & More Info (US)► "+createLink(asin,"us",wrapLink)+"<br/>Current Price & More Info (CA)► "+createLink(asin,"ca",wrapLink)+"<br/>Current Price & More Info (UK)► "+createLink(asin,"uk",wrapLink)+"<br/>----------------------------<br/>"+"Current Price & More Info (US)► "+createLink(asin,"p",wrapLink);
	}		
  }else{
  	document.getElementById("lblResult").innerHTML = `ASIN: ${asin}<br/>
		${inputTextOpen} value="${radioDecriptionLocal} ${createLink(asin,local,wrapLink)}" style="width:85%" id="myInputCP" ${inputTextEnd} ${copyTextCP}
	`
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
  
  function myLinkShort(fn,local="us"){
    document.getElementById("lblResult").innerHTML = ""
    var lblText = fn.txtAsin.value;
        lblText = lblText.trim();
    var txtAsin = "";
    var isTrue = false;
    if(lblText!=""){
	for (var i in dataAMZ){
		if(typeof dataAMZ[i]["href"] != "undefined"){
		    if(dataAMZ[i]["href"]==lblText){
		      txtAsin = i;
		      isTrue = true;
		    }	
		}else{
		    if(dataAMZ[i]["US"]==lblText||dataAMZ[i]["CA"]==lblText||dataAMZ[i]["UK"]==lblText){
		      txtAsin = i;
		      isTrue = true;
		    }
		}
	}
	
    }
    document.getElementById("lblResult").innerHTML = isTrue ? "OK : "+ txtAsin + " - " + createLink(txtAsin,local) : "NOT"
        
  }
function compareReferrer(objRef){
	var objExt = ["youtube","facebook","tipswalls"];
	for(var i=0;i < objRef.length; i++){
		for(var j=0;j < objExt.length; j++){
			if(objExt[j] == objRef[i]){
				return true;
			}
		}
	}
	return false;
}
function htmlRedirect404(url,nameProduct="",tag="Amazon"){
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
	if(nameProduct != ""){
		htmlJS += "<p><b>Product name:</b> "+nameProduct+"</p>";
	}
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
function htmlShortly(dataContent,dataRedirect){
	let posContent = getRandomInt(0,dataContent.length)
	var htmlJS = "";
	htmlJS += "<div class=\"widget Blog\">";
	htmlJS += "<div class=\"wp_errorWrap\">";
	htmlJS += "<div class=\"errorWrap2\">";
	
	htmlJS += "<h3>Recommended for you:</h3>";
	htmlJS += `
		<div class="data-img fl-left"><img src="https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w100/nth.png" alt=""></div>
		<div class="data-title fl-left"><div>${dataRedirect[0].title}</div><a href="${dataRedirect[0].href}">View Amazon Price</a></div>
		<div class="clr"></div>
	`;
	htmlJS += "<h3>"+dataContent[posContent].title+"</h3>";
	htmlJS += dataContent[posContent].content;
	htmlJS += "<h4>You may like products:</h4>"
	/*htmlJS += `
		<ul class="ul-data">
			<li>
				<div class="data-img fl-left"><img src="https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w100/nth.png" alt=""></div>
				<div class="data-title fl-left"><div>${dataRedirect[0].title}</div><a href="${dataRedirect[0].href}">View Amazon Price</a></div>
				<div class="clr"></div>
			</li>
			<li>
				<div class="data-img fl-left"><img src="https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w100/nth.png" alt=""></div>
				<div class="data-title fl-left"><div>Top 5 Best Wooden Bed Frames With the Quality Design Reviews</div><a href="#">View Amazon Price</a></div>
				<div class="clr"></div>
			</li>
		</ul>
	`*/
	htmlJS += '<ul class="ul-data">';
	dataRedirect.forEach((item,index)=>{
		htmlJS += `
			<li>
				<div class="data-img fl-left"><img src="https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w100/nth.png" alt=""></div>
				<div class="data-title fl-left"><div>${item.title}</div><a href="${item.href}">View Amazon Price</a></div>
				<div class="clr"></div>
			</li>
		`;
	});
	htmlJS += "</ul>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	htmlJS += "</div>";
	return htmlJS;
}
function htmlWrapShortly(asin,dataContent,dataRedirect){
	var htmlJS = "";
	
	if(typeof dataAMZ[asin].image != "undefined" && dataAMZ[asin].image != ""){
		htmlJS += "<div class=\"widget Blog\">";
		htmlJS += "<div class=\"wp_errorWrap\">";
		htmlJS += "<div class=\"errorWrap2\">";
		htmlJS += `<h3>${dataAMZ[asin].nameProduct}</h3>`
		if(Array.isArray(dataAMZ[asin].image)){
			dataAMZ[asin].image.forEach((item,index)=>{
				htmlJS +=`<div><img src="${item}" /></div>`;
			});
		}else{
			htmlJS +=`<div><img src="${dataAMZ[asin].image}" /></div>`;
		}
		htmlJS += "<br/>";
		if(dataAMZ[asin].summary != ""){
			htmlJS += `<h3>Product highlights:</h3>`;
			htmlJS += `${dataAMZ[asin].summary}`;
			htmlJS += "<br/>";
		}
		htmlJS += "";
		htmlJS += "<h4>You may like products:</h4>"
		htmlJS += '<ul class="ul-data">';
		dataRedirect.forEach((item,index)=>{
			htmlJS += `
				<li>
					<div class="data-img fl-left"><img src="https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/w100/nth.png" alt=""></div>
					<div class="data-title fl-left"><div>${item.title}</div><a href="${item.href}">View Amazon Price</a></div>
					<div class="clr"></div>
				</li>
			`;
		});
		htmlJS += "</ul>";
		htmlJS += "</div>";
		htmlJS += "</div>";
		htmlJS += "</div>";
		
	}else{
		htmlJS = htmlShortly(dataContent,dataRedirect);
	}
	
	return htmlJS;
}
function htmlLoading(text){
	var htmlJS = "";
	htmlJS += "<div class=\"wp_errorWrap\">";
	htmlJS += text;
	htmlJS += "</div>";
	return htmlJS;
}
function actHTML(isSource,glink,nameProduct="",tag="Amazon",idWeb="Blog1"){
	document.getElementById(idWeb).innerHTML = htmlRedirect404(glink,nameProduct,tag);
	if(isSource){
		//Transfer
		window.location.href = glink;
	}
}
function addHtml(isSource,glink,nameProduct,numPost =5,idWeb="Blog1"){
	let dataContent = shortlyContent();
	let dataRedirect = [{title: nameProduct,href: glink}]
	let keysData = Object.keys(dataAMZ);
	let ksLength = keysData.length;
	let ks = 0;
	let keyItem = "";
	for(let i=0;i<numPost;i++){
		ks = getRandomInt(0,ksLength);
		keyItem = keysData[ks];
		dataRedirect.push({title: dataAMZ[keyItem].nameProduct,href: dataAMZ[keyItem].href})
	}
	console.log(dataRedirect);
	//document.getElementById(idWeb).innerHTML = htmlShortly(dataContent,dataRedirect);
	document.getElementById(idWeb).innerHTML = htmlWrapShortly(objURL[objURL.length-1].toUpperCase(),dataContent,dataRedirect);
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
function myCopyTexFunction(idHtml,idTooltip) {
  var copyText = document.getElementById(idHtml);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById(idTooltip);
  tooltip.innerHTML = "Copied";
}
function outFunc(idTooltip) {
  var tooltip = document.getElementById(idTooltip);
  tooltip.innerHTML = "Copy to clipboard";
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
