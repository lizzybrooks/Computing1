//By Diego Loeb
//help from p5 reference

let distance = 92;

function setup(){
  createCanvas(1472,2520); //set canvas size
  scale(4);
  background(0,20,122); //set background color
  // grid();



  for (let i = 0; i<3; i++){ //repeat function 3 times
       circles();
       distance = distance + 92; //distance between functions = 92
   }

   for (let i = 0; i<2; i++){ //repeat function 2 times
        minicircles();
        distance = distance + 92; //distance between functions = 92
    }

    for (let i = 0; i<2; i++){ //repeat function 2 times
         rectangles();
         distance = distance + 322; //distance between functions = 322
     }

}

function draw(){
  scale(4);
  strokeWeight(2);
  stroke(255);
  line(43,0,43,630);
  line(325,0,325,630);
  line(49,0,49,630);
  line(319,0,319,630);
  strokeWeight(1);
  line(18.5,0,18.5,630);
  line(27.5,0,27.5,630);
  line(349.5,0,349.5,630);
  line(340.5,0,340.5,630);
  fill(255);
  ellipse(23,0,30,30);
  ellipse(345,0,30,30);
  ellipse(23,45,30,30);
  ellipse(345,45,30,30);
  ellipse(23,90,30,30);
  ellipse(345,90,30,30);
  ellipse(23,135,30,30);
  ellipse(345,135,30,30);
  ellipse(23,180,30,30);
  ellipse(345,180,30,30);
  ellipse(23,225,30,30);
  ellipse(345,225,30,30);
  ellipse(23,270,30,30);
  ellipse(345,270,30,30);
  ellipse(23,315,30,30);
  ellipse(345,315,30,30);
  ellipse(23,360,30,30);
  ellipse(345,360,30,30);
  ellipse(23,405,30,30);
  ellipse(345,405,30,30);
  ellipse(23,450,30,30);
  ellipse(345,450,30,30);
  ellipse(23,495,30,30);
  ellipse(345,495,30,30);
  ellipse(23,540,30,30);
  ellipse(345,540,30,30);
  ellipse(23,585,30,30);
  ellipse(345,585,30,30);
  ellipse(23,630,30,30);
  ellipse(345,630,30,30);
  fill(0,20,122);
  ellipse(23,0,15,15);
  ellipse(345,0,15,15);
  ellipse(23,45,15,15);
  ellipse(345,45,15,15);
  ellipse(23,90,15,15);
  ellipse(345,90,15,15);
  ellipse(23,135,15,15);
  ellipse(345,135,15,15);
  ellipse(23,180,15,15);
  ellipse(345,180,15,15);
  ellipse(23,225,15,15);
  ellipse(345,225,15,15);
  ellipse(23,270,15,15);
  ellipse(345,270,15,15);
  ellipse(23,315,15,15);
  ellipse(345,315,15,15);
  ellipse(23,360,15,15);
  ellipse(345,360,15,15);
  ellipse(23,405,15,15);
  ellipse(345,405,15,15);
  ellipse(23,450,15,15);
  ellipse(345,450,15,15);
  ellipse(23,495,15,15);
  ellipse(345,495,15,15);
  ellipse(23,540,15,15);
  ellipse(345,540,15,15);
  ellipse(23,585,15,15);
  ellipse(345,585,15,15);
  ellipse(23,630,15,15);
  ellipse(345,630,15,15);
}

function circles(){ //draw main circles
   strokeWeight(0);
   fill(255);
   ellipse(distance,45,72,72);
   fill(0,20,122);
   ellipse(distance,45,55,55);
   fill(255);
   ellipse(distance,45,40,40);
   fill(0,20,122);
   ellipse(distance,45,25,25);
   fill(255);
   ellipse(distance,135,72,72);
   fill(0,20,122);
   ellipse(distance,135,55,55);
   fill(255);
   ellipse(distance,135,40,40);
   fill(0,20,122);
   ellipse(distance,135,25,25);
   fill(255);
   ellipse(distance,225,72,72);
   fill(0,20,122);
   ellipse(distance,225,55,55);
   fill(255);
   ellipse(distance,225,40,40);
   fill(0,20,122);
   ellipse(distance,225,25,25);
   fill(255);
   ellipse(distance,315,72,72);
   fill(0,20,122);
   ellipse(distance,315,55,55);
   fill(255);
   ellipse(distance,315,40,40);
   fill(0,20,122);
   ellipse(distance,315,25,25);
   fill(255);
   ellipse(distance,405,72,72);
   fill(0,20,122);
   ellipse(distance,405,55,55);
   fill(255);
   ellipse(distance,405,40,40);
   fill(0,20,122);
   ellipse(distance,405,25,25);
   fill(255);
   ellipse(distance,495,72,72);
   fill(0,20,122);
   ellipse(distance,495,55,55);
   fill(255);
   ellipse(distance,495,40,40);
   fill(0,20,122);
   ellipse(distance,495,25,25);
   fill(255);
   ellipse(distance,585,72,72);
   fill(0,20,122);
   ellipse(distance,585,55,55);
   fill(255);
   ellipse(distance,585,40,40);
   fill(0,20,122);
   ellipse(distance,585,25,25);
 }

 function minicircles(){ //draw mini circles
   stroke(255);
   strokeWeight(2);
   fill(0,20,122);
   ellipse(distance - 230,0,60,60);
   fill(255);
   ellipse(distance - 230,0,30,30);
   fill(0,20,122);
   ellipse(distance - 230,90,60,60);
   fill(255);
   ellipse(distance - 230,90,30,30);
   fill(0,20,122);
   ellipse(distance - 230,180,60,60);
   fill(255);
   ellipse(distance - 230,180,30,30);
   fill(0,20,122);
   ellipse(distance - 230,270,60,60);
   fill(255);
   ellipse(distance - 230,270,30,30);
   fill(0,20,122);
   ellipse(distance - 230,360,60,60);
   fill(255);
   ellipse(distance - 230,360,30,30);
   fill(0,20,122);
   ellipse(distance - 230,450,60,60);
   fill(255);
   ellipse(distance - 230,450,30,30);
   fill(0,20,122);
   ellipse(distance - 230,540,60,60);
   fill(255);
   ellipse(distance - 230,540,30,30);
   fill(0,20,122);
   ellipse(distance - 230,630,60,60);
   fill(255);
   ellipse(distance - 230,630,30,30);
 }

 function rectangles(){ //draw rectangles
   strokeWeight(0);
   fill(255);
  rect(distance - 533.5,19.5,9,6);
  rect(distance - 533.5,64.5,9,6);
  rect(distance - 533.5,109.5,9,6);
  rect(distance - 533.5,154.5,9,6);
  rect(distance - 533.5,199.5,9,6);
  rect(distance - 533.5,244.5,9,6);
  rect(distance - 533.5,289.5,9,6);
  rect(distance - 533.5,334.5,9,6);
  rect(distance - 533.5,379.5,9,6);
  rect(distance - 533.5,424.5,9,6);
  rect(distance - 533.5,469.5,9,6);
  rect(distance - 533.5,514.5,9,6);
  rect(distance - 533.5,559.5,9,6);
  rect(distance - 533.5,604.5,9,6);
}

// function grid(){
  // stroke(150, 133, 133);
  // strokeWeight(1);
  //  line(46,0,46,630);
  // line(92,0,92,630);
  // line(138,0,138,630);
  // line(184,0,184,630);
  // line(230,0,230,630);
  // line(276,0,276,630);
  // line(322,0,322,630);
  // line(0,45,400,45);
  // line(0,90,400,90);
  // line(0,135,368,135);
  // line(0,180,368,180);
  // line(0,225,368,225);
  // line(0,270,368,270);
  // line(0,315,368,315);
  // line(0,360,368,360);
  // line(0,405,368,405);
  // line(0,450,368,450);
  // line(0,495,368,495);
  // line(0,540,368,540);
  // line(0,585,368,585);
// }
