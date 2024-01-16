//Boundaries Challenge

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Global Variables
let rectGreenX = 100;
let rectGreenY = 200;
let rectBlueX = 200;
let rectBlueY = 300;

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let APressed = false;
let DPressed = false;
let WPressed = false;
let SPressed = false;

window.addEventListener("load", draw);

function draw() {
  // LOGIC SECTION
  // Move Gren Rect
  if (rightPressed) {
    rectGreenX += 5;
  } else if (leftPressed) {
    rectGreenX += -5;
  }

  if (downPressed) {
    rectGreenY += 5;
  } else if (upPressed) {
    rectGreenY += -5;
  }
  // Move Blue Rect
  if (DPressed) {
    rectBlueX += 5;
  } else if (APressed) {
    rectBlueX += -5;
  }

  if (SPressed) {
    rectBlueY += 5;
  } else if (WPressed) {
    rectBlueY += -5;
  }

  // Check boundaries for Green Rect
  if (rectGreenX + 25 < 0) {
    rectGreenX = cnv.width;
  }

  if (rectGreenX > 400) {
    rectGreenX = -25;
  }

  if (rectGreenY + 25 < 0) {
    rectGreenY = cnv.height;
  }

  if (rectGreenY > 400) {
    rectGreenY = -25;
  }

  // Check boundaries for Blue Rect
  if (rectBlueX < 1) {
    rectBlueX = 0;
  }

  if (rectBlueX > 374) {
    rectBlueX = 375;
  }

  if (rectBlueY < 1) {
    rectBlueY = 0;
  }

  if (rectBlueY > 374) {
    rectBlueY = 375;
  }

  // DRAW SECTION
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "blue";
  ctx.fillRect(rectBlueX, rectBlueY, 25, 25);

  ctx.fillStyle = "green";
  ctx.fillRect(rectGreenX, rectGreenY, 25, 25);

  requestAnimationFrame(draw);
}

//Green Square
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = true;
  } else if (event.code == "ArrowLeft") {
    leftPressed = true;
  } else if (event.code == "ArrowDown") {
    downPressed = true;
  } else if (event.code == "ArrowUp") {
    upPressed = true;
  }

  //Blue Square
  if (event.code == "KeyD") {
    DPressed = true;
  } else if (event.code == "KeyA") {
    APressed = true;
  } else if (event.code == "KeyS") {
    SPressed = true;
  } else if (event.code == "KeyW") {
    WPressed = true;
  }
}

//Green Square
document.addEventListener("keyup", keyupHandler);

function keyupHandler(event) {
  console.log(event.code);

  if (event.code == "ArrowRight") {
    rightPressed = false;
  } else if (event.code == "ArrowLeft") {
    leftPressed = false;
  } else if (event.code == "ArrowDown") {
    downPressed = false;
  } else if (event.code == "ArrowUp") {
    upPressed = false;
  }

  //Blue Square
  if (event.code == "KeyD") {
    DPressed = false;
  } else if (event.code == "KeyA") {
    APressed = false;
  } else if (event.code == "KeyS") {
    SPressed = false;
  } else if (event.code == "KeyW") {
    WPressed = false;
  }
}
