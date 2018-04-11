var stripeWidth = 50;

function setup() {

  createCanvas(1000, 1000);

  var listOfColors = [color('#aabf12'), color('#33ab12'), color('#165512'), color('#fe3fa2'), color('#a345cd')];

  //stripeWidth = 20;



  for(var i=0;i<=25;i++) {

    strokeWeight(stripeWidth);

    stroke(listOfColors[int(random(0, listOfColors.length))]);
    line(0, 0, 0, height);
    translate(stripeWidth, 0);
  }
}

function draw() {

}
