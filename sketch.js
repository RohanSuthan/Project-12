var path, pathImg
var player, player_running
var left_boundary
var right_boundary

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  player_running = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg)
  path.velocityY = 4;
  path.scale = 1.2;

  player = createSprite(200,330,50,55);
  player.addAnimation("running", player_running);
  player.scale = 0.05

  left_boundary = createSprite(32,230,25,500);
  left_boundary.visible = false;
  right_boundary = createSprite(370,230,22,500);
  right_boundary.visible = false; 
  


}

function draw() {
  background(0);
  //code to reset background
  if(path.y > 400){
    path.y = height/1.5;
  }
  player.x = World.mouseX

  player.collide(right_boundary);
  player.collide(left_boundary);
drawSprites();
}
