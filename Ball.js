class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body1= Bodies.circle(x,y,radius,options);
    World.add(world,this.body1);
    
  }
  

  display() {
    rectMode(CENTER);
    rect(this.body1.position.x,this.body1.position.y);

  }
}
