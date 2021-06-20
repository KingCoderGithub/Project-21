var ball;
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
	var ball_options={
    isStatic:false,
    restitution:0.3,
    friction:0,
    density:1.2
	}

  wall1 = new Ground(200, 390, 400, 20);
  wall2 = new Ground(390, 200, 20, 400);

  rectMode(CENTER);
  ellipseMode(RADIUS);


	Engine.run(engine);
  
}


function draw() {
  background(51);

 wall1.show();
 wall2.show();
Engine.update(engine);

  drawSprites();
 
}

show () {

var pos = this.body.position;
push();
rectMode(CENTER);
stroke(225);
fill(127);
rect(pos.x, pos.y, this.w, this.h);
pop();

}


