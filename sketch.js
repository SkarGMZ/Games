var boy
var boyimage
var ground
var groundimage
var Fireimage
var obsticalimage
var Background
var invisibleground


                                                              
function preload() {
boyimage=loadImage("boy.png")
Fireimage=loadImage("fire.png")
obsticalimage=loadImage("obstacle.jpg")
Backgroundimage=loadImage("Background.jpg")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  Background=createSprite(width/2,height-100,width,height+100)
  Background.addImage(Backgroundimage)
  Background.scale=5
  Background.x=Background.width/2
  boy=createSprite(50, displayHeight-200, 50, 50)
  boy.addImage(boyimage)
  boy.scale=0.5

  ground=createSprite(displayWidth/2,displayHeight-300,displayWidth+200,20)
  ground.addImage(Fireimage)
  ground.scale=2
  invisibleground=createSprite(displayWidth/2,displayHeight-90,displayWidth,5)
}

function draw() {
  background(0);  
  Background.velocityX=-10
  if(Background.x<0)  {
    Background.x=Background.width/2
  }
  if(keyDown("space")) {
    boy.velocityY=-3
  }
  boy.velocityY=boy.velocityY+0.5
  boy.collide(invisibleground)
  createplatform()
  drawSprites();
}
function createplatform() {
  if(frameCount%100===0) {
    var platform=createSprite(width,random(height-200,height-500),random(50,200),50)
    platform.velocityX=-4
    platform.addImage(obsticalimage)
    platform.scale=0.1
  }
} 