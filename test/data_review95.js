class Review95{
	constructor(){
		this.tagws = "congnguyen-20";
		this.local = "us";
		this.keyws = "www.review95.com";
		this.localws = "https://www.amazon.com/";
	}
	getData(keyhost=''){
		const keysw = "www.review95.com";
		var keyAPI = (typeof keyhost != 'undefined' && keyhost != '') ? keyhost : document.location.host;
		var dataAMZ = {};
		if(keysw == keyAPI){
			dataAMZ = {
				B00MYWQL96: {href: "https://google.com",nameProduct: `Hessaire MC37M portable Evaporative Air Cooler for 750 sq. ft.`,slug: "",summary: ``,image: ''},
				B07RZDFVQV: {href: "https://www.amazon.com/dp/B07RZDFVQV?tag=congnguyen-20",nameProduct: `Mealthy CrispLid for Pressure Cooker - Turns your Pressure Cooker into an Air Fryer - Air fry`,slug: "",summary: ``,image: ''}
			}
		}
		return dataAMZ;
	}
}
