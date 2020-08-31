
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

	
}

function setup() {
	createCanvas(800, 680);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(90,600,70);
     ground = new Ground(300,650,1500,10);

    box = new DustBin(450,640,100,10);
    box1 = new DustBin(400,610,10,75);
    box2 = new DustBin(500,610,10,75);

	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper.display();
  ground.display();
  box.display();
  //box1.display();
  //box2.display();
   
}

function keyPressed() {
  if (keyCode === UP_ARROW) 
  {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:155,y:-155});
  
  }
  if(keyCode === DOWN_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-155,y:-155});
  }
}

