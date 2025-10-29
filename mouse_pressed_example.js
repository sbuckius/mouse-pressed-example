function setup() {
  createCanvas(400, 200);
}

function draw() {
  // If the mouse is pressed, make the background blue
  if (mouseIsPressed) {
    background("skyblue");
  } else {
    background(220); // light gray
  }

  // Draw a circle in the center
  fill(0);
  circle(width / 2, height / 2, 50);
}
