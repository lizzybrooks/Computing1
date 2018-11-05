let img;
<<<<<<< HEAD
let colorTest;
let randomColor;
let s;
let s2


function preload() {

=======
let s;
let s2;


function preload() {
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699
  img = loadImage("images/blueShark.png");
}

function setup() {
  createCanvas(700, 600);
<<<<<<< HEAD

 s = new Shark(200,200,color(255,0,0,255),img);
s2 = new Shark(300,200,color(0,255,0,255),img);
=======
  s = new Shark(200,200,color(255,0,0,255),img);
  s2 = new Shark(300,200,color(0,200,100,255),img);
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699

}

function draw() {
<<<<<<< HEAD
  s.colorShark();
  s.drawShark();

  s2.colorShark();
  s2.drawShark();
=======
  s.drawShark();
  s.colorShark();

  s2.drawShark();
  s2.colorShark();
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699

}

class Shark {

<<<<<<< HEAD
	constructor(x,y,colorTest,pic){ 
=======
	constructor(x,y,colorTest,pic){
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699
		    this.x = x;
    		this.y = y;
        this.colorTest = colorTest;
        this.pic = pic;
	}
<<<<<<< HEAD

	drawShark(){
    		image(this.pic, this.x, this.y);
	}

	colorShark(){
    this.pic.loadPixels();
    for (var i = 0; i < 4 * (this.pic.width * this.pic.height); i += 4) {
=======
	drawShark(){
    	image(this.pic, this.x, this.y);
	}

	colorShark(){
  //  this.colorTest = color(random(0,255), random(0,255), random(0,255),255);

    this.pic.loadPixels();
    for (let i = 0; i < 4 * (this.pic.width * this.pic.height); i += 4) {
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699
      if (this.pic.pixels[i+2]>=120 && this.pic.pixels[i]<=100){
          this.pic.pixels[i] = red(this.colorTest);
          this.pic.pixels[i+1] = green(this.colorTest);
          this.pic.pixels[i+2] = blue(this.colorTest);
          this.pic.pixels[i+3] = alpha(this.colorTest);
        }

      }
      print(this.colorTest);
      this.pic.updatePixels();
<<<<<<< HEAD
	}


=======

  }
>>>>>>> a0ef4a8f977918f5719f5ab05ed446fc8a86b699
}
