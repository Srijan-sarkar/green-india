
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3,waste,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new recycle (1200,300,10,100);
	bin2 = new recycle(1000,300,10,100);
	bin3 = new recycle(1100,350,200,10);

	ground = new Ground(700,400,1400,20);

	waste =  new Waste(400,300,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  waste.display();
  
  drawSprites();
 
}

function keyPressed (){

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:20,y:-15});
	}

}



