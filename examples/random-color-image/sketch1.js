
let img;
let img2;
let colorTest;


function preload() {
  img = loadImage("images/blueShark.png");
  img2 = loadImage("images/blueShark.png");

}

function setup() {
    createCanvas(700, 600);
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


      colorTest = color(random(0,255), random(0,255), random(0,255),255);

      img2.loadPixels();
      for (var i = 0; i < 4 * (img2.width * img2.height); i += 4) {
        if (img2.pixels[i+2]>=120 && img2.pixels[i]<=100){
            img2.pixels[i] = red(colorTest);
            img2.pixels[i+1] = green(colorTest);
            img2.pixels[i+2] = blue(colorTest);
            img2.pixels[i+3] = alpha(colorTest);
          }

        }
        print(colorTest);
        img2.updatePixels();
        image(img2, random(0,width-200), random(0,height-300));

}

function draw() {





}
