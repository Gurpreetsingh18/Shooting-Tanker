
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

function setup() {
    createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(1000,700,1000,10);
    tanker = new Tanker(900,600,100,100);
    shootingBall = new Ball(100,200,70,70);
    canonBall = new Ball(300,400,80,80);
   
}

function draw() {
background(0);
Engine.update(engine);
ground.display();
shootingBall.display();
canonBall.display();
tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}