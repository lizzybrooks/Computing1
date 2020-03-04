
let spaceData;

function setup() {
  createCanvas(600, 600);
  loadJSON('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData(data) {
  spaceData = data;
}

function draw() {
  background(0);

  fill(255)
  text("How many people are in space right now?", 100,100)
  if (spaceData) {
    text(spaceData.number, 150,150)
  }

}
