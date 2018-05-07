let square;

function setup(){
  createCanvas(400,400);
  square = new sprite (0,0);
  loadPixels();
  print(pixels);
}

function draw(){
  background(220);

  strokeWeight(30);
  stroke("black");
  line(width/2,0,width/2,height);
  square.drawSprite();
  square.moveSprite();
}


class sprite {

  constructor(x,y){
		    this.x = x;
    		this.y = y;
        // this.canvasx = canvasX;
        // this.canvasy = canvasY;
      }

  drawSprite(){
        strokeWeight(2);
        fill("blue");
    		rect(this.x,this.y,20,20);

	}

	//update the location of the ball, so it moves across the screen
	moveSprite(){
		 if(keyIsDown(RIGHT_ARROW)){
       this.x = this.x + 10;
     }
     else if (keyIsDown(LEFT_ARROW)){
       this.x = this.x - 10;
     }
     else if (keyIsDown(DOWN_ARROW)){
       this.y = this.y + 10;
     }
     else if (keyIsDown(UP_ARROW)){
       this.y = this.y - 10;
    }
   }

}
