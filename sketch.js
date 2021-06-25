
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var roof1 , bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1 ,rope2, rope3 , rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof (200,20,300,30);


	bobObject1 = new Bob(250,300);
	bobObject2 = new Bob(300,300);
	bobObject3 = new Bob(350,300);
	bobObject4 = new Bob(400,300);
	bobObject5 = new Bob(450,300);


	rope1 = new Rope( bobObject1.body,roof1.body,+100,0);


	rope2 = new Rope( bobObject2.body,roof1.body,+150,0);
	

	rope3 = new Rope( bobObject3.body,roof1.body,+200,0);
	

	rope4 = new Rope( bobObject4.body,roof1.body,+250,0);
	

	rope5 = new Rope( bobObject5.body,roof1.body,+300,0);
	

	Engine.run(engine);


	
  
}


function draw() {

  rectMode(CENTER);
  background("green");
  
  drawSprites();


  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


 
  roof1.display();
  
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:+700,y:0})
	}

}

