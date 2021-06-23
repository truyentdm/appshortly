function getData(){
	const keysw = "www.tipslittle.com";
	var keyAPI = (typeof keyhost != 'undefined') ? keyhost : document.location.host;
	var dataAMZ = {};
	if(keysw == keyAPI){
		dataAMZ = {
			B07YZ8QJ4P: {href: "https://amzn.to/3xwWKQX",nameProduct: `Okaysou AirMic4S Air Purifier with Medical Grade H13 True HEPA filter for Home, Remove Pet Hair, Smoke, Pollen, Dust, Pet Dander, VOCs, for Large/Small Room/ Desktop,White`,image: '',summary: ``,slug: ""},
			B077VRX8TV: {href: "https://amzn.to/2TPix7M",nameProduct: `Dash DMW001CU Mini Maker for Individual Waffles, Hash Browns, Keto Chaffles with Easy to Clean, Non-Stick Surfaces, 4 Inch, Copper`,image: '',summary: ``,slug: ""},
			B07R56HW4G: {href: "https://amzn.to/3gK76HI",nameProduct: `Euhomy Ice Maker Machine Countertop, 26 lbs in 24 Hours, 9 Cubes Ready in 6 Mins, Electric ice maker and Compact potable ice maker with Ice Scoop and Basket. Perfect for Home/Kitchen/Office.(Sliver)`,image: '',summary: ``,slug: ""},
			B07FSYZVTZ: {href: "https://amzn.to/2TUOFHj",nameProduct: `Smart Digital Manual Incline Treadmill - Slim Folding Electric 2.5 HP Indoor Home Foldable Fitness Exercise Running Machine with Downloadable App, MP3 Player, Safety Key - SereneLife SLFTRD25`,image: '',summary: ``,slug: ""},
			B07H2NP7PR: {href: "https://amzn.to/3wPoVKO",nameProduct: `Intex - 10' X 30" Prism Frame Premium Pool Set`,image: '',summary: ``,slug: ""},
			B076KKX4BC: {href: "https://amzn.to/3gM32qn",nameProduct: `Xiaomi Mi Electric Scooter, 18.6 Miles Long-range Battery, Up to 15.5 MPH, Easy Fold-n-Carry Design, Ultra-Lightweight Adult Electric Scooter (US Version with Warranty)`,image: '',summary: ``,slug: ""},
			B07PL6LDP1: {href: "https://amzn.to/35PxQ2V",nameProduct: `Sony HT-S350 Soundbar with Wireless Subwoofer: S350 2.1ch Sound Bar and Powerful Subwoofer - Home Theater Surround Sound Speaker System for TV - Blutooth and HDMI Arc Compatible Bar Black`,image: '',summary: ``,slug: ""},
			B07F39ZRCQ: {href: "https://amzn.to/3cZjXU8",nameProduct: `Bose Bass Module 700 - Black- Wireless, Compact Subwoofer`,image: '',summary: ``,slug: ""},
			B07QV8PMBY: {href: "https://amzn.to/2TUo6BO",nameProduct: `OOTORI 2020 New N500 Pro Massage Chair, Massage Chairs Recliner and Full Body, Zero Gravity Massage Chair, Airbags Shiatsu Massage Chair Recliner with Lower Back Heating, Hip Vibration and Foot Roller`,image: '',summary: ``,slug: ""},
			B0002KVQBA: {href: "https://amzn.to/2UhZR0C",nameProduct: `Polk Audio PSW10 10" Powered Subwoofer - Power Port Technology, Up to 100 Watts, Big Bass in Compact Design, Easy Setup with Home Theater Systems Black`,image: '',summary: ``,slug: ""},
			B002ZDAEIS: {href: "https://amzn.to/3vSYDGi",nameProduct: `Razor EcoSmart Metro Electric Scooter`,image: '',summary: ``,slug: ""},
			B004J2GUOU: {href: "https://amzn.to/3gWSkw4",nameProduct: `Coleman 2-Person Dome Tent for Camping | Sundome Tent with Easy Setup`,image: '',summary: ``,slug: ""},
			B0193V3DJ6: {href: "https://amzn.to/3zKPzqa",nameProduct: `NordicTrack T 6.5 Series`,image: '',summary: ``,slug: ""},
			B002KV1MJU: {href: "https://amzn.to/35JVUnX",nameProduct: `Marcy Recumbent Exercise Bike with Resistance ME-709`,image: '',summary: ``,slug: ""},
			B07FTN21JL: {href: "https://amzn.to/3zOe2Lq",nameProduct: `Fitbit Charge 3 Fitness Activity Tracker`,image: '',summary: ``,slug: ""},
			B01ALBMIEI: {href: "https://amzn.to/3x1B6Ek",nameProduct: `Giantex Portable Mini Compact Twin Tub Washing Machine 17.6lbs Washer Spain Spinner, Blue+ White`,image: '',summary: ``,slug: ""},
			B07144LZ9V: {href: "https://amzn.to/3zOqjzm",nameProduct: `Best Choice Products Portable Mini Twin Tub Compact Washing Machine and Dryer Combo, 18-Pound Load Capacity, w/ 15-Minute Timer, Drain Hose, Spin Dry Cycle, White/Blue`,image: '',summary: ``,slug: ""},
			B077HW9XM7: {href: "https://amzn.to/3d6E5U6",nameProduct: `Ecovacs DEEBOT N79S Robotic Vacuum Cleaner with Max Power Suction, Upto 110 Min Runtime, Hard Floors and Carpets, Works with Alexa, App Controls, Self-Charging, Quiet`,image: '',summary: ``,slug: ""},
			B002MPLYEW: {href: "https://amzn.to/2TYqHL1",nameProduct: `Danby 120 Can Beverage Center, Stainless Steel DBC120BLS`,image: '',summary: ``,slug: ""},
			B001EQ45OG: {href: "https://amzn.to/35N6SJk",nameProduct: `American Standard 2461002.011 Cambridge Apron-Front Americast Soaking Bathtub Right Hand Drain, 5 ft x 32 in, Arctic`,image: '',summary: ``,slug: ""},
			B00450U6CS: {href: "https://amzn.to/3d3dhEy",nameProduct: `Bissell Big Green Professional Carpet Cleaner Machine, 86T3`,image: '',summary: ``,slug: ""},
			B001CNG7RY: {href: "https://amzn.to/3j4Cdis",nameProduct: `DeLonghi EC702 15-Bar-Pump Espresso Maker, Stainless, Metal`,image: '',summary: ``,slug: ""},
			B074MLZR3Y: {href: "https://amzn.to/3wU2Tqo",nameProduct: `Brondell Swash Non-Electric Seat, Fits Round Toilets, White – Dual Nozzle System, Ambient Water Temperature – Bidet with Easy Installation`,image: '',summary: ``,slug: ""},
			B07Q7Y84S6: {href: "https://amzn.to/2SYmkQb",nameProduct: `Ecovacs DEEBOT 500 Robot Vacuum Cleaner with Max Power Suction, Up to 110 min Runtime, Hard Floors & Carpets, Pet Hair, App Controls, Self-Charging, Quiet, Large, Black`,image: '',summary: ``,slug: ""},
			B00PHNFML2: {href: "https://amzn.to/3qh9GIh",nameProduct: `Breville BFP660SIL Sous Chef 12 Cup Food Processor, Silver`,image: '',summary: ``,slug: ""},
			B00K150VAI: {href: "https://amzn.to/35HtI51",nameProduct: `Smittybilt (98510) X2O Waterproof Synthetic Rope Winch - 10000 lb. Load Capacity`,image: '',summary: ``,slug: ""},
			B005EFYCNW: {href: "https://amzn.to/3gWMACh",nameProduct: `Sauder Home Plus Storage Cabinet, Dakota Oak finish`,image: '',summary: ``,slug: ""},
			B07GYP68HW: {href: "https://amzn.to/2TT6Yg2",nameProduct: `Epson Home Cinema 4010 4K PRO-UHD (1) 3-Chip Projector with HDR`,image: '',summary: ``,slug: ""},
			B0144DQNWW: {href: "https://amzn.to/3j4ptJ0",nameProduct: `Ultra HD Mega Storage Cabinet - Stainless Steel`,image: '',summary: ``,slug: ""},
			B075FGY7G2: {href: "https://amzn.to/35GnmDc",nameProduct: `Zinus Suzanne Metal and Wood Platform Bed with Headboard / Box Spring Optional / Wood Slat Support, Queen`,image: '',summary: ``,slug: ""},
			B07B94ZR74: {href: "https://amzn.to/2SWPuz6",nameProduct: `SUPER DEAL Portable Washer Mini Twin Tub Washing Machine 17.6 lbs w/78.8'' Inlet Hose`,image: '',summary: ``,slug: ""},
			B01B8DGNMQ: {href: "https://amzn.to/3d0R0aj",nameProduct: `Prodigy 2.0 Leggett & Platt Adjustable Bed Base`,image: '',summary: ``,slug: ""},
			B0067MQM48: {href: "https://amzn.to/3zMzBMe",nameProduct: `Zojirushi BB-PAC20BA BB-PAC20 Home Bakery Virtuoso Breadmaker with Gluten Free Menu setting`,image: '',summary: ``,slug: ""},
			B00C1EJPJA: {href: "https://amzn.to/3zPJuJ7",nameProduct: `Zodiac MX8 Suction-Side Cleaner`,image: '',summary: ``,slug: ""},
			B01MXIMVXG: {href: "https://amzn.to/3d5LH9q",nameProduct: `ASICS Men's Gel-Venture 6 Running Shoe`,image: '',summary: ``,slug: ""},
			B074FKGR7F: {href: "https://amzn.to/3d5LRh2",nameProduct: `Epson Home Cinema 2100 1080p 3LCD projector`,image: '',summary: ``,slug: ""},
			B003PCSR82: {href: "https://amzn.to/3zQk9i7",nameProduct: `EdgeStar AP14001HS Portable Air Conditioner and Heater with Dehumidifier and Fan for Rooms up to 525 Sq. Ft. with Remote Control`,image: '',summary: ``,slug: ""},
			B07VPL2HYG: {href: "https://amzn.to/2UlKq7G",nameProduct: `YnM Weighted Blanket 3 Pieces Set with 2 Duvet Covers | Suit for Hot & Cold Sleepers Year Round Use (60''x 80'' 20lbs)`,image: '',summary: ``,slug: ""},
			B01B8GQ940: {href: "https://amzn.to/2SVjNWM",nameProduct: `Zinus Mia Modern Studio 14 Inch Platform 1500H Metal Bed Frame / Mattress Foundation / Wooden Slat Support / With Headboard / Good Design Award Winne`,image: '',summary: ``,slug: ""},
			B07XF9NYV3: {href: "https://amzn.to/3xLtEgU",nameProduct: `Zmodo 1080p Full HD Outdoor Wireless Security Camera System, 4 Pack Smart Home Indoor Outdoor WiFi IP Cameras with Night Vision, Compatible with Alexa`,image: '',summary: ``,slug: ""},
			B000XRQUSQ: {href: "https://amzn.to/2UwpbAg",nameProduct: `Krinner Tree Genie Tree Genie XXL Christmas Tree Stand, Green`,image: '',summary: ``,slug: ""},
			B002EKUK2C: {href: "https://amzn.to/3zOMYvs",nameProduct: `EdgeStar AP12000HS Portable Air Conditioner and Heater with Dehumidifier and Fan for Rooms up to 425 Sq. Ft. with Remote Control`,image: '',summary: ``,slug: ""},
			B00YEYKK8U: {href: "https://amzn.to/2T06bK3",nameProduct: `OXO BREW 9 Cup Coffee Maker`,image: '',summary: ``,slug: ""},
			B07B42DWWC: {href: "https://amzn.to/3d557LO",nameProduct: `Nectar Queen Mattress + 2 Pillows Included - Gel Memory Foam - CertiPUR-US Certified Foams - 180 Night Home Trial - Forever Warranty`,image: '',summary: ``,slug: ""},
			B076CPZWR3: {href: "https://amzn.to/35LB3ke",nameProduct: `Sauder HomePlus Storage Cabinet`,image: '',summary: ``,slug: ""},
			B00T9RANUC: {href: "https://amzn.to/3j7b1zU",nameProduct: `FLIR C2 - Compact Thermal Camera`,image: '',summary: ``,slug: ""},
			B00JXS3BXI: {href: "https://amzn.to/3d2asDl",nameProduct: `Smittybilt 9500 lb 97495 XRC GEN2 Winch-9500 Pound Load Capacity`,image: '',summary: ``,slug: ""}
		}
	}
	return dataAMZ;
}
