let img;
let s;
let s2;


function preload() {
  img = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);
  s = new Shark(200,200,color(255,0,0,255),img);
  s2 = new Shark(300,200,color(0,200,100,255),img);

}

function draw() {
  s.drawShark();
  s.colorShark();

  s2.drawShark();
  s2.colorShark();

}

class Shark {

	constructor(x,y,colorTest,pic){
		    this.x = x;
    		this.y = y;
        this.colorTest = colorTest;
        this.pic = pic;
	}
	drawShark(){
    	image(this.pic, this.x, this.y);
	}

	colorShark(){
  //  this.colorTest = color(random(0,255), random(0,255), random(0,255),255);

    this.pic.loadPixels();
    for (let i = 0; i < 4 * (this.pic.width * this.pic.height); i += 4) {
      if (this.pic.pixels[i+2]>=120 && this.pic.pixels[i]<=100){
          this.pic.pixels[i] = red(this.colorTest);
          this.pic.pixels[i+1] = green(this.colorTest);
          this.pic.pixels[i+2] = blue(this.colorTest);
          this.pic.pixels[i+3] = alpha(this.colorTest);
        }

      }
      print(this.colorTest);
      this.pic.updatePixels();

  }
}
