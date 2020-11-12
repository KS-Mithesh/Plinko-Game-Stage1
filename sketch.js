const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;

var divisionHeight = 300;

var particles = [];
var plinkos   = [];
var divisions = [];

var width  = 480;
var height = 800;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world  = engine.world;

  ground1 = new ground(240,800,480,30);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new division(k, 800-300/2, 10, divisionHeight));
  }

  for (var j=40; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,75));
  }
  for (var j=15; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,175));
  }
  for (var j=40; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,275));
  }
  for (var j=15; j <= width-10; j=j+50) {
    plinkos.push(new plinko(j,375));
  }

}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  if (frameCount%90===0) {
    particles.push(new particle(random(width/2-10, width/2+10), 10));
  }

  ground1.display();

  for (var k=0; k<divisions.length; k++) {
    divisions[k].display();
  }
  for (var j=0; j<particles.length; j++) {
    particles[j].display();
  }
  for (var i=0; i<plinkos.length; i++) {
    plinkos[i].display();
  }

}