var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxBody1,boxBody2,boxBody3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown");
     
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	boxBody1 = new Box(295,615,30,100);
    boxBody2 = new Box(465,615,30,100);
	boxBody3 = new Box(380,645,200,30);
    
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background("lightgreen");

  boxBody1.display();
  boxBody2.display();
  boxBody3.display();

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  keyPressed();

  textSize(20);
  stroke("yellow");
  text("Help your people in this zombie infested area by providing medical kits.",10,280);
  text("To drop medical kits from chopper,",10,300);
  text(" press DOWN ARROW",30,320);
  text("As these med kits also have some sensitive information,",10,360);
  text("You have to make sure that kit must drop only in the red box!!",10,380);

  textSize(25);
  stroke("blue");
  textFont("algeria");
  text("!!Danger!!: THIS IS A ZOMBIE INFESTED AREA",100,100);

  drawSprites();
  Engine.update(engine);
  
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(ground,true);
	textSize(30);
	text("YAY!! you are GENIUS..",10,450);
	text("YOU DID IT!!!...YOU ARE TRULY HELPFUL..",10,500);

  }

}



