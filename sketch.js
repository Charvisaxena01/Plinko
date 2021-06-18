const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint
var engine,world;

var divisionHeight = 300;
var plinkos = []
var divisions = []
var particles = []



function setup() {
  createCanvas(485,800);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(0,800,980,30)
  for(var j = 45;j<=width; j=j+50)
  {
      plinkos.push(new plinko(j,75))
  }
  for(var j = 50;j<=width; j=j+50)
  {
      plinkos.push(new plinko(j,175))
  }
  for(var j = 45;j<=width; j=j+50)
  {
      plinkos.push(new plinko(j,275))
  }
  for(var j = 50;j<=width; j=j+50)
  {
      plinkos.push(new plinko(j,375))
  }
  for(var k= 0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
Engine.run(engine)
}

function draw() {
  rectMode(CENTER)
  background("lightGreen");  
  
  for(var k =0;k<divisions.length;k++){
    divisions[k].display()
  }
  if(frameCount %60 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   }
  for(var m = 0; m<particles.length;m++){
    particles[m].display()
  }

  for(var j=0; j<plinkos.length;j++)
  {
    plinkos[j].display()
  }
 
  ground.display()

}