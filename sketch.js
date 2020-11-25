
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bg = loadImage ("rain.jpg");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world
	ground = new Ground(600,680,1200,10)
	paper = new Paper (100,660,20)
	dustbinL = new Dustbin (900,630,20,100)
	dustbinR = new Dustbin (1100,630,20,100)
	dustbinM = new Dustbin (1000,670,220,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  ground.display();
  paper.display();
  dustbinL.display();
  dustbinR.display();
  dustbinM.display();
  drawSprites();
 
}
function keyPressed(){
	 if(keyCode === UP_ARROW) { 
		 Matter.Body.applyForce(paper.body, paper.body.position, {x:18, y: -18})
		 }
		 }


