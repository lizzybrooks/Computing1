let square;
let testRight;

function setup(){
  createCanvas(400,400);
  square = new sprite (0,0);
  //loadPixels();
//  print(pixels);
}

function draw(){
  background(220);

  strokeWeight(30);
  stroke("black");
  line(width/2,0,width/2,height);
  square.drawSprite();
  square.moveSprite();
  square.detectWall();



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
		 if(keyIsDown(RIGHT_ARROW)&& testRight[1]>=200){
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

  detectWall(){

     testRight = get(this.x+22,this.y);
     fill(testRight);
     print(testRight);
     ellipse(100,100,100,100);



    // loadPixels();
    // for(var i=4*400*mouseY;i<4*400*300;i+=4) {
    //   if(pixels[i]<=10){
    //     pixels[i] = 0; //red
    //     pixels[i+1] = 255; //green
    //     pixels[i+2] = 0; //blue
    //     pixels[i+3] = 255; //alpha (transparency - works with PNGs, not JPGs)
    //   }
    //
    // }
    // updatePixels();

  }


}
