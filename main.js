x = 0;
y = 0;


draw_apple = "";

apple = "";

var i;  


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);
if(Number.isInteger(to_number))
document.getElementById("status").innerHTML = "The speech has not recognized a number";
draw_apple == "set";
}

function setup() {
  screen_width = window.innerWidth;
  screen_height= window.innerHeight; 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "set";
  }

  For
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    document.getElementById("status").innerHTML = to_number + "Apples drawn";

    speak_data = "Apples drawn";

    speak()
}

function preload() {
  loadimage(apple = "apple.png");
}

function createCanvas() {
  screen_width = "150";
  screen_height="150";
}

canvas.position(0-150);



