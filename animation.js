// variables

//timeline
var about_timeline=document.getElementById("about_timeline");
var education_timeline=document.getElementById("education_timeline");
var experience_timeline=document.getElementById("experience_timeline");
var projects_timeline=document.getElementById("projects_timeline");
var other_timeline=document.getElementById("others_timeline");
var skills_timeline=document.getElementById("skills_timeline");

//cards
var summary=document.getElementById("summary");
var education=document.getElementById("education");
var experience=document.getElementById("experience");
var projects=document.getElementById("projects");
var others=document.getElementById("others");
var skills=document.getElementById("skills");

var cllg=document.getElementById("college");

//others



//links

var linkedin=document.getElementById("linkedin");
var github=document.getElementById("github");

// doms

// onload

document.body.onload = function() {
  type_effect();
  

}


//onclicks
about_timeline.onclick=function() {

	summary.style.display="block";
	education.style.display="none";
	experience.style.display="none";
	projects.style.display="none";
	others.style.display="none";
	skills.style.display="none";
}


education_timeline.onclick=function() {
	summary.style.display="none";
	education.style.display="block";
	experience.style.display="none";
	projects.style.display="none";
	others.style.display="none";
	skills.style.display="none";

}

experience_timeline.onclick=function() {
	summary.style.display="none";
	education.style.display="none";
	experience.style.display="block";
	projects.style.display="none";
	others.style.display="none";
	skills.style.display="none";
}

projects_timeline.onclick=function() {
	summary.style.display="none";
	education.style.display="none";
	experience.style.display="none";
	projects.style.display="block";
	others.style.display="none";
	skills.style.display="none";
}

others_timeline.onclick=function() {
	summary.style.display="none";
	education.style.display="none";
	experience.style.display="none";
	projects.style.display="none";
	others.style.display="block";
	skills.style.display="none";
}

skills_timeline.onclick=function() {
	summary.style.display="none";
	education.style.display="none";
	experience.style.display="none";
	projects.style.display="none";
	others.style.display="none";
	skills.style.display="block";
}

//functions

function social_story(link) {
	setTimeout(rotator,5000);
	window.open(link);
}

//setTimeout(function(){ alert("Hello"); }, 3000);

function title_animation(title) {
	
}

function type_effect(paragraph) {

}

function shine_glass(div) {

}


// paragraph
var para=document.getElementById("para");
var speed=10;
var texts="Knowledge on web technologies as well as Machine Learning with Python and Django Development."
var i=0;
function type_effect(){
if (i < texts.length) {
    para.innerHTML += texts.charAt(i);
    i++;
    setTimeout(type_effect, speed);
  }
  }

// window.onload = function () {
// 	$(".portfolio")
// 	type_effect();
// }

var main=document.getElementsByTagName("main");

linkedin.onclick=function() {
	

window.open('https://www.linkedin.com/in/kirttivushan-talukdar-57560b1a4/', '_blank');

}

github.onclick=function() {
window.open('https://github.com/KirttiVushan', '_blank');
}

