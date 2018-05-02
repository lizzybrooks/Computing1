
//create an empty array called balls
let balls = [];
//let angle = 0;

function setup() {
   createCanvas(1200, 650);
  angleMode(RADIANS);

}

function draw(){
  background(38, 153, 45);
  stroke(252, 239, 60);
  strokeWeight(5);
    line(553.75,150,646.25,150);
    line(600,150,600,200);
    line(553.75,150,553.75,50);
    line(646.25,150,646.25,50);
    stroke(255);
    strokeWeight(2);
    line(200,203,1000,203);
    line(200,203,80,650);
    line(1000,203,1120,650);
    line(180,282.4,1020,282.4);
    line(158,361.8,1042,361.8);
    line(136,441.2,1064,441.2);
    line(116,520.6,1084,520.6);
    line(94,600,1106,600);

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].drawTriangle();

      if(keyCode===13){
        balls[i].kickBall();
      }


	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  if (keyCode === 32){ //every time you push a key, make a new ball from the ball class and add it to the balls array
     let  b = new Ball(random(400,800),random(400,600),0);
     balls.push(b);
     console.log(balls);
   }
  if (keyCode === 37){

    for (let i = 0; i < balls.length; i++) {
        balls[i].aimLeft();
      }

  }
  if (keyCode === 39){

    for (let i = 0; i < balls.length; i++) {
        balls[i].aimRight();
      }

  }

}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y, angle){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.angle = angle;
	}

	drawTriangle(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
        push();
        translate(this.x,this.y);
        rotate(this.angle/PI);
        triangle(0, 0, 10, -20, 20, 0);
        pop();
      //  print(this.x, this.y);
	}
  drawBall(){
// draw a ball on the screen at x,y
    		stroke(0);
        strokeWeight(1);
    		fill(135, 67, 8);
		    ellipse(this.x,this.y,21,33);
         stroke(0);
            strokeWeight(0.5);
            line(this.x,this.y+16.5,this.x,this.y-16.5);
        stroke(255);
        strokeWeight(1.5);
        line(this.x,this.y+6,this.x,this.y-6);
        strokeWeight(1);
              line(this.x+2,this.y+6,this.x-2,this.y+6);
        line(this.x+2,this.y+4,this.x-2,this.y+4);
        line(this.x+2,this.y+2,this.x-2,this.y+2);
        line(this.x+2,this.y,this.x-2,this.y);
          line(this.x+2,this.y-2,this.x-2,this.y-2);
          line(this.x+2,this.y-4,this.x-2,this.y-4);
            line(this.x+2,this.y-6,this.x-2,this.y-6);
	}

  aimLeft(){ //update the location of the ball, so it moves across the screen
    this.angle = this.angle - 1;
    print(this.angle);
  }

  aimRight(){ //update the location of the ball, so it moves across the screen
    this.angle = this.angle+1;
    print(this.angle);
  }

	kickBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.angle;
		this.y = this.y-5;
	}


}
