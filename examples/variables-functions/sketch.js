
/*
function setup() {
  createCanvas(600,400);
  background(80);

}

function draw() {
fill(200,10,0);


for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
}


bottle(100,200);
bottle(120,200);
bottle(150,200);

}

function bottle(x,y){

  rect (x,y,20,40,5);
  rect (x+5,y-15,10,15,2);


}
*/

function setup() {
createCanvas(800,500);
background(240);

}

function draw() {
    background(240);

  textSize(42);
  text(mouseX + " times two equals", 80,200);
  text(multiplyByTwo(mouseX), 550,200);

}

function multiplyByTwo(num)
{
   return num * 2;

}
