class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }
    this.body1= Bodies.circle(200,100,20,options);
    World.add(world,this.body1);
    this.body1.position.x = 200 ;
    this.body1.position.x = 100; 

  
  }
  

  display() {
    rectMode(CENTER);
    rect(200,100,20);

  }
}
