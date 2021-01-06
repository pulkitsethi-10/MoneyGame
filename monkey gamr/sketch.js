var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation ("moving",monkey_running);
  monkey.scale=0.1; 
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);  
 }



function draw() {
  background('lightblue');
  if(ground.x>0){
    ground.x=ground.width/2;
  }
 if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY=-12;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  rocks();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,100,50);

  drawSprites();
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(590,590,20,20);
    banana.scale=0.2
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.velocityX=-12;
    banana.lifetime=160;
  
  }
   
}

function rocks(){
if(frameCount %300===0) {
  obstacle=createSprite(590,300,20,20);
  obstacle.addImage(obstaceImage);
  obstacle.scale=0.2
  obstacle.velocityX=-12
  obstacle.lifetime=160;
  
}        
}






