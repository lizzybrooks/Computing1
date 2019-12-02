
let highScores = [41,16,80];
let a = [];


function setup() {



  createCanvas(500, 400);
  background(25,40,150,100);

}


function draw(){
  let y = 100;
  textSize(32);
  fill(0);
  for (let i=0; i<a.length; i++){
    text(a[i],100,y);
    y += 50;
  }

}



function SaveDataToLocalStorage(){

    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('scoreboard'));
    // Push the new data (whether it be an object or anything else) onto the array

         a.push(int(random(0,35)));


    // Alert the array value
    alert(a);  // Should be something like [Object array]
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('scoreboard', JSON.stringify(a));


}
