class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.body1= Bodies.circle(x,y,width,height,options);
        World.add(world,this.body1);
        this.width = width;
        this.height = height;

    }

    attach(body){}

    shoot(){}

    display(){
      rectMode(CENTER);
      rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
    }

}

