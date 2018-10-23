function setup(){
createCanvas(850,800);
background(0,45,183);

squareGrid(10,10);

}
function draw() {

  //white background rectangle
  noStroke();
  fill(0,45,183);
  rect(0, 0, 75, 20);

  //text showing mouse coordinates
  fill(255, 0, 0);
  text("("+mouseX + ", " + mouseY+")", 5, 15);

  }

  function squareGrid(rows,columns){
    var maxRow = rows;
    var maxCol = columns;

    for (var row = 0; row <= maxRow; row++) {
      push();
      for (var col = 0; col <= maxCol; col++) {

        // var redAm = col/maxCol
        var redAm = row/maxRow;
        var blueAm = maxRow/row;
        var greenAm = maxRow/row;

          print(redAm);
          print(blueAm);
          print(greenAm);

    //create a function for shaded cube grid
      // repeat shaded cube grid function in a cube
        // recurision

        push();
        if (row%2 != 0){
          translate(35,0)
            strokeWeight(0.5);
              fill(redAm*10, greenAm*15, blueAm*100);
            quad(20, 50, 55, 25, 90, 50, 55, 75);
              fill(redAm*13, greenAm*71, blueAm*150);
            quad(55, 75, 90, 50, 90, 90, 55, 115);
              fill(redAm*42, greenAm*169, blueAm*211);
            quad(20, 50, 55, 75, 55, 115, 20, 90);
            // odd rows of pattern
        pop();
          translate (70,0);
      } else {

          strokeWeight(0.5);
              fill(redAm*10, greenAm*15, blueAm*100);
            quad(20, 50, 55, 25, 90, 50, 55, 75);
              fill(redAm*13, greenAm*71, blueAm*150);
            quad(55, 75, 90, 50, 90, 90, 55, 115);
              fill(redAm*42, greenAm*169, blueAm*211);
            quad(20, 50, 55, 75, 55, 115, 20, 90);
            // even rows of pattern
        pop();
          translate (70,0);
      }


        }
      pop();
      translate(0,65)
      }

  }
