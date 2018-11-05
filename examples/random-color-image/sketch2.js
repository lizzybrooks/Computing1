let img;
let colorTest;
let randomColor;
let s;
let s2


function preload() {

  img = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);

 s = new Shark(200,200,color(255,0,0,255),img);
s2 = new Shark(300,200,color(0,255,0,255),img);

}

function draw() {
  s.colorShark();
  s.drawShark();

  s2.colorShark();
  s2.drawShark();

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
    this.pic.loadPixels();
    for (var i = 0; i < 4 * (this.pic.width * this.pic.height); i += 4) {
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
