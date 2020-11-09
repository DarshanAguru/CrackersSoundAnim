

var volhistory = [];
var amp;
var song;
var button;

function preload(){
  song = loadSound('diwali.mp3')
}

function toggleSong(){
  if(song.isPlaying()) {
    song.pause();
  }else{
    song.play();
    amp = new p5.Amplitude();  }

  
}

function setup() {
 createCanvas(800,450);
  angleMode(DEGREES);
  colorMode(HSB);
  song.play(); 
  amp = new p5.Amplitude();
    button = createButton('toggle');
  button.mousePressed(toggleSong);
  
 
}

function draw() {  
  background(0);
   
  
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  strokeWeight(2);
  noFill();
   
  translate(width/2, height/2);
  beginShape();
 
  
  for(var i = 0; i < 360; i++){
     stroke(i, 255, 255);
    var r = map(volhistory[i], 0, 0.25, 50, 300);
    var x = r * sin(i*2);
    var y =  r * cos(i*1);
    
    

    vertex(x, y);
 

  
  } 
  endShape();

  
  
    if (volhistory.length > 360){
    volhistory.splice(0,1);
  }
  
  
 

}