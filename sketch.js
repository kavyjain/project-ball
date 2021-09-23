
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball;
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ball =Bodies.circle(200,100,20,option);
      World.add(world,ball)


     var ball_option={
     isStatic:false
	restitution:0
	 friction:0,
	density:1.2
	 }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  groundOje.display();
  groundObj = newground(width/2,670,width,20)
  leftside = newground(1100,600,20,120)

  background(0);
  
  function keyPressed()
  if (kwy ===up_Arrow){

	function hForce()
	{
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
	function vForce()
	{
	 Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}

  }





  drawSprites();
 
}



