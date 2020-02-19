
var button;
var save_score_save_score_button2;
let playername = localStorage.getItem("highscore_player");
let newname= false;
var inp;
let points= 0;

let savedpoints = localStorage.getItem("highscore_points");
let balls = [];

function setup() {
   createCanvas(1200, 650);
   angleMode(RADIANS);
   frameRate(60);

//highscores storage check system
   if(localStorage){
       if (playername == null){
         print("No high scoring players yet.");
       }

       else {
           print(playername+" has the high score.");
       }

       if (savedpoints == null){
         print("no highscore points yet.")
       }
       else {
         print(savedpoints+ " is the highest score.")
       }
     }
     else{
         print("Sorry, your browser do not support local storage.");
     }


//button creation section
    button = createButton('Click to save name');
    save_score_button2 = createButton('Click to save your score');
    button.position(500, 400);
    save_score_button2.position(500, 400);
    button.size(200,50);
    save_score_button2.size(200,50);
    button.mousePressed(savename);
    save_score_button2.mousePressed(savescore);
    button.hide();
    save_score_button2.hide();

    inp = createInput('Enter your name');
    inp.input(myInputEvent);
    inp.position(550,300);
    inp.size(100,20);
    inp.hide();
}

function draw(){
  field();
  scoreboard();

	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
      balls[i].drawTriangle();
      balls[i].score();
      if(keyCode===13){
        balls[i].kickBall();
      }
	  }

    if (frameCount >= 1800){
      gameOverScreen();

    }

}

function keyPressed(){
  if (keyCode === 32){ //spacebar
     let  b = new Ball(random(400,800),random(400,600),0);
     balls.push(b);
     console.log(balls);
   }
  if (keyCode === 37){ //left arrow
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimLeft();
      }
  }
  if (keyCode === 39){ //right arrow
    for (let i = 0; i < balls.length; i++) {
        balls[i].aimRight();
      }
  }

  if (keyCode === 9){//if you push tab

   location.reload();

  }

  if (keyCode === 8){ // if you push DELETE/Backspace
    localStorage.clear();//clear high scores -- keep this secret!
    location.reload();
  }
}


function gameOverScreen(){
  background(0);
  textSize(100);
  stroke(255);
  fill(255);
  textAlign(CENTER);
  text("Game over",600,150);
  textSize(50);
  text("SCORE = " + points,600,275);
  text("Press tab to retry", 600,525);
  save_score_button2.show();
  inp.show();
}

function field(){
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
}

function scoreboard(){
  stroke(0);
  strokeWeight(2);
  fill(0);
  textSize(20);
  text("score = " + points,100,100);
  if(savedpoints>0){

    text("highest score = " + savedpoints +" by "+ playername,900,100);
  }

}


function myInputEvent() {

  console.log('you are typing: ', this.value());
  playername = this.value();

}

function savename() {
  fill(0);
  text(playername,600,500);

}

function savescore() {
    background (134);
    text("SCORE = " + points,600,200);
    text("Enter your name ",600,100);
    save_score_button2.position(1000, 1000);
    button.show();
    if(savedpoints<points){
      localStorage.setItem("highscore_player", playername);
      localStorage.setItem("highscore_points", points);
    }



}

class Ball {

	constructor(x,y, angle){
		    this.x = x;
    		this.y = y;
        this.angle = angle;
	}

	drawTriangle(){  // draw a triangle on the screen at x,y
    		stroke(0);
    		fill("red");
        push();//save canvas state
        translate(this.x,this.y); //translate to this.x, this.y
        rotate(this.angle/PI); // rotate
        triangle(0, 0, 10, -20, 20, 0); // draw the triangle at 0,0- because you've moved the center
        pop(); // pop back to normal
	}

  score(){
         if (this.x >= 555 && this.x <= 645 && this.y <= 150 && this.y>= 145){
             points = points + 3;

                if (points >= savedpoints) {
             localStorage.setItem('points', points);
          }
         }
       }

  drawBall(){  // draw a football on the screen at x,y
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

  aimLeft(){ //change the trajectory angle
    this.angle = this.angle - 1;
    print(this.angle);
  }

  aimRight(){ //change the trajectory angle
    this.angle = this.angle+1;
    print(this.angle);
  }

	kickBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+this.angle;
		this.y = this.y-5;
	}
}
