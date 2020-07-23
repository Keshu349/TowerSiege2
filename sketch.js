const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var box2
var box3
var box4
var box5
var box6
var box7
var box8
var box9
var box10
var ball
var ground
var slingshot

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
var box1 = createSprite(200,199,50,50);
var box2 = createSprite(250,199,50,50); 
var box3 = createSprite(300,199,50,50);
var box4 = createSprite(350,199,50,50);
var box5 = createSprite(225,249,50,50);
var box6 = createSprite(275,249,50,50);
var box7 = createSprite(325,249,50,50);
var box8 = createSprite(313,299,50,50);
var box9 = createSprite(313,299,50,50);
var box10 = createSprite(306,349,50,50);
var ball = createSprite(100,100);

  ground = new Ground(200,200,100,20);
 
  box1 = new Box(200,199,50,50);
  box2 = new Box(250,199,50,50);
  box3 = new Box(300,199,50,50);
  box4 = new Box(350,199,50,50);
  box5 = new Box(225,249,50,50);
  box6 = new Box(275,249,50,50);
  box7 = new Box(325,249,50,50);
  box8 = new Box(313,299,50,50);
  box9 = new Box(313,299,50,50);
  box10 = new Box(306,349,50,50); 
  
  ball = new Ball(100,100);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  strokeWeight(4);

  ball.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ground.display();

  if(ball.isTouching ){
    box1.destroy
  }

  if(ball.isTouching ){
    box2.destroy
  }

  if(ball.isTouching ){
    box3.destroy
  }

  if(ball.isTouching ){
    box4.destroy
  }

  if(ball.isTouching ){
    box5.destroy
  }

  if(ball.isTouching ){
    box6.destroy
  }

  if(ball.isTouching ){
    box7.destroy
  }

  if(ball.isTouching ){
    box8.destroy
  }

  if(ball.isTouching ){
    box9.destroy
  }

  if(ball.isTouching ){
    box10.destroy
  }
    
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}