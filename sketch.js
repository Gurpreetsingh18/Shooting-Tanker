
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


function setup() {
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground (390,400,1200,100);
    tanker = new Tanker(100,310,160,300);
    shootBall = new Ball(100,200,100,300);
    canonBall = new Ball(100, 300, 70, 70);
   
}

function draw() {
background(0);
Engine.update(engine);
ground.display();
shootBall.display();
tanker.display();
canonBall.display();

}



class keyReleased {
    constructor() {
        if (keyReleased("enter")) {
            canonBall = new Ball();
            canonBall.display();
        }
    }
}
