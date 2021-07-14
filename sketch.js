const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var ground;
var con;
var ball2;
var con2;


function setup() {
  createCanvas(500,500);
  engine = Engine.create();
  
  world = engine.world;

  var ball_options = {
    restitution: 0.8
  }
  
  
  ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball3);
  
  ball4 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball4);
  con = Matter.Constraint.create({
          pointA:{x:150,y:0},
          bodyB:ball,
          pointB:{x:0,y:0},
          length:120,
          stiffness:0.1
        });
  
      World.add(world,con);
      
  
        
   con2 = Matter.Constraint.create({
          pointA:{x:175,y:20},
          bodyB:ball2,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con2);

      con3 = Matter.Constraint.create({
        pointA:{x:200,y:00},
        bodyB:ball3,
        pointB:{x:0,y:0},
        length:120,
        stiffness:0.0
      });

    World.add(world,con3);
     
    con4 = Matter.Constraint.create({
      pointA:{x:225,y:00},
      bodyB:ball4,
      pointB:{x:0,y:0},
      length:120,
      stiffness:0.0
    });

  World.add(world,con4);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,12);
  ellipse(ball2.position.x,ball2.position.y,12);
  ellipse(ball3.position.x,ball3.position.y,12);
  ellipse(ball4.position.x,ball4.position.y,12);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  line(con2.pointA.x,con2.pointB.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  pop();
  
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.005,y:0});
    }
    
}

