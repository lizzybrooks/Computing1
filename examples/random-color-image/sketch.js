//baby pic used in class example is by ms. brooks. cite url for pics found online
var img;
let colorTest;
let randomColor;

//preload will load before setup runs
function preload() {
  //this relative file path starts in the same folder as your sketch.
  //In other words, in this example, make a folder called images in the same
  //folder as your sketch file (sketch.js) and then put the image file ("kittens.jpg")
  //inside of that.
  img = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);
  image(img, 0, 0,100,150); //draw the image to the canvas

  for (let sharks = 0; sharks < 3; sharks++){
    colorTest = color(random(0,255), random(0,255), random(0,255),255);

    img.loadPixels();
    for (var i = 0; i < 4 * (img.width * img.height); i += 4) {
      if (img.pixels[i+2]>=120 && img.pixels[i]<=100){
          img.pixels[i] = red(colorTest);
          img.pixels[i+1] = green(colorTest);
          img.pixels[i+2] = blue(colorTest);
          img.pixels[i+3] = alpha(colorTest);
        }

      }
      print(colorTest);
      img.updatePixels();
      image(img, random(0,width-200), random(0,height-300));
  }

  for (let sharks = 0; sharks < 3; sharks++){
    randomColor = color(random(0,255), random(0,255), random(0,255),255);

    img.loadPixels();
    for (var i = 0; i < 4 * (img.width * img.height); i += 4) {
      if (img.pixels[i]>=200){
          img.pixels[i] = red(randomColor);
          img.pixels[i+1] = green(randomColor);
          img.pixels[i+2] = blue(randomColor);
          img.pixels[i+3] = alpha(randomColor);
        }

      }
      print(randomColor);
      img.updatePixels();
      image(img, random(0,width-200), random(0,height-300));
  }

}

function draw() {





}
