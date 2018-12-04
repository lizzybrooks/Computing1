let me;
let you;
let gravity;

let rectarray = [];

let caught = false;


function setup() {
  frameRate(20);
  createCanvas(1000,1000)
  rectMode(CENTER)

  me = new Rectangles
  you = new Ball(height/2,20,3)
}

function draw() {
  background(0,0,0)

  you.moveBall();
  you.getCaught();
  you.drawBall();

print(caught);

  if (frameCount % 30 == 0) {
      let  r = new Rectangles(random(0,width), height-30, 500, -4);
      rectarray.push(r);
      print(rectarray);
    }

  for (let i = 0; i < rectarray.length; i++) {
  	 	rectarray[i].drawRect();
      rectarray[i].moveRect();
   }
}

class Rectangles{

  constructor(x,y, width, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
      }

	drawRect(){
    		stroke(0);
    		fill("white");
		    rect(this.x,this.y,500,10);
      }

  moveRect(){
    this.x;
    this.y = this.y+ this.speed;
  }
}


class Ball{

  constructor(x,y, speed){
      this.x = x;
      this.y = y;
      this.speed = speed;
    }

  drawBall(){
      stroke(0);
      fill("yellow");
      ellipse(this.x,this.y,30,30);
    }

  moveBall(){
     for (let i = 0; i < rectarray.length; i++) {

        if (keyIsDown(65)){
          this.x -= this.speed;
        }

        if (keyIsDown(68)){
          this.x += this.speed;
        }

        if (this.x>0 && caught == false){
          this.y= this.y+.5;
        }


      }
    }

    getCaught(){
        for (let i = 0; i < rectarray.length; i++) {
          if (this.x >= rectarray[i].x-250 && this.x <= rectarray[i].x+	250 && this.y >= rectarray[i].y-10 && this.y <=rectarray[i].y){
            caught = true;
            this.y = rectarray[i].y-10;
            print("hit rectangle "+[i]+" at y value "+rectarray[i].y);

          }
          else {
            caught = false;
          }

        }
    }
}
