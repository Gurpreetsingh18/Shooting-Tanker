class CanonBall {
  constructor(x,y,radius) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
     
    }
    this.image = loadImage("assets/canonBall.png");
    this.body1= Bodies.circle(200,100,20,options);
    World.add(world,canonBall);
    this.width = 20;
  }

  display(){
    ellipseMode(RADIUS);
    ellipse(200,100,20);
    

  }
};
