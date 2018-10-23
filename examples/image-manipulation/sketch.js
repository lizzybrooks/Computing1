//baby pic used in class example is by ms. brooks. cite url for pics found online
let img;
let colorTest;

//preload will load before setup runs
function preload() {
  img = loadImage("images/jomyjunkyard.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  // background("white");
  image(img, 100, 100,250,350); //draw the image to the canvas
  colorTest = "black";

}

function draw() {
 noStroke();
 fill(colorTest);
 rect(400,100,100,100);


}

function mouseClicked(){
  colorTest = get(mouseX,mouseY);
  print(colorTest);
}
