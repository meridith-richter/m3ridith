//Array of images that will appear in the slideshow
slideshow_images=[
	"web_assets/sightlines_1.png",
	"web_assets/sightlines_2.png",
	"web_assets/bookmark.png",
	"web_assets/sightlines_full.png",
	"web_assets/mhcam_hero.png",
	"web_assets/judaica.png",
	"web_assets/qt_poetry.png"
];

//Array of links that your slideshow images will link to.  Should be in the same order as the images.
slideshow_links=[
	"web_assets/marking_molding_sightlines_4.pdf",
	"web_assets/finding_familiar_sightlines_5.pdf",
	"web_assets/Bookmark.pdf",
	"web_assets/sightlines_tours_poster_full.pdf",
	"web_assets/mhcam_hero.pdf",
	"web_assets/judaica_pop_up.pdf",
	"web_assets/QT_Poetry_and_Prose_Event.pdf"
]

//Array of images that will appear in the slideshow
slideshow_images2=[
	"web_assets/#WeekendVibes.png",
	"web_assets/#MusicMonday.png",
	"web_assets/#TipsTuesday.png",
	"web_assets/#WellnessWednesday.png",
	"web_assets/#ThankfulThursday.png.png",
	"web_assets/#FirstLineFriday.png",
	"web_assets/dot&dash_calendar.pdf"
];

//Array of links that your slideshow images will link to.  Should be in the same order as the images.
slideshow_links2=[
	"web_assets/#WeekendVibes.png",
	"web_assets/#MusicMonday.png",
	"web_assets/#TipsTuesday.png",
	"web_assets/#WellnessWednesday.png",
	"web_assets/#ThankfulThursday.png.png",
	"web_assets/#FirstLineFriday.png",
	"web_assets/dot&dash_calendar.pdf"
]

var counter;
counter = 0;

document.getElementById("slideshow").src = slideshow_images[counter];
document.getElementById("slideshowlink").href = slideshow_links[counter];

document.getElementById("slideshow2").src = slideshow_images2[counter];
document.getElementById("slideshowlink2").href = slideshow_links2[counter];

function slideshownext(){

	if (counter < slideshow_images.length-1){
		counter++;
	}else{
		counter = 0;
	}

	document.getElementById("slideshow").src = slideshow_images[counter];
	document.getElementById("slideshowlink").href = slideshow_links[counter];
}


function slideshownext2(){

	if (counter < slideshow_images2.length-1){
		counter++;
	}else{
		counter = 0;
	}
	
	document.getElementById("slideshow2").src = slideshow_images2[counter];
	document.getElementById("slideshowlink2").href = slideshow_links2[counter];
}

function slideshowprev(){
	
	if (counter > 0){
		counter--;
	}else{
		counter = slideshow_images.length-1;
	}

	document.getElementById("slideshow").src = slideshow_images[counter];
	document.getElementById("slideshowlink").href = slideshow_links[counter];
}

function slideshowprev2(){
	
	if (counter > 0){
		counter--;
	}else{
		counter = slideshow_images2.length-1;
	}
	
	document.getElementById("slideshow2").src = slideshow_images2[counter];
	document.getElementById("slideshowlink2").href = slideshow_links2[counter];
}
