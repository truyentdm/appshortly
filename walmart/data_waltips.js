function getData(){
	const keysw = "www.waltips.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			806171984: {href: "https://goto.walmart.com/c/2485609/568851/9383?veh=aff&sourceid=imp_000011112222333344&prodsku=806171984&u=https%3A%2F%2Fwww.walmart.com%2Fip%2FBlackstone-Range-Top-Combo-28-Griddle-with-Bonus-Fryer%2F806171984&intsrc=PUI1_4299",nameProduct: `Blackstone Range Top Combo - 28" Griddle with Bonus Fryer`,slug: ""}
		}
	}
	return dataAMZ;
}
