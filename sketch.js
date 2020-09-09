const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1
function preload()
{
	
}

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(200,200,100,10)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  ground1.display();
  drawSprites();
 
}

  
 
  
  
 









