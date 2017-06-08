// we need moment, sync-request, postmark

// carrier = ups | usps
function shipping(zip, carrier) {
	const sr = require('sync-request');
	if (carrier == 'usps' || carrier == 'ups') {
		var cb = sr('POST', 'http://givebackbox.com/' + carrier, {
			'headers': {
				'content-type': 'application/x-www-form-urlencoded',
				'user-agent': "curl/7.51.0"
			},
			'body':    "noEmail=1&zip=" + zip
		});
		const body = "" + cb.getBody();
		const img = body.match(/src="data:image\/gif;base64,(.+)"/)[1];
		sendEmail((carrier == 'ups' ? 1 : 2), img)
	}
}

// type = 0 : volunteer, 1 : ups, 2 : usps
function sendEmail(type, data) {
	var postmark = require("postmark");
	var client = new postmark.Client("e566bce4-7c28-404d-b7c0-94adecba719a");

	//temporary hard-coded variables
	//TODO: replace with dynamic variables
	var recipientemail = "zyber17@gmail.com";
	var givingbackemail = "thanks@giving-back.rocks";

	//Postmark template ID numbers
	var volunteerID = 2084301;
	var upsID = 2084581;
	var uspsID = 2084562;

	switch (type) {
		case 0:
			client.sendEmailWithTemplate({
				"To": recipientemail,
				"From": givingbackemail,
				"TemplateID": volunteerID,
				"TemplateModel": {
					"event": "Feed More BackPack Driver",
					"description": "Pickup backpacks from the Feed More distribution center and deliver them to low-income schools in the area.",
					"org": "Central Virginia Food Bank",
					"date": "8 June 2017",
					"from": "8:30 am",
					"to": "12:30 pm",
					"address": "1415 Rhoadmiller St, Richmond, VA 23220",
					"walktime": "30",
					"drivetime": "5",
					"phone": "(804) 521-2500",
					"email": "info@feedmore.org"
				},
		  	}, (err, res) => {
					  console.log(err);
					  console.log(res);
			});
			break;
		case 1:
			//Donate with UPS email
			client.sendEmailWithTemplate({
				"To": recipientemail,
				"From": givingbackemail,
				"TemplateID": upsID,
				"TemplateModel": {},
				"Attachments": [{
				  "Name": "shipwiththis.gif",
				  "Content": data,
				  "ContentType": "image/gif"
			  }]
		  	}, (err, res) => {
					  console.log(err);
					  console.log(res);
			});
			break;
		case 2:
			//Donate with USPS
			client.sendEmailWithTemplate({
				"To": recipientemail,
				"From": givingbackemail,
				"TemplateID": uspsID,
				"TemplateModel": {},
				"Attachments": [{
				  "Name": "shipwiththis.gif",
				  "Content": data,
				  "ContentType": "image/gif"
			  }]
		  	}, (err, res) => {

			});
			break;
	}

}

// shipping(10019, 'ups');

sendEmail(0, null);
