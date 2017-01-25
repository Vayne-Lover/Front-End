/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
	"name":"Vayne",
	"role":"Deep Learning Engineer",
	"picture'":"../images/fry.jpg",
	"welcomeMessage":"Hello",
	"skills":[1,2,3,4,5],
	"contacts":{
		"mobile":111,
		"email":"aaa@qq.com",
		"github":"github",
		"twitter":"twitter",
		"location":"San Franciso"
	}
};

var education={
	"schools":[
		{
			"name":"Nova Southeastern University",
			"location":"Fort Lauderdale, FL",
			"degree":"master",
			"major":["CS"],
			"dates":2013,
			"url":"url"
		},
		{
			"name":"Nova Southeastern University",
			"location":"Fort Lauderdale, FL",
			"degree":"master",
			"major":["CS"],
			"dates":2013,
			"url":"url"	
		}	
		],
	"onlineCourses":[
		{
			"title":"JS",
			"school":"Udacity",
			"dates":2014,
			"url":"url"
		}
	]	
};

var work={
	"jobs":[
		{
			"employer":"Planet",
			"title":"Delivery",
			"dates":"Jan 30-Future",
			"description":"As a young privileged girl in the heart of Demacia's elite, her father tried to convince her of the constabulary's ever-vigilant eye. Young and naive, she truly believed that her world was one of perfect safety, until one night, when a twisted witch took interest in her father. The malevolent woman overcame her father's conciliar guard, then tortured her family before murdering them. The young Shauna escaped only by hiding herself and then fleeing once the hag had departed, plagued by the screams of her loved ones as she ran. A burning hatred was born in her that day, one that could never be denied."
		},
		{
			"employer":"Planet2",
			"title":"Delivery2",
			"dates":"Jul 30-Jan 30",
			"description":"As a young privileged girl in the heart of Demacia's elite, her father tried to convince her of the constabulary's ever-vigilant eye. Young and naive, she truly believed that her world was one of perfect safety, until one night, when a twisted witch took interest in her father. The malevolent woman overcame her father's conciliar guard, then tortured her family before murdering them. The young Shauna escaped only by hiding herself and then fleeing once the hag had departed, plagued by the screams of her loved ones as she ran. A burning hatred was born in her that day, one that could never be denied."
		},
	]
};

var projects={
	"projects":[
		{
			"title":"sample proj 1",
			"dates":"2014",
			"description":"As a young privileged girl in the heart of Demacia's elite, her father tried to convince her of the constabulary's ever-vigilant eye. Young and naive, she truly believed that her world was one of perfect safety, until one night, when a twisted witch took interest in her father. The malevolent woman overcame her father's conciliar guard, then tortured her family before murdering them. The young Shauna escaped only by hiding herself and then fleeing once the hag had departed, plagued by the screams of her loved ones as she ran. A burning hatred was born in her that day, one that could never be denied.",
			"images":[
				"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
				"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg"
			]
		}
	]
};


function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription=HTMLworkDates.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

displayWork();