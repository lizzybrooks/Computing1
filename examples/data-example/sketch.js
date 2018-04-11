var data;

var maleExecs;
var femaleExecs;

function preload() {
  data = loadJSON("googlestats.json");
}

function setup() {
  createCanvas(400, 400);
  background(200);

  var worker = data.employment[0].job;
  text(worker, 100, 150);

   maleExecs = data.employment[0].male;
   text(maleExecs+" men", 100, 170);

   femaleExecs = data.employment[0].female;
   text(femaleExecs+" women", 100, 190);
}

function draw() {
  ellipse(100, 260, maleExecs);
  ellipse(150, 260, femaleExecs);
}
