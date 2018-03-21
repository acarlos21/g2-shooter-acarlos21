// UI Variables
var canvas;
var gameScreen;
var scoreDisplay;

// Game Variables
var gameRunning;
var shipShooting;
var alienShooting;
var score;

// Ship Variables
var shipDiameter;
var shipX;
var shipY;
var shipSpeed;
var shipColor;

// Bullet Variables
var bulletDiameter;
var bulletX;
var bulletY;

// Alien Variables
var alienDiameter;
var alienX;
var alienY;
var alienVelocity;
var alienColor

// Alien Bullet Variables
var alienBulletDiameter;
var alienBulletX;
var alienBulletY;


/*
 * setup()
 * This function is called once. Sets up the canvas, accesses HTML elements with
 * select(), and adds event listeners to those elements. Sets initial values of
 * variables by calling resetGame().
 */
function setup(){
  canvas = createCanvas(500, 400);
  background(100,50,75);
  gameScreen = select("#game-screen");
  canvas.parent(gameScreen);
  shipColor = "#00ff00";
  shipDiameter = 80;
  shipX = width / 2;
  shipY = height - (shipDiameter/2);
  shipSpeed = 6;
  bulletDiameter = 30;
  shipShooting = false;
  alienColor = "#ff0000";
  alienDiameter = 30;
  alienVelocity = 10;
  alienX = width - width + (alienDiameter/2);
  alienY = height- height + (alienDiameter/2);
}

/*
 * gameOver()
 * This function stops the game from running and shows an alert telling the
 * player what their final score is. Finally it resets the game by calling
 * resetGame()
 */


/*
 * resetGame()
 * This function "resets the game" by initializing ship, alien, and game
 * variables.
 */


/*
 * draw()
 * This function animates the ship, alien, and both kinds of bullets, but only
 * if the game is running.
 */
function draw(){
  background(100, 50, 75);
  drawShip();
  drawAlien();
  if(shipShooting == true){
    drawBullet();
  }
}

/*
 * drawShip()
 * This function draws the player's ship. It also controls the ship's
 * x value by checking if the player is holding down the left or right keys.
 */
function drawShip(){
  if(keyIsDown(LEFT_ARROW) && shipX > shipDiameter / 2){
    shipX -= shipSpeed;
  }
  else if(keyIsDown(RIGHT_ARROW) && shipX < width - (shipDiameter/2)){
    shipX += shipSpeed;
  }

  fill(shipColor);
  ellipse(shipX, shipY, shipDiameter, shipDiameter);

}

/*
 * keyPressed()
 * This function runs automatically when the player presses the spacebar
 * (keyCode === 32). If they do, and a bullet is not currently being fired
 * ("shipShooting" variable is false), it positions the bullet relative to the
 * ship. Then it sets the "shipShooting" variable to "true", indicating a ship
 * bullet is currently being fired.
 */
function keyPressed(){
  if(keyCode =="32" /*step #2 part3;stuck past the &&*/){
    bulletX = shipX;
    bulletY = shipY;
    shipShooting = true;
  }
}

/*
 * drawBullet()
 * This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left of the screen
 * and the player earns a point. The alien aslo becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */
function drawBullet(){
  if(bulletY > 0){
  fill("#ffff00");
  ellipse(bulletX, bulletY, bulletDiameter, bulletDiameter);
  //snip
  bulletY -=10;
}else{
  shipShooting == false;
}
}

/*
 * drawAlien()
 * This function draws an alien. It also checks to see if the alien has touched
 * the player's ship. If it has, the function calls gameOver().
 */
function drawAlien(){
  alienX += alienVelocity
  if(alienX>= canvas + alienDiameter){
  // stopped at here and at part 4 step 3 on the guide(remember keypressed)
  }
  fill(alienColor);
  ellipse(alienX,alienY,alienDiameter,alienDiameter);

}

/*
 * drawAlienBullet()
 * This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */


/*
 * resetAlien()
 * This function sets the alien to its original position at the top-left of
 * the screen. It also sets its velocity to its absolute value (so, if the
 * velocity was negative when it died, it becomes positive upon reset, making
 * it always start by moving to the right).
 */


/*
 * checkCollision(aX, aY, aD, bX, bY, bD)
 * This function first calculates the distance between two circles based on
 * their X and Y values. Based on the distance value, the function returns
 * "true" if the circles are touching, and false otherwise.
 * Circles are considered touching if
 * (distance <= (circle1Diameter + circle2Diameter) / 2)
 */
