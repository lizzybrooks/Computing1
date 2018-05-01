// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/2O3nm0Nvbi4

var song;
var fft;
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('triangle-song.mp3');
}

function setup() {
  createCanvas(256, 256);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  var spectrum = fft.analyze();
  console.log(spectrum[88]);

  background(0);

  // drum
  stroke(255);
  fill(0);
  ellipse(100,100,100,100)

  //mallet
  strokeWeight(5);
  line(mouseX-10,mouseY-10, mouseX+10,mouseY+10);


  if (spectrum[88]>=100 && mouseX>=100 && mouseX<=200 && mouseY>=100 &&mouseY<=200){
    fill("pink");
    ellipse(100,100,100,100);
  }
  // else{
  //   background(0);
  // }


  // translate(width / 2, height / 2);
  // //beginShape();
  // for (var i = 0; i < spectrum.length; i++) {
  //   var angle = map(i, 0, spectrum.length, 0, 360);
  //   var amp = spectrum[i];
  //   var r = map(amp, 0, 256, 20, 100);
  //   //fill(i, 255, 255);
  //   var x = r * cos(angle);
  //   var y = r * sin(angle);
  //   stroke(i, 255, 255);
  //   line(0, 0, x, y);
  //   //vertex(x, y);
  //   //var y = map(amp, 0, 256, height, 0);
  //   //rect(i * w, y, w - 2, height - y);
  // }
  // //endShape();


}
