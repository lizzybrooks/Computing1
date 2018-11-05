let img;
let colorTest;
let randomColor;
let x = 0;


function preload() {
  img = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);

for(let i=0;i<3;i++){
  colorTest = color(random(0,255), random(0,255), random(0,255),255);

  img.loadPixels();
  for (let i = 0; i < 4 * (img.width * img.height); i += 4) {
    if (img.pixels[i+2]>=120 && img.pixels[i]<=100){
        img.pixels[i] = red(colorTest);
        img.pixels[i+1] = green(colorTest);
        img.pixels[i+2] = blue(colorTest);
        img.pixels[i+3] = alpha(colorTest);
      }


    }
    print(colorTest);
    img.updatePixels();
    image(img, random(0,width-200), random(100,height-300));

    fill(colorTest);
    rect(x,0,100,100);
    x += 100;

  }

}

function draw() {

}
