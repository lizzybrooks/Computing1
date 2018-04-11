function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  mySound = loadSound('doorbell.wav');
}

function setup() {

  createCanvas(400,400);
  mySound.setVolume(0.1);
  mySound.play();



}

function draw(){

  var scribble = new Scribble();              // global mode
  //var scribble = new Scribble( p5Instance );  // instance mode

  stroke(80);
  strokeWeight(3);
  scribble.scribbleLine( 100, 100, 300, 300 );


}
