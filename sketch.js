var packageBody,groundBody
var ball
var dimg, d
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dimg = loadImage("db.png");
}

function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;
	
	pac1 = new Thing(910, 375, 120, 10);
	pac2 = new Thing(970, 340, 10, 200);
	pac3 = new Thing(850, 340, 10, 200);

	ball = new Ahem(220, 360, 20);
	World.add(world, ball);

	//d = createSprite(910, 300, 50, 100)
	//d.addImage(dimg)
	//d.scale = 0.4
	
	groundBody = Bodies.rectangle(600, 390, 1200, 20, {isStatic:true});
	World.add(world, groundBody);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  pac1.display();
  pac2.display();
  pac3.display();
  ball.display();
  image(dimg, 910, 300, 120, 170)
  rect(groundBody.position.x, groundBody.position.y, 1200, 20);
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body, ball.body.position, {x: 60, y:-25});
  }
}