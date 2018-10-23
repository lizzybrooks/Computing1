function setup(){
  createCanvas(400,400);
}

function draw() {
  background(220);

  for (var i = 0;  i <= 10; i++) {
    var s = "fib(" + i + ") = " + fib(i);
    text(s, 100, 50 + i * 20);

  }
}

function fib(n) {
  if (n <= 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib (n - 2);
  }
}
