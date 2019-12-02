let level = localStorage.getItem("current_level");


function setup(){
  createCanvas(400,400);
  background(100,3,40);

  if(localStorage){
    if (level == null){
      fill("white");
      print("this is the first time the page loads. You are on level one. Push enter to increase your level.");
    }
    else if(level == 1){
      fill("white");
      print("level = "+level +". Push enter to increase your level.");
    }
    else if(level == 2){
      fill("black");
      print("level = "+level+". Push enter to increase your level.");
    }

    else {
      fill(100,3,40);
        print("you beat the game: no more levels. Push the right arrow to get a new game.");
    }
  }
  else{
      print("Sorry, your browser do not support local storage.");
  }

  ellipse(200,200,250,250);
}

function draw(){


}

function keyPressed(){
  if (keyCode === 13){
     level ++;
    // Store
    localStorage.setItem("current_level", level);

    location.reload();

  }
  if (keyCode === RIGHT_ARROW){
    localStorage.clear();

    location.reload();
  }
}
