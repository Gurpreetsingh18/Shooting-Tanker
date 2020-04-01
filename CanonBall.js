class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
     
    }
    this.image = loadImage("assets/canonBall.png");
    this.body1= Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body1);
    this.width = width;
    this.height = height;
  }

  display(){
    rectMode();
    rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
    

  };
};
