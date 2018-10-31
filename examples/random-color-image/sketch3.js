
let sharkyPics = [];
let sharks = [];
let colorTest;



function preload() {
  for (let i = 0; i < 15; i++) {
      img = loadImage(`images/blueShark.png`);
    }

}

function setup() {
  createCanvas(700, 600);

  for (let i = 0; i < 15; i++) {
      sharkyPics[i] = loadImage(`images/blueShark.png`);
    }

  colorTest = color(random(0,255), random(0,255), random(0,255),255);

  for (let i = 0; i < sharkyPics.length; i++){
    let s = new Shark(random(10,width-200),random(10,height-200),color(random(0,255), random(0,255), random(0,255),255));
    sharks.push(s);
  }

}

function draw() {
  for (let i = 0; i < sharks.length; i++) {
	      sharks[i].drawShark();
        sharks[i].colorShark();

	  }

}

class Shark {

	constructor(x,y, colorTest,pic){
		    this.x = x;
    		this.y = y;
        this.colorTest = colorTest;
        this.pic = random(sharkyPics);
	}

	drawShark(){
    	image(this.pic, this.x, this.y);
	}

	colorShark(){
    this.pic.loadPixels();
    for (let i = 0; i < 4 * (this.pic.width * this.pic.height); i += 4) {
      if (this.pic.pixels[i+2]>=120 && this.pic.pixels[i]<=100){
          this.pic.pixels[i] = red(this.colorTest);
          this.pic.pixels[i+1] = green(this.colorTest);
          this.pic.pixels[i+2] = blue(this.colorTest);
          this.pic.pixels[i+3] = alpha(this.colorTest);
        }
      }
      this.pic.updatePixels();
  }

}
