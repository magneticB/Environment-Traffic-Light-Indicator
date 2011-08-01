// ==UserScript==
// @name           Environment Traffic Lights
// @namespace      tjt
// @description    Provides a coloured indicator for Dev, QA and Production environments.
// ==/UserScript==

var URL_PRODUCTION 	= /www.url.co.uk|www.url2.co.uk|83.1.1.1/i;
var URL_QA 		= /my-qa-site-url/i;
var URL_DEV 		= /localhost:9001/i;


var elementId = "environmentInfoBox";

var hideBox = function() { 
	var box = document.getElementById(elementId);

	if(box.style.opacity != "0.3"){
		box.style.opacity = "0.3";
	}
	else {
		box.style.opacity = "1";
	} 
} 


var addInfoMessage = function(colour, text) {
	var body = document.getElementsByTagName("body")[0];         
	var div = document.createElement('div');
	div.id = elementId;

	div.addEventListener("mouseover", hideBox, false);
	div.addEventListener("mouseout", hideBox, false);

	div.innerHTML = text;
	div.style.textAlign = "center";
	div.style.fontFamily = "sans-serif";
	div.style.fontSize = "1em";
	div.style.marginBottom = "3px";
	div.style.paddingBottom = "14px";
	div.style.paddingLeft = "14px";
	div.style.paddingRight = "14px";
	div.style.paddingTop = "14px";
	div.style.left = "220px";
	div.style.top = "0px";
	div.style.display = "block";
	div.style.position = "fixed";
	div.style.backgroundColor = colour;
	div.style.borderBottomLeftRadius = "6px";
	div.style.borderBottomRightRadius = "6px";
	//div.style.borderTopLeftRadius = "6px";
	//div.style.borderTopRightRadius = "6px";
	div.style.boxShadow = "0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 -2px 0 rgba(0, 0, 0, 0.1) inset, 0 0 10px rgba(255, 255, 255, 0.5) inset, 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.2)";
	div.style.zIndex = "999";

	body.insertBefore(div, body.firstChild);
}



if ((URL_PRODUCTION).test(document.location.href)) {
	addInfoMessage("#F03D38", "Currently browsing PRODUCTION");
}

if ((URL_QA).test(document.location.href)) {
	addInfoMessage("#EEAD52", "Currently browsing QA");
}

if ((URL_DEV).test(document.location.href)) {
	addInfoMessage("#8EEB80", "Currently browsing DEV");
}


