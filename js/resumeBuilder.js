// 	Data objects for resume in JSON format.
var bio = {
	"name": "Ryan Pfeifer",
	"role": "Front-End Web Developer",
    "contacts": {
		"mobile": "402-555-4608",
	    "email": "pfeifer.ryan@gmail.com",
        "github": "github.com/runninmonke",
        "twitter": "twitter.com",
        "location": "Omaha, NE"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["Html", "CSS", "Javascript", "JQuery", "Python"],
    "biopic": "images/me.jpg"
};


var education = {
	"schools": [{
	        "name": "University of Nebraska",
	        "location": "Lincoln, NE",
	        "degree": "Bachelor of Science",
	        "majors": ["Meteorlogy"],
	        "dates": 2015,
	        "url": "unl.edu"
	    }],
    "onlineCourses": [{
	        "title": "Front-End Web Development Nanodegree",
			"school": "Udacity",
			"date": 2015,
			"url": "udacity.com"
		}]
};

var work = {
	"jobs": [{
		"employer": "Marriott International",
	    "title": "Regional Sales Associate",
	    "location": "Omaha, NE",
	    "dates": "2013 - Present",
	    "description": "string"
	}]
};

var projects = {
	"projects": [{
		"title": "Portfolio Webpage",
	    "dates": "2015 - Present",
	    "description": "An wbesite with a sampling of projects I've completed.",
	    "images": "https://github.com/runninmonke/FEP1"
	}]
};

//Display methods declared seperately since functions aren't valid International JSON
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills) {
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill, i, skills) {
			var formattedSkill = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkill);
		})
	}
};
education.display = function() {

};
work.display = function() {

};
projects.display = function() {
	$("#workExperience").append(HTMLworkStart);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
	$(".work-entry:last").append(formattedLocation);
};

bio.display();
education.display();
work.display();
projects.display();