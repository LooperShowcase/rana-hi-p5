function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();

  background("black");
  // The same as doing: background(220); or --> background(220,220,220);

  //text(seconds + ":" + minutes + ":" + hours + ":", width / 2, height / 2);
  noFill();
  stroke("black");
  strokeWeight(8);

  translate(width / 2, height / 2);
  rotate(-90);

  // seconds
  strokeWeight(5);
  stroke(0, 29, 61);
  let secArc = map(seconds, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secArc);

  push();
  rotate(secArc);
  line(0, 0, 150, 0);
  pop();

  // minutes
  strokeWeight(5);
  stroke(255, 195, 0);
  let minArc = map(minutes, 0, 60, 0, 360);
  arc(0, 0, 250, 250, 0, minArc);

  push();
  rotate(minArc);
  line(0, 0, 125, 0);
  pop();

  // hours
  strokeWeight(5);
  stroke(217, 4, 41);
  let hArc = map(hours % 12, 0, 12, 0, 360);
  arc(0, 0, 200, 200, 0, hArc);

  push();
  rotate(hArc);
  line(0, 0, 100, 0);
  pop();

  rotate(90);
  text("12", 0, -165);
  text("3", 160, 0);
  text("6", 0, 180);
  text("9", -175, 0);
  textSize(35);

  push();
  textSize(25);
  stroke(255, 195, 0);
  text(hours + ":" + minutes + ":" + seconds, 0, 0);
  pop();
}
