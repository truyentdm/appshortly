var pathURL1 = location.pathname;
    pathURL1 = pathURL1.replace("%E2%80%8B","");
var ahref = "https://www.bestchoice3s.com/";
var pathURL = pathURL1.toLowerCase();
var objURL = pathURL.split("/")
var asin = objURL[objURL.length-1];
ahref = ahref + asin;

window.location.href = ahref;
