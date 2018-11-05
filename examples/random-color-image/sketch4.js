let img;
let img2;
let colorTest;

function preload() {
  img = loadImage("images/blueShark.png");
  img2 = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);

  for (let sharks = 0; sharks < 30; sharks++){
    colorTest = color(random(0,255), random(0,255), random(0,255),255);

    img.loadPixels();
    img2.loadPixels();;
    for (let i = 0; i < 4 * (img.width * img.height); i += 4) {
      if (img.pixels[i+2]>=120 && img.pixels[i]<=100){
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
}
