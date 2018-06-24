var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Amara"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(0, 255, 0); // try changing this to a blue background
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55); 
  line(30, 20, 10, 20);
    
    rect(30, 20, 55, 55);
     fill("red");
line(30, 20, 85, 20);
    stroke (126);
 line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);
    drawSquare ();
    
}

function drawSquare () {
   rect(30, 20, 55, 55);
     fill("red");
line(30, 20, 85, 20);
    stroke (126);
 line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);
}
