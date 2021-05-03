 
//Name Spacing 
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World 

var object,engine,world,ball;


function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  //JSON - Javascript Object Notation 
  var options = { isStatic : true}
 object=Bodies.rectangle(400,390,800,50,options);
 World.add(world,object);
var options_b= {restitution : 1.0}
 ball=Bodies.circle(400,200,50,options_b)
 World.add(world,ball);


 console.log(object);


 // createSprite(400, 200, 50, 50);
}

function draw() {
  background("Pink"); 
  
  Engine.update(engine);

  rectMode(CENTER);
  fill("green")

  rect(object.position.x,object.position.y,800,10);

  //circle(ball.position.x,ball.position.y,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)

  //drawSprites();
}