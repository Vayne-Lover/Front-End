/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
	"name":"Vayne",
	"role":"Deep Learning Engineer",
	"picture'":"../images/fry.jpg"
};

var work={};
work.position="Developer";
work.employer="Udacity";
work.years=3;

var education={};
education.name="University";
education.years="2015-2017";
education.city="Zhejiang,Hangzhou";

$("#main").append(work.position);
$("#main").append(education.name);

$("#header").append(HTMLheaderName.replace("%data%","Vayne Lover"));
$("#header").prepend(HTMLheaderRole.replace("%data%","Deep Learning"));
					