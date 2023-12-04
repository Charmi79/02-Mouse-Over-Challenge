// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 300;

// Global Vairables
let mouseX, mouseY, pmouseX, pmouseY;
let redX = 100;
let redY = 50;
let greenX = 350;
let greenY = 70;
let blueX = 100;
let blueY = 200;
let blueWidth = 90;
let blueHeight = 50;
let yellowX = 350;
let yellowY = 220;
let yellowRadius = 35;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable
  if (mouseX < 190 && mouseX > 100 && mouseY < 100 && mouseY > 50) {
    document.body.style.backgroundColor = "red";
  } else if (Math.sqrt((mouseX - greenX) ** 2 + (mouseY - greenY) ** 2) < 35) {
    document.body.style.backgroundColor = "green";
  }

  // Animate blue rectangle
  if (
    mouseX < blueX + 90 &&
    mouseX > blueX &&
    mouseY < blueY + 50 &&
    mouseY > blueY
  ) {
    document.body.style.backgroundColor = "blue";
    blueX = Math.random() * 400;
    blueY = Math.random() * 300;
    blueWidth = Math.random() * 250;
    blueHeight = Math.random() * 200;
  }

  // Aniamte yellow circle
  if (Math.sqrt((mouseX - yellowX) ** 2 + (mouseY - yellowY) ** 2) < 35) {
    document.body.style.backgroundColor = "yellow";
    yellowX = Math.random() * 400;
    yellowY = Math.random() * 200;
    yellowRadius = Math.random() * 50;
  }

  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw red rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(redX, redY, 90, 50);

  // Draw green circle
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(greenX, greenY, 35, 0, 2 * Math.PI);
  ctx.fill();

  // Draw blue rectangle
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, blueY, blueWidth, blueHeight);

  // Draw yellow circle
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(yellowX, yellowY, yellowRadius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("mousemove", mousemovehandler);

function mousemovehandler(event) {
  // Save previous mouseX and mouseY
  pmouseX = mouseX;
  pmouseY = mouseY;
  // Update mouseX and mouseY
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
  console.log(mouseX, mouseY);
}
