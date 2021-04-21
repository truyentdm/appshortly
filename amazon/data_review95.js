function getData(){
	const keysw = "www.review95.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			B01ALBMIEI: {href: "link1",nameProduct: `Giantex Portable Mini Compact Twin Tub Washing Machine 17.6lbs Washer Spain Spinner, Blue+ White`,slug: ""},
			B01KIMOEW4: {href: "link2",nameProduct: `Hoover Spotless Portable Carpet & Upholstery Spot Cleaner, FH11300PC`,slug: ""}
		}
	}
	return dataAMZ;
}
