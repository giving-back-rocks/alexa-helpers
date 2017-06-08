var postmark = require("postmark");
var client = new postmark.Client("e566bce4-7c28-404d-b7c0-94adecba719a");

//temporary hard-coded variables
//TODO: replace with dynamic variables
var useremail = "squadsparklesc1@gmail.com";
var givingbackemail = "thanks@giving-back.rocks";

//Postmark template ID numbers
var volunteerID = 2084301;
var upsID = 2084581;
var uspsID = 2084562;

//Volunteer email
client.emailWithTemplate(recipientemail, givingbackemail, volunteerID,
{
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
});

//Donate with UPS email
client.emailWithTemplate(recipientemail, givingbackemail, upsID,
	{
   		"Name": "shipwiththis.gif",
      	"Content": "some base64 nonsense",
      	"ContentType": "image/gif"
	});

//Donate with USPS
client.emailWithTemplate(recipientemail, givingbackemail, uspsID,
	{
      "Name": "shipwiththis.gif",
      "Content": "some base64 nonsense",
      "ContentType": "image/gif"
    });
