let currentQuestion = 0;
let score = 0;
function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
window.onload = timedRefresh(60000); 
  let timeleft = 60;
  let downloadTimer = setInterval(function(){
  document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  }
}, 1000);
let questions = [
   {
	"question": "What is the Name of the Creator of this Quiz?",
	"a": "Evy",
	"b": "Patrick",
	"c": "Lucas",
	"d": "Steven",
	"image":"images/question.png",
	"answer": "a"
   },
   {
	"question": "Who is the Current President of the U.S.?",
	"a": "You",
	"b": "Rightfully Donald Trump",
	"c": "Joe Biden",
	"d": "George Clooney",
	"image":"images/trump.jpeg",
	"answer": "c"
   },
   {
	"question": "Is There Food Allowed in the Computer Lab",
	"a": "Yes, always",
	"b": "As long as you have permission",
	"c": "If you hide it no one will know",
	"d": "No absolutely not, no food in the computer lab",
	"image":"images/comp.jpeg",
	"answer": "d"
   },
   {
	"question": "How Many Chickens are There in the World?",
	"a": "About.....26 billion",
	"b": "About.....7",
	"c": "Which came first the chicken or the egg",
	"d": "About.....7 billion",
	"image":"images/chicken.jpeg",
	"answer": "a"
   },
    {
	"question": "Which Country Consumes the Most Chocolate?",
	"a": "Spain",
	"b": "Germany",
	"c": "North America",
	"d": "Switzerland",
	"image":"images/choco.jpeg",
	"answer": "d"
   },
   {
	"question": "Which Planet is the Hottest?",
	"a": "Venus",
	"b": "Saturn",
	"c": "Mercury",
	"d": "Mars",
	"image":"images/planet.jpeg",
	"answer": "a"
   },
   {
	"question": "How Many Blue Stripes are There on the U.S. Flag?",
	"a": "0",
	"b": "7",
	"c": "13",
	"d": "6",
	"image":"images/US.png",
	"answer": "a"
   },
   {
	"question": "What is France's Northernmost City?",
	"a": "Paris",
	"b": "Dunkirk",
	"c": "Lyon",
	"d": "Lille",
	"image":"images/tower.jpeg",
	"answer": "b"
   },
    {
	"question": "Sb is the Periodic Symbol of Which Element?",
	"a": "Antimony",
	"b": "Samarium",
	"c": "Seaborgium",
	"d": "Hafnium",
	"image":"images/elem.jpeg",
	"answer": "a"
   },
    {
	"question": "What is the #1 Cookie in the U.S.?",
	"a": "Chips Ahoy!",
	"b": "Milano",
	"c": "Girls Scout Thin Mints",
	"d": "Oreos",
	"image":"images/yum.jpeg",
	"answer": "d"
   }
 ];
 //load the servies worker
 if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 
 function loadQuestion() {
	 
	 if (currentQuestion == 0){
		 closeLightBox();
	 }
	 
	 //load the image
	 let img = document.getElementById("image");
	 let preLoadImg = new Image();
	 preLoadImg.src = questions[currentQuestion].image;
	  
	 preLoadImg.onload = function (){
		 img.width = this.width;
	 }
	 img.style.maxWidth = "80%";
	 img.src = preLoadImg.src;
	 
    // load the question and answers
  document.getElementById("question").innerHTML = questions[currentQuestion].question;
  document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
	document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
	document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
	document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
 } // loadQuestion
 
 
 function markIt(ans) {
	let message = ""
	let message1 = ""
	
	
	//if the answer is correct
	if (ans == questions[currentQuestion].answer) {
		// add 1 if correct
		score = score + 1;
		
		// make sure that the light box is the right color and doesn't revert only to red
		document.getElementById("message").style.backgroundColor = "green";
		
		//display score on webpage
		document.getElementById("score").innerHTML = score + " / " + questions.length;
		
		message = "Good Job :) !!! Your score is  " + score + " / " + questions.length;
		
	}//if end
	else{
		//make light box red when wrong
		document.getElementById("message").style.backgroundColor = "red";
		message = "Oh no! You got that wrong, here's your score " + score + " / " + questions.length;
	}//else end
	
	// show the light box
	//move to the next question
	currentQuestion = currentQuestion + 1; 
	if (currentQuestion >= questions.length){
		if (score >= 5 ){
		message = "You have done great! Your final score is "+ score + " / " + questions.length;
    document.getElementById("message").style.backgroundColor = "green";
    }
    else {
      message = "Ur bad! Your final score is " + score + " / " + questions.length;
      document.getElementById("message").style.backgroundColor = "red";
      //box at top top ask if the player would like to play again
      }
	} 
  else {
	   loadQuestion();
	}
if (currentQuestion >= questions.length){
      let a=document.createElement('a');
        a.href='index.html';

        //then use this code for alert
        if (window.confirm('If you want to try again click OK'))
        {
        a.click();
        };
    }
else{
     loadQuestion();
}
   

	// show the light box
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("message").innerHTML = message;
 }  // markIt


 function closeLightBox(){
	 document.getElementById("lightbox").style.display = "none";
 }

 
 
 
 
 
 
 
 
 
