
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(390, 690, 820, 20);
	ball1 = new Ball(140,150)


	dustbin1 = new Dustbin(390, 600, 20, 120);
	dustbin2 = new Dustbin(465, 665, 180, 20);
	dustbin3 = new Dustbin(549, 595, 20, 120)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();	 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball1.display();
 drawSprites();
 
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce( ball1.body,ball1.body.position,{x:150, y:150});
   


	}
}
