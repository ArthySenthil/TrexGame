var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(400, 400);
  
  trex = createSprite(50,380,20,50);
  
}

function draw() {
  background(220);
  
  
  drawSprites();
}