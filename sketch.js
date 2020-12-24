
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(800,650,1600,50);
	 tree = new Tree(1200,425,50,400);
	 stone = new Stone(400,640,20,30);
	 boy = new Boy(400,600,60,70);
	
	 mango1 = new Mango(1260,130,20,30);
	 mango2 = new Mango(1400,200,30,30);
	 mango3 = new Mango(1140,300,30,20);
	 mango4 = new Mango(1100,200,20,30);
	 mango5 = new Mango(1240,260,20,20);

	Engine.run(engine);
  
}


function draw() {
  background(150,200,255);
 
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
 
}



