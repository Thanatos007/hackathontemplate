var input = document.getElementById("myText");
var button = document.getElementById("mybutton");
var clock = document.getElementById("clock");
var totalTime = 120;
var timeRemaining = totalTime;
var ship = document.getElementById("ship");
var timeinterval =setInterval(updateClock,1000);
var planets = [
{
	name: 'mercury',
	image:'http://www.edu.pe.ca/southernkings/Pictures/mercury.gif',
	text: 'Y M K R R E Q U W C'
},

{
	name:'venus',
	image:'https://lh3.ggpht.com/_5ngzwsqMfCbPgRRPkxDOG0DjAUBTXjJbHH2e0aWPQD6QK4u9pWjPPiAATJDbQ8MLSoQ=w300',
	text:'R T E U S N G M B V'
},

{
	name: 'earth',
	image: 'https://dmiessler.cachefly.net/images/earth.jpg.png',
	text: 'E J T M S R T A I G H'
},

{
	name: 'mars',
	image:'http://www.zaxtor.net/Mars.png',
	text:'G I O M R A D K S M'
},

{
	name: 'jupiter',
	image:'http://www.zaxtor.net/jupiter.png',
	text:'Q W E R J S D U P I T'
},

{
	name: 'saturn',
	image:' http://www.zaxtor.net/Saturn.png',
	text:'F S F A F T F U W W F R F N D'
},

{
	name: 'uranus',
	image:'http://img3.findthebest.com/sites/default/files/600/media/images/t2/Uranus_4394249.png',
	text:'Z U E R Q A N W U D S A D'
},

{
	name: 'neptune',
	image:'http://space-facts.com/wp-content/uploads/neptune-transparent-300x300.png',
	text:'Q V N S P E T U R N E '
},

{
	name:'pluto',
	image:' http://www.zaxtor.net/pluto.png',
	text: 'Q P E L U W A T C O X'
}

];

var planetimages = document.getElementById('planetimage');
var planettext = document.getElementById('scrambletext');
var planetindex= 0;

button.addEventListener("click", function(event){
	if (input.value.toLowerCase() === planets[planetindex].name){
		window.confirm("Correct!");
		console.log ('Correct!');
		planetindex = planetindex + 1;
		if(planetindex === 9){
		window.location.replace('victory.html');	
		}
		loadquestion();
	} else {
		console.log('wrong');
		window.confirm('Wrong');
		timeRemaining = timeRemaining - 30;
	}
	input.value = "";
	
});


function loadquestion(){
planetimages.src=planets[planetindex].image;
planettext.innerHTML=planets[planetindex].text;
}

loadquestion();

function victory(){
	if(planetindex === 9){
		window.confirm('Victory!');
		planetindex = 0;
	}
}

function loss(){
	if(timeRemaining === 0){
		window.confirm('You Lose!')
	}
 	
}
	






function updateClock(){
	var seconds = timeRemaining%60;
	
	if (seconds === 0) {
		seconds = '00';
	}
	
	if (seconds < 10 && seconds !== '00') {
		seconds = '0' + seconds;
	}
	
	clock.innerHTML= Math.floor(timeRemaining/60) +':'+ seconds;
	movingship();
	if(timeRemaining<=0){
		clearInterval(timeinterval);
		window.location.replace('loss.html');
	} else {
		timeRemaining=timeRemaining-1;
	}
}
function movingship(){
	var percent= (timeRemaining/totalTime)*100;
	percent=Math.floor(percent);
	ship.style.left = percent +"%";
}



