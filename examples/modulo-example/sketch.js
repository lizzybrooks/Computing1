
/*The Modulus operator! Remember in math when you didn't know how to use decimals, and you used to divide things
like 5%4= 1, remainder 1? Modulus is that, the remainder.

*/


var a = 5 % 4;            // Sets 'a' to 1
var b = 125 % 100;        // Sets 'b' to 25
var c = 285.5 % 140.0;  // Sets 'c' to 5.5
var d = 30.0 % 33.0;    // Sets 'd' to 30.0



function setup() {
  createCanvas(800, 800);
  for (var row = 0; row <= 5; row++) {
    push(); //save state of canvas
    console.log("row " + row);
    for (var col = 0; col <= 3; col++) {

      if (col%5==1){
      fill(200,100,0,50);
      }
      else{
        fill(0);
      }

      rect(0, 0, 20, 30);
      translate(75, 0); //translate in X (left-right)
      console.log("drawing shape in row: " + row + " and column: " + col);
    }
    pop(); //restore state of canvas before the x translations
    translate(0, 50); //translate in Y (down-up)
  }
}

function draw() {
}
