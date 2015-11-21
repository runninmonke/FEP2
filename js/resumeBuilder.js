// 	Data objects for resume in JSON format.
var bio = {
	"name": "Ryan Pfeifer",
	"role": "Front-End Web Developer",
    "contacts": {
		"mobile": "402-895-4608",
	    "email": "pfeifer.ryan@gmail.com",
        "github": "github.com/runninmonke",
        "twitter": "twitter.com",
        "location": "Omaha, NE"
    },
    "welcomeMessage": "Welcome!",
    "skills": ["Html", "CSS", "Javascript", "Python"],
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

//Display methods declared seperately since functions shouldn't be part of JSON
bio.display = function() {

};
education.display = function() {

};
work.display = function() {

};
projects.display = function() {

};