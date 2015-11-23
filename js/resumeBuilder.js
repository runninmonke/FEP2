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
	        "dates": 2008,
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
	    "dates": "November 2013 - Present",
	    "description": "Assist callers with reservation requests, changes, and cancellations following sales techniques and company policies. Address caller concerns and service issues, and escalate according to proper procedures."
	}]
};

var projects = {
	"projects": [{
		"title": "Portfolio Webpage",
	    "dates": "November 2015",
	    "description": "An website with a sampling of projects I've completed.",
	    "images": ["images/proj1-sm.jpg"]
	}]
};

//Display methods declared seperately since functions aren't valid JSON
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


	$("#header").append(HTMLskillsStart);
	bio.skills.forEach(function(skill, i, skills) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
	})
};

education.display = function() {
	education.schools.forEach(function(school, i, schools) {
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	});
	if (education.onlineCourses) {
		$("#education").append("<br>" + HTMLonlineClasses);
		education.onlineCourses.forEach(function(course, i, courses) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedDates = HTMLonlineDates.replace("%data%", course.date);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(formattedTitle + formattedSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedURL);
		});
	}
};

work.display = function() {
	work.jobs.forEach(function(job, i, jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	});
};

projects.display = function() {
	projects.projects.forEach(function(project, i, projects) {
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		project.images.forEach(function(image, i, images) {
			var formattedImage = HTMLprojectImage.replace("%data%", project.images);
			$(".project-entry:last").append(formattedImage);
		});
	});
};

bio.display();
education.display();
work.display();
projects.display();