let colorTest;
let jomyHorse;
let jomyjunkyard;

function preload() {

  jomyHorse = loadImage("images/jomy.jpg");
  // jomyjunkard = loadImage("images/jomyjunkyard.jpg")
}

function setup(){
   createCanvas(800,800);
   image(jomyHorse, 20, 20,170,220); //draw the image to the canvas
   // image(jomyjunkyard, 100,100,150,200);
   colorTest = color(0, 250, 0,255);




}

function draw(){
jomyHorse.loadPixels();
  for (var i = 0; i < 4 * (width * height / 2); i += 4) {
    if (jomyHorse.pixels[i+2]>=120 && jomyHorse.pixels[i]<=100){
       jomyHorse.pixels[i] = red(colorTest);
       jomyHorse.pixels[i+1] = green(colorTest);
       jomyHorse.pixels[i+2] = blue(colorTest);
       jomyHorse.pixels[i+3] = alpha(colorTest);
    }

    // jomyHorse.pixels[i + 1] = green(colorTest);
    // jomyHorse.pixels[i + 2] = blue(colorTest);
    // jomyHorse.pixels[i + 3] = alpha(colorTest);
   }
  jomyHorse.updatePixels();
  image(jomyHorse, 200, 20,260,300);

}
